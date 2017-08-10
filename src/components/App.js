import React from 'react'

import '../public/bootstrap/css/bootstrap.min.css';
import '../public/bootstrap/js/bootstrap.min.js';

export default class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
        <div className="container">
          hello world!
          {this.props.children}
        </div>
    )
  }
}

//¦breact¸Ì¬°  className
//this.props
//this.state