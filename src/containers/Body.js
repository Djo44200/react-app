import React from 'react';
import {Chat} from '../components/Chat.js'


export class Body extends React.Component {
    constructor(props) {
        super(props);
      }
    render() {
        const bodyStyle = {
            height: '100%', 
            backgroundColor: 'rgb(44, 47, 74)',
            display:'flex',
            alignItem:'center',
            justifyContent:'center',
          }
      return <div className='body-ctn' style={bodyStyle}> <Chat /></div>;
    }
  }