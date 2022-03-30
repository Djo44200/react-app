import {ADD_CHANNELS,SELECT_CHANNEL} from '../reducers'

export const mapDispatchToProps = (dispatch) => {
    return {
      // dispatching plain actions
      addChannels: (payload) => dispatch({ type: ADD_CHANNELS, payload: payload}),
      selectChannel: (payload) => dispatch({ type: SELECT_CHANNEL, payload: payload}),
    }
  }
 export  const mapStateToPros = (store) => {
    return {
      getChannels: () => store.channels,
      getChannel: () => store.channel,
    }
  }