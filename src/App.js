import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './components/Header.js';
import { Body } from './containers/Body.js';
import { StartModal } from './components/StartModal.js';
import {connect} from 'react-redux';
import {mapDispatchToProps,mapStateToPros} from './store/User'
import React from 'react';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.handler = this.handler.bind(this)
  }

  handler(username) {
    this.props.addUser(username);
  }
  render() {
    return (
      <div className="App">
        <React.StrictMode>
          <StartModal username={this.handler}/>
          <Header name={this.props.getUser()} />
          <Body />
        </React.StrictMode>
      </div>
    );;
  }
 
}
const connectChat = connect(mapStateToPros,mapDispatchToProps);
export default connectChat(App);
