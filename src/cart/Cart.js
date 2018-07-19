import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { addItem } from './duck'
import Shelf from './Shelf'

class Cart extends Component {
  constructor(props) {
    super(props)
    this.state = {}; 
  }

  render() {
     const CartItems = this.props.cart.map((item, idx) => {
       return <li key={idx}>{item}</li>
     })
    
     return( 
       <div> 
        <Shelf addItem={this.props.addItem}/>
        <h2>Cart Items</h2>
        <ol>
          {CartItems}
        </ol>
      </div>
     )
  }

}

const mapStateToProps = (state, prop) => {
  return {
    cart: state.cart
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: bindActionCreators(addItem, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)

