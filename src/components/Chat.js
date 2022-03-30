import React from 'react'
import {ChannelList} from './ChannelList';
import {MessagesPanel} from './MessagesPanel'
import {connect} from 'react-redux';
import {ADD_CHANNELS} from '../reducers'

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
          this.props.addChannels(responseJson.channels);
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
        <ChannelList onSelectChannel={(id)=>this.selectChannel(id)} channels={this.props.getChannels()} />
        <MessagesPanel onSendMessage={(id,text)=>this.sendMessage(id,text)} channel={this.state.channel} />
      </div>;
    }
  }
  

  const mapDispatchToProps = (dispatch) => {
    return {
      // dispatching plain actions
      addChannels: (payload) => dispatch({ type: ADD_CHANNELS, payload: payload}),
    }
  }
  const mapStateToPros = (store) => {
    return {
      getChannels: () => store.channels,
    }
  }

  const connectChat = connect(mapStateToPros,mapDispatchToProps);

  export default connectChat(Chat);
