import React from 'react'

export class Header extends React.Component {

    render() {
      return <div className='header-ctn'>
       <h1>{this.props.name || "xxx"}</h1></div>;
    }
  }