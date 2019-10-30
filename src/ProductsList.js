import React, { Component } from 'react'
import { products } from './data';
import Product from './Product'

export default class ProductsList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    this.setState({ products: products})
  }
  
  handleProductUpVote = (productId) => {
    const nextProducts = this.state.products.map((product) => {
      if (product.id === productId) {
        return Object.assign({}, product, {
          votes: product.votes + 1,
        });
      } else {
        return product;
      }
    });
    this.setState({
      products: nextProducts,
    });
  }
  
  render() {
    // We can have a JavaScript array of JSX elements.
    const sortedProducts = this.state.products.sort((a,b) => (b.votes - a.votes));
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