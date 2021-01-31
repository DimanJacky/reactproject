import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';

class UserEdit extends Component {

    handleEditProfileFormSubmit(formProps) {
        console.log(formProps);
    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <div>
                <form onSubmit={handleSubmit(this.handleEditProfileFormSubmit.bind(this))}>
                    <Field name="counter" component="input" type="text" placeholder="John Doe" className="form-control"/>
                    <button action="submit" className="btn btn-primary">Sign up!</button>
                </form>
            </div>
        );
    }

}

let InitializeFromStateForm = reduxForm({
    form: 'initializeFromState'
})(UserEdit);

InitializeFromStateForm = connect(
    state => ({
        initialValues: state.counter.counter
    })
)(InitializeFromStateForm);

export default InitializeFromStateForm;
