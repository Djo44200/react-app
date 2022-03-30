import React from 'react'
import {ChannelList} from './ChannelList';
import {MessagesPanel} from './MessagesPanel'
import {connect} from 'react-redux';
import {mapDispatchToProps,mapStateToProps} from '../store/ChannelStore'

class Chat extends React.Component {
    constructor(props) {
        super(props);
        this.handler = this.handler.bind(this);
      }
      componentDidMount(){
        this.apiSocket();
      }

      state = {
        arrayMessages :[],

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
          this.props.addChannels(responseJson.channels);
        })

      }
      selectChannel(id){
        this.props.selectChannel(id);
      }
      sendMessage(id,text){

      }
    render() {
      return <div className='chat-ctn'>
        <ChannelList onSelectChannel={(id)=>this.selectChannel(id)} channels={this.props.getChannels()} />
        <MessagesPanel onSendMessage={(id,text)=>this.sendMessage(id,text)} channel={this.props.getChannel()} />
      </div>;
    }
  }

  const connectChat = connect(mapStateToProps,mapDispatchToProps);

  export default connectChat(Chat);
