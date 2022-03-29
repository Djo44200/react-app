import React from 'react'

export class Header extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {
      return <div className='header-ctn'>
       <h1>{this.props.name || "xxx"}</h1></div>;
    }
  }