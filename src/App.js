import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './components/Header.js';
import { Body } from './containers/Body.js';
import { StartModal } from './components/StartModal.js';
import React from 'react';
export class App extends React.Component {

  constructor(props) {
    super(props);
    this.handler = this.handler.bind(this)
  }
  state = {
    username :'',
  }
  handler(username) {
    this.setState({
      username: username,
    })
  }
  render() {
    return (
      <div className="App">
          <StartModal username={this.handler}/>
          <Header name={this.state.username} />
          <Body />
      </div>
    );;
  }
 
}

export default App;
