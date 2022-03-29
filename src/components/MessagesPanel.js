import React from 'react';
import Button from 'react-bootstrap/Button';

export class MessagesPanel extends React.Component {
    constructor(props) {
        super(props);
      }
      state = {
        text :'',
      }
      changeHandler = event => {
        this.setState({ text: event.target.value });
      };
      clickHandler = () => {
        this.props.handler(this.state.text);
        this.setState(prevState => ({ text: prevState.text }));
      };
    render() {
      return <div className='messages-panel' >
          <textarea className='messages-panel-input' id="story" name="story" onChange={event => this.changeHandler(event)}/
          ><Button  className='messages-panel-btn' variant="primary" onClick={() => this.clickHandler()}>Valider</Button>
      </div>;
    }
  }