import React from 'react';
import {NavLink} from 'react-router-dom';

const running = {
    color: 'red',
    cursor: 'pointer'

};

const stop = {
    color: 'green',
    cursor: 'pointer'
};

const VirtualizationList = ({virtualizations, onEditVirtualization}) => {
    return (
        !virtualizations.length ?
            <p className="alert alert-warning text-center">No virtualizations found.</p>
            :
            <div className="row text-left">
                {virtualizations.map(virtualization =>
                    <div className="col-md-4" key={virtualization.virtualizationID}>
                        <div className="panel-group">
                            <div className="panel panel-default">
                                <div className="panel-heading"><h3>{virtualization.name}</h3></div>
                                <div className="panel-body">
                                    <div className="form-group">
                                        <div className="col-sm-12">
                                        {
                                            virtualization.running ?
                                                <h2>
                                                    <span className="glyphicon glyphicon-stop" style={running} onClick={() => onEditVirtualization(virtualization)}></span>
                                                </h2>
                                                :
                                                <h2><span className="glyphicon glyphicon-play" style={stop} onClick={() => onEditVirtualization(virtualization)}></span></h2>
                                        }
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="col-sm-12">
                                            <label className="control-label">{virtualization.apiType}</label>
                                        </div>    
                                    </div>
                                    <div className="form-group">
                                        <div className="col-sm-4">
                                            <label className="control-label">Port:</label>
                                        </div>
                                        <div className="col-sm-8">
                                            <label className="control-label">{virtualization.port}</label>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="col-sm-4">
                                            <label className="control-label">Protocol:</label>
                                        </div>
                                        <div className="col-sm-8">
                                            <label className="control-label">{virtualization.protocol}</label>
                                        </div>
                                    </div>
                                    <div className="form-group pull-right">
                                        <div className="col-sm-12">
                                            <NavLink to={"/virtualizations/edit/" + virtualization.virtualizationID} className="btn btn-primary btn-sm">Edit</NavLink>
                                            &nbsp;
                                            <NavLink to={"/virtualizations/undeploy/" + virtualization.virtualizationID} className="btn btn-primary btn-sm" disabled="disabled">Undeploy</NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>  
    )
};

export default VirtualizationList;