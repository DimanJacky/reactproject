import React from "react";
import {Field, reduxForm} from "redux-form";
import ObjectComponent from "../objectComponent";
import BindActionCreatorsComponent from "../bindActionCreatorsComponent";

export const Main = () => {
    let addNewMessage = () => {
        console.log('addNewMessage')
    }

    return (
        <div>
            <AddMessageFormRedux onSubmit={addNewMessage} />
            <ObjectComponent />
            <BindActionCreatorsComponent />
        </div>
    );
}

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component="textarea" name="newMessageBody" placeholder="Enter your message" />
            </div>
            <div><button>Send</button></div>
        </form>
    );
}

const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm);