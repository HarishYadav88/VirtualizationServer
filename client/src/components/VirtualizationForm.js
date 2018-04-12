import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Redirect, NavLink } from 'react-router-dom';

let VirtualizationForm = ({onSubmit, submitting, formStatus}) => {
    return (
        <div className="row text-left">
            <div className="col-sm-6 col-lg-4 col-sm-push-3 col-lg-push-4">
                <form onSubmit={ onSubmit } noValidate>
                    <Field name="name" component={renderField} type="text"
                           id="v-name" label="name"/>
                    <Field name="port" component={renderField} type="number"
                           id="v-port" label="port"/>
                    <Field name="protocol" component={renderField} type="select"
                           id="v-protocol" label="protocol"/>
                    <div className="pull-right">
                        <button type="submit" className="btn btn-primary" disabled={submitting}>Ok</button>
                        &nbsp;&nbsp;
                        <NavLink to="/virtualizations" className="btn btn-default">Cancel</NavLink>
                    </div>

                </form>
                {formStatus === 'success' &&
                <p className="alert alert-success">
                    virtualization successfully saved.
                    <Redirect to="/virtualizations" />
                </p>}
                {formStatus === 'error' &&
                <p className="alert alert-danger">Saving virtualization failed. Please fill in all the fields.</p>}
            </div>
        </div>
    )
};

const renderField = ({
    input,
    label,
    type,
    id,
    meta: {touched, error}
}) => (
    (type === 'select')
        ?
        <div className="form-group">
            <label htmlFor={id}>
                {label}
            </label>
            <select {...input} className="form-control">
                <option value="HTTP">HTTP</option>
                <option value="HTTPS">HTTPS</option>
                <option value="TCP">TCP</option>
            </select>
            {touched &&
            (error &&
            <span className="error-text">
            {error}
          </span>)}
        </div>
        :
        <div className="form-group">
            <label htmlFor={id}>
                {label}
            </label>
            <input {...input} id={id} type={type} className="form-control"/>
            {touched &&
            (error &&
            <span className="error-text">
            {error}
          </span>)}
        </div>
);

function validate(formProps) {
    const errors = {};
    if (!formProps.name) {
        errors.name = 'Please enter a name';
    }
    if (!formProps.port) {
        errors.port = 'Please enter a name';
    }
    if (!formProps.protocol) {
        errors.protocol = 'Please enter a protocol';
    }
    return errors;
}

VirtualizationForm = reduxForm({
    form: 'virtualization',
    validate,
    enableReinitialize: true
})(VirtualizationForm);

export default VirtualizationForm;