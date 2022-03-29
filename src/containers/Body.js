import React from 'react';
import {Chat} from '../components/Chat.js'


export class Body extends React.Component {
    constructor(props) {
        super(props);
      }
    render() {
      return <div className='body-ctn'> <Chat /></div>;
    }
  }