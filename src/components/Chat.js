import React from 'react'

import {ChannelList} from './ChannelList';
import {MessagesPanel} from './MessagesPanel'

export class Chat extends React.Component {
    constructor(props) {
        super(props);
      }
    render() {
      const chatStyle = {
        display:'flex',
        alignItem:'center',
        justifyContent:'center',
        flexDirection:'column',
        height: '100%',
        padding:'1rem 0rem 1rem 0rem'
      }
      return <div className='chat' style={chatStyle}>
        <ChannelList/>
        <MessagesPanel/>
      </div>;
    }
  }