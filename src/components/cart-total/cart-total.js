import React, { Component } from 'react'
import { CollectionItem, Row, Col } from 'react-materialize'

class CartTotal extends Component {
  render(){
    const { cartAmount } = this.props
    console.log(cartAmount)
    return (
      <CollectionItem>
        <Row>
          <Col><b>Total</b></Col>
          <Col>${cartAmount/100}</Col>
          <Col></Col>
        </Row>
      </CollectionItem>
    )
  }

}

export default CartTotal
