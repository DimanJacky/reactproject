import React from "react";
import {add} from "../redux/actions/actions";
import {connect} from "react-redux";

const ObjectComponent = ({counter, add}) => {
    return (
        <div>
            <h3>ObjectComponent</h3>
            <p>{counter}</p>
            <button onClick={add}>ObjectComponent button</button>
        </div>
    );
};
function mapStateToProps(state) {
    return {
        counter: state.counter.counter
    }
}
const mapDispatchToProps = {
    add
};
export default connect(mapStateToProps, mapDispatchToProps)(ObjectComponent)