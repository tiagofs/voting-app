import React, { Component } from 'react'
import { products } from './data';
import Product from './Product'

export default class ProductsList extends Component {
  
  handleProductUpVote = (productId) => {
    console.log(productId + ' was upvoted');
  }
  
  render() {
    // We can have a JavaScript array of JSX elements.
    const sortedProducts = products.sort((a,b) => (b.votes - a.votes));
    const productComponents = sortedProducts.map((product) => {
      return <Product 
        key={'product-' + product.id}
        id={product.id}
        title={product.title}
        description={product.description}
        url={product.url}
        votes={product.votes}
        submitterAvatarUrl={product.submitterAvatarUrl}
        productImageUrl={product.productImageUrl}
        onVote={this.handleProductUpVote}
      />
    });
    
    return (
      <div className='ui unstackable items'>
        {productComponents}
      </div>
    )
  }
}