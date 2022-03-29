import React from 'react'

export class MessagesPanel extends React.Component {
    constructor(props) {
        super(props);
      }
    render() {
      const panelStyle = {
        height: '100%',
      }
      return <div className='messages-panel' style={panelStyle} >
          MessagesPanel
      </div>;
    }
  }