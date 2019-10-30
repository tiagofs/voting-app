import React, { Component } from 'react'
import Product from './Product'

export default class ProductsList extends Component {
  render() {
    return (
      <div className='ui unstackable items'>
        <Product />
      </div>
    )
  }
}