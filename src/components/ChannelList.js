import React from 'react'


export class ChannelList extends React.Component {
    constructor(props) {
        super(props);
      }
    render() {
      const channelStyle = {
        height: '100%',
      }
      return <div className='channel-list' style={channelStyle}>
          Channel
      </div>;
    }
  }