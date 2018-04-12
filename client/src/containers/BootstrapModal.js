import React from 'react'
import PropTypes from 'prop-types'
import {bindActionCreators} from 'redux'
import { Button, Modal } from 'react-bootstrap'
// import { connectModal } from 'redux-modal'
import { connect } from 'react-redux';
import * as virtualizationActions from '../actions/virtualizationActions';


class BootstrapModal extends React.Component {
  static propTypes = {
    message: PropTypes.string.isRequired,
    handleHide: PropTypes.func.isRequired
  };

  render() {
    const { show, handleHide, message } = this.props

    return (
      <Modal show={show}>
        <Modal.Header>
          <Modal.Title>Hello</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          { message }
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={handleHide}>Close</Button>
          <Button bsStyle="primary" onClick={this.handleClose}>Save changes</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(virtualizationActions.editVirtualization, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(BootstrapModal)
