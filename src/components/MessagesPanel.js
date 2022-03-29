import React from 'react';
import Button from 'react-bootstrap/Button';

export class MessagesPanel extends React.Component {
    constructor(props) {
        super(props);
      }
    render() {
      return <div className='messages-panel' >
          <textarea className='messages-panel-input' id="story" name="story"/
          ><Button  className='messages-panel-btn' variant="primary">Valider</Button>
      </div>;
    }
  }