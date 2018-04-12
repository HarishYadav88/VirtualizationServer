import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as virtualizationActions from '../actions/virtualizationActions';
import VirtualizationForm from '../components/VirtualizationForm';

class EditVirtualizationPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formStatus: null
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        if (!this.props.virtualizationForm.syncErrors) {
            let virtualization = Object.assign({}, this.props.virtualizationForm.values, {
                virtualizationID: this.props.currentVirtualization.virtualizationID
            });
            this.props.actions.editVirtualization(virtualization);
            this.setState({formStatus: 'success'});
        } else {
            this.setState({formStatus: 'error'});
        }
    }

    render() {
        return (
            this.props.ajaxLoading ?
                <p className="text-center alert alert-info">Loading virtualization...</p>
                :
                !this.props.currentVirtualization ?
                    <p className="text-center alert alert-danger">Virtualization not found.</p>
                    :
                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-6">
                            <div className="panel panel-default">
                                <div className="panel-heading"><h3>Edit virtualization</h3></div>
                                <div className="panel-body">
                                    <VirtualizationForm onSubmit={this.handleSubmit} formStatus={this.state.formStatus}
                                            initialValues={this.props.currentVirtualization} goBack={this.props.goBack} />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3"></div>
                    </div>
        )
    }
}

function findCurrentVirtualization(virtualizations, id = -1) {
    return virtualizations.find(virtualization => {
        return parseInt(virtualization.virtualizationID, 10) === parseInt(id, 10);
    });
}

function mapStateToProps(state, ownProps) {
    let currentVirtualization = state.virtualizations.length ? findCurrentVirtualization(state.virtualizations, ownProps.match.params.virtualizationID) : null;
    return {
        currentVirtualization,
        virtualizationForm: state.form.virtualization,
        ajaxLoading: state.ajaxLoading,
        goBack: ownProps.history.goBack
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(virtualizationActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditVirtualizationPage);