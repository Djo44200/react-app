export const ADD_CHANNELS = 'ADD_CHANNELS';

const reducers = (oldState, action)=> {
    switch (action.type) {
      case ADD_CHANNELS:
        const newState = {...oldState,channels:action.payload} 
        return newState
      default:
        return oldState
    }
} 

export default reducers;