export const ADD_CHANNELS = 'ADD_CHANNELS';
export const SELECT_CHANNEL = 'SELECT_CHANNEL';
export const ADD_USER = 'ADD_USER';


const reducers = (oldState, action)=> {
    switch (action.type) {
      case ADD_CHANNELS:
        return {...oldState,channels:action.payload}
      case SELECT_CHANNEL:
        return {...oldState,channel:action.payload}
      case ADD_USER:
        return {...oldState,user:action.payload}
      default:
        return oldState
    }
} 

export default reducers;