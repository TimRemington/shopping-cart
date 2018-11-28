import React, { Component } from 'react'
import Options from '../selection/selection.js'
import { Row, Input } from 'react-materialize'

class AddItem extends Component{

  // This literally has no purpose but to get rid of an annoying error message
  killError(){
    return null
  }

  updateCart(){
    let selValue = document.getElementById('product').value
    const quantityVal = parseInt(document.getElementById('quantity').value)
    if (selValue === "" || quantityVal === 0){
      return
    }else{
      selValue = JSON.parse(selValue)
      const { items } = this.props
      const updatedCart = items.map((item) => {
        item.quantity = parseInt(item.quantity)
        if (item.product.id === selValue.id){
          item.quantity = item.quantity + quantityVal
        }
        return item
      })
      this.props.onAddItem(updatedCart)
    }
  }

  render(){
    const { items } = this.props
    return(
      <Row >
        <Input id='quantity' defaultValue="0" label="Quantity" type="number"/>
        <Input id='product' defaultValue="" label="Products" type="select">
          <option value="" disabled>Select a Product</option>
          {items.map((item, idx) => ( <Options key={idx} item={item} /> ))}
        </Input>
          <button className="btn waves-effect waves-light bg-primary section" type="submit" name="action" onClick={this.updateCart.bind(this)}>SUBMIT</button>
      </Row>
    )
  }
}

export default AddItem
