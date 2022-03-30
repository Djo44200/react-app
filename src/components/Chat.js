import React from 'react'
import {ChannelList} from './ChannelList';
import {MessagesPanel} from './MessagesPanel'

export class Chat extends React.Component {
    constructor(props) {
        super(props);
        this.handler = this.handler.bind(this);
      }
      componentDidMount(){
        this.apiSocket();
      }

      state = {
        arrayMessages :[],
        channels:[],
        channel:{}

      }
      handler(input) {
        this.setState({
          arrayMessages: [...input]
        })
      }
      async apiSocket(){
        await fetch(`https://pacific-sierra-45747.herokuapp.com/getChannels`)
        .then(response => response.json())
        .then( async (responseJson) => {
          this.setState({
            channels: responseJson.channels
          })
        })

      }
      selectChannel(id){
        this.setState({
          channel: {id:id}
        })
      }
      sendMessage(id,text){

      }
    render() {
      return <div className='chat-ctn'>
        <ChannelList onSelectChannel={(id)=>this.selectChannel(id)} channels={this.state.channels} />
        <MessagesPanel onSendMessage={(id,text)=>this.sendMessage(id,text)} channel={this.state.channel} />
      </div>;
    }
  }