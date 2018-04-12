import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as virtualizationActions from '../actions/virtualizationActions';
import VirtualizationList from '../components/VirtualizationList';

class VirtualizationsPage extends React.Component {

    constructor(props) {
        super(props);   
        this.editVirtualizationStatus = this.editVirtualizationStatus.bind(this);   
    }

    editVirtualizationStatus(virtualizationData) {
        let virtualization = Object.assign({}, virtualizationData, {
            virtualizationID: virtualizationData.virtualizationID,
            running: !virtualizationData.running            
        });
        this.props.actions.editVirtualization(virtualization);
    }

    render() {
        return (
            <div>
                {
                    this.props.ajaxLoading ?
                        <p className="text-center alert alert-info">Loading virtualizations...</p>
                        :
                        <VirtualizationList virtualizations={this.props.virtualizations} 
                                            onEditVirtualization={this.editVirtualizationStatus}/>
                }
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {
        virtualizations: state.virtualizations,
        ajaxLoading: state.ajaxLoading
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(virtualizationActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(VirtualizationsPage);