import React from 'react';
import {Button,Modal,Form} from 'react-bootstrap';


export class StartModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          show: true,
          username:'',
        };
      }
    handleClose = () => this.setState({ show: false });
    
    saveUsename = () => {
      this.props.username(this.state.username);
      this.setState({ show: false, username:this.state.username, })
    };

    changeUsername = event => {
      this.setState({ username: event.target.value });
    };
    render() {

      return <div className='modal'>
        <Modal show={this.state.show} onHide={() =>this.handleClose()}>
        <Modal.Header closeButton>
          <Modal.Title>Username</Modal.Title>
        </Modal.Header>
        <Modal.Body>  <Form.Control
    type="text"
    id="inputtext"
    aria-describedby="textHelpBlock"
    onChange={event => this.changeUsername(event)}
  /></Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() =>this.saveUsename()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      </div>;
    }
  }