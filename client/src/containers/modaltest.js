import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { undeployVirtualization } from '../actions/virtualizationActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class VirtualizationModal extends Component{
  constructor(props){
    super(props);
    this.state = {showModal: false};
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
  }
  close() {
    this.setState({ showModal: false });
  }
  open() {
    this.setState({ showModal: true });
  }

  render(){
    const centerText = {
      textAlign : 'center'
    }
    return(
      <div>
        <Button bsStyle="success" onClick={this.open}>Undeploy Virtualization
        </Button>
        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title style={centerText}>Add / Edit</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <span>Under construction</span>
          </Modal.Body>
          <Modal.Footer>
            <Button bsStyle="info" onClick={this.onClickSubmit}>Add / Edit</Button>
            <Button bsStyle="danger" onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({undeployVirtualization}, dispatch)
}

export default connect(null,mapDispatchToProps)(VirtualizationModal)