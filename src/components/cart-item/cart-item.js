import React, {Component} from 'react'
import {CollectionItem, Row, Col} from 'react-materialize'

class CartItem extends Component {
  render() {
    const { item } = this.props
    return (
      <CollectionItem>
        <Row>
          <Col>{item.product.name}</Col>
          <Col>${item.product.priceInCents / 100}</Col>
          <Col>{item.quantity}</Col>
        </Row>
      </CollectionItem>
    )
  }
}

export default CartItem
