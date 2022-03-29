import React from 'react'

import {ChannelList} from './ChannelList';
import {MessagesPanel} from './MessagesPanel'

export class Chat extends React.Component {
    constructor(props) {
        super(props);
        this.handler = this.handler.bind(this)
      }
      state = {
        arrayMessages :[],
      }
      handler(input) {
        this.setState({
          arrayMessages: [...input]
        })
      }
    render() {
      return <div className='chat-ctn'>
        <ChannelList onSelectChannel={''} channels={''} />
        <MessagesPanel onSendMessage={''} channel={''} />
      </div>;
    }
  }