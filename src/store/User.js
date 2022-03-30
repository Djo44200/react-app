import {ADD_USER} from '../reducers'

export const mapDispatchToProps = (dispatch) => {
    return {
      // dispatching plain actions
      addUser: (payload) => dispatch({ type: ADD_USER, payload: payload}),
    }
  }
 export  const mapStateToPros = (store) => {
    return {
      getUser: () => store.user,
    }
  }