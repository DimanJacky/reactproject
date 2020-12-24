import React from "react";
import {add} from "../redux/actions/actions";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

const BindActionCreatorsComponent = ({counter, add}) => {
    return (
        <div>
            <h3>BindActionCreatorsComponent</h3>
            <p>{counter}</p>
            <button onClick={add}>BindActionCreatorsComponent button</button>
        </div>
    );
};
function mapStateToProps(state) {
    return {
        counter: state.counter.counter
    }
}
const mapDispatchToProps = (dispatch) => bindActionCreators(
    {
        add
    },
    dispatch
);
export default connect(mapStateToProps, mapDispatchToProps)(BindActionCreatorsComponent)