import React from 'react'

export class Header extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {
      const headerStyle = {
        color: '#f9f9f9',
        backgroundColor: '#6f1abd',
        height: '5%',
        paddingTop: '10px',
        display:'flex',
        alignItem:'center',
        justifyContent:'center',
      }
      return <div className='header' style={headerStyle}>
       <h1>{this.props.name || "xxx"}</h1></div>;
    }
  }