import React, { Component } from 'react'
import CartItem from '../cart-item/cart-item.js'
import CartTotal from '../cart-total/cart-total.js'
import { Collection, CollectionItem, Row, Col } from 'react-materialize'

class CartItems extends Component {
  render() {
    const { items } = this.props
    const cumulator = (accumulator, currentValue) => accumulator + currentValue;
    const cartAmount = items.map((item) => (item.quantity * item.product.priceInCents)).reduce(cumulator)
    return (
      <div>
        <Collection className="list-group">
          <CollectionItem className="list-group-item">
            <Row>
              <Col><b>Product</b></Col>
              <Col><b>Price</b></Col>
              <Col><b>Quantity</b></Col>
            </Row>
          </CollectionItem>
          { items.filter((item) => (item.quantity > 0)).map((item) => ( <CartItem key={item.id} item={item} /> )) }
          <br></br>
          <CartTotal cartAmount={cartAmount}/>
        </Collection>
      </div>
    )
  }
}

export default CartItems
