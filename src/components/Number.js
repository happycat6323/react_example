import React from 'react'

export default class Number extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
        <h1 style={{color:'#cc0066'}}>{this.props.number}</h1>
    )
  }
}