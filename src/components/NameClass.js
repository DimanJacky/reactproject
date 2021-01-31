import React, {Component} from "react";
import MyContext from "./Context";

class NameClass extends Component {

    render() {
        return (
            <div className="name">
                My name class is {this.context}
            </div>
        );
    }

}

NameClass.contextType = MyContext;

export default NameClass
