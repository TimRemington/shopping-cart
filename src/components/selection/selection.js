import React, { Component } from 'react'

class Selection extends Component {
  render() {
    const { item, idx } = this.props
    return (
      <option key={idx} id={item.product.id} value={JSON.stringify(item.product)}>
        {item.product.name} -- ${item.product.priceInCents/100}
      </option>
    )
  }
}

export default Selection
