import React from 'react'
import {Button} from 'react-bootstrap'

import Number from './Number.js'
import Sum from './Sum.js'

export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {number: 0, numberArray:[]}
  }

  add() {
    let numberArray = this.state.numberArray
    numberArray.push(this.state.number+1)
    this.setState({number: this.state.number+1, numberArray: numberArray})
  }

  render() {
    return (
        <div>
          {this.props.text}
          <br/>
          <Button bsStyle="info" onClick={this.add.bind(this)}>Add 1</Button>
          <Number number={this.state.number} />
          -----------------------------------------------
          <Number number={this.state.numberArray} />
          -----------------------------------------------
          <Sum number={this.state.numberArray} />
        </div>
    )
  }
}

