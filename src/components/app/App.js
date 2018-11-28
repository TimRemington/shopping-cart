import React, {Component} from 'react'
import "./App.css"
import CartHeader from "../cart-header/cart-header.js"
import CartFooter from "../cart-footer/cart-footer"
import CartItems from "../cart-items/cart-items"
import AddItem from "../add-item/add-item"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cartItemsList: [
        { id: 1, product: { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 }, quantity: 1 },
        { id: 2, product: { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 }, quantity: 2 },
        { id: 3, product: { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 }, quantity: 1 },
        { id: 4, product: { id: 43, name: 'Small Aluminum Keyboard', priceInCents: 2500}, quantity: 0 },
        { id: 5, product: { id: 44, name: 'Practical Copper Plate', priceInCents: 1000},  quantity: 0 },
        { id: 6, product: { id: 45, name: 'Awesome Bronze Pants', priceInCents: 399}, quantity: 0 },
        { id: 7, product: { id: 46, name: 'Intelligent Leather Clock', priceInCents: 2999}, quantity: 0 },
        { id: 8, product: { id: 47, name: 'Ergonomic Bronze Lamp', priceInCents: 40000}, quantity: 0 },
        { id: 9, product: { id: 48, name: 'Awesome Leather Shoes', priceInCents: 3990}, quantity: 0 }
      ]
    }
    this.onAddItem = this.onAddItem.bind(this)
  }

  onAddItem = (updatedCart) => {
    this.setState = {
      ...this.state,
      cartItemsList: updatedCart
    }
    this.forceUpdate()
  }

  render() {
    return (
      <div>
        <div>
          <CartHeader />
        </div>
        <div>
          <CartItems items={this.state.cartItemsList} />
          <br></br>
          <AddItem items={this.state.cartItemsList} onAddItem={this.onAddItem}/>
        </div>
        <div>
          <CartFooter copyright="2018" />
        </div>
      </div>
    )
  }
}

export default App;
