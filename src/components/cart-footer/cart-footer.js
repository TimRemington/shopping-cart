import React, { Component } from 'react'

class CartFooter extends Component {

  render() {
    const { copyright } = this.props
    return (
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#" copyrights={`© ${copyright}`}  >© 2018</a>
      </nav>
    )
  }

}

export default CartFooter
