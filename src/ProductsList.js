import React, { Component } from 'react'
import { products } from './data';
import Product from './Product'

export default class ProductsList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      products: [],
      sortDesc: true,
    };
  }

  componentDidMount() {
    // We can have a JavaScript array of JSX elements.
    const sortedProducts = products.sort((a, b) => (b.votes - a.votes));
    this.setState({ products: sortedProducts })
  }

  handleProductVote = (productId, vote) => {
    const nextProducts = this.state.products.map((product) => {
      if (product.id === productId) {
        return Object.assign({}, product, {
          votes: product.votes + vote,
        });
      } else {
        return product;
      }
    });
    this.setState({
      products: nextProducts,
    });
  }

  reverseSortProducts = () => {
    this.setState({
      sortDesc: !this.state.sortDesc
    });    
  }

  render() {
    // We can have a JavaScript array of JSX elements.
    const sortedProducts = this.state.products.sort((a,b) => (this.state.sortDesc ? b.votes - a.votes : a.votes - b.votes));
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
        onVote={this.handleProductVote}
      />
    });

    return (
      <div className="header">
        <button className="ui icon basic button" onClick={this.reverseSortProducts}>
          <i className="large sort icon" />
        </button>
        <div className='ui unstackable items'>
          {productComponents}
        </div>
      </div>
    )
  }
}