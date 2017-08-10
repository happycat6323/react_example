import React from 'react'
import {Table} from 'react-bootstrap'

export default class Sum extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let sum = this.props.number.map((num,index) =>{
      return(
          <tr key={index}>
            <td stylr={{color:'#ff6600'}}>{num}</td>
          </tr>
      )
    })

    return (
        <Table striped bordered>
          <tbody>
          {sum}
          </tbody>
        </Table>
    )
  }
}