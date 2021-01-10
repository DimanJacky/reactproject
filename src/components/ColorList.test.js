import React from "react";
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {ColorList} from "./ColorList";

configure({
    adapter: new Adapter()
});

const _testColors = [
    {
        id: "8658c1d0-9eda-4a90-95e1-8001e8eb6036",
        title: "lawn",
        color: "#44ef37",
        timestamp: "Sun Apr 10 2016 12:54:19 GMT-0700 (PDT)",
        rating: 4
    },
    {
        id: "f9005b4e-975e-433d-a646-79df172e1dbb",
        title: "ocean blue",
        color: "#0061ff",
        timestamp: "Mon Apr 11 2016 12:54:31 GMT-0700 (PDT)",
        rating: 2
    },
    {
        id: "58d9caee-6ea6-4d7b-9984-65b145031979",
        title: "tomato",
        color: "#ff4b47",
        timestamp: "Fri Apr 15 2016 12:54:43 GMT-0700 (PDT)",
        rating: 0
    }
];

jest.mock('./Color', () =>
    ({rating, onRate=f=>f}) =>
    <div className="mock-color">
        <button className="rate" onClick={() => onRate(rating)} />
    </div>
);

describe("<ColorList /> UI Component", () => {
    describe("Rating a Color", () => {
        let _rate = jest.fn();
        beforeAll(() =>
            shallow(<ColorList colors={_testColors} onRate={_rate} />)
                .find('button.rate')
                .first()
                .simulate('click')
        );

        it("invokes onRate Handler", () =>
            expect(_rate).toBeCalled()
        );

        it("rates the correct color", () =>
            expect(_rate).toBeCalledWith(
                "8658c1d0-9eda-4a90-95e1-8001e8eb6036",
                4
            )
        );
    });
});

