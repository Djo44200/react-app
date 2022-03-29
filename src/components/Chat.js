import React from 'react'

import {ChannelList} from './ChannelList';
import {MessagesPanel} from './MessagesPanel'

export class Chat extends React.Component {
    constructor(props) {
        super(props);
      }
    render() {
      return <div className='chat-ctn'>
        <ChannelList/>
        <MessagesPanel/>
      </div>;
    }
  }