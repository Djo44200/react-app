import React from 'react';
import {Chat} from '../components/Chat.js'
import {Navigator} from '../components/Navigator.js'


export class Body extends React.Component {
    constructor(props) {
        super(props);
      }
    render() {
      return <div className='body-ctn'> <Navigator /> <Chat /></div>;
    }
  }