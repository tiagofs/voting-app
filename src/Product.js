import React, { Component } from "react";
export default class Product extends Component {

  handleVote = ({target}) => {
    const {onVote, id} = this.props;
    target.className.search("up") > -1 ? onVote(id, 1) : onVote(id, -1);
  }

  render() {
    const {
      title,
      description,
      url,
      votes,
      submitterAvatarUrl,
      productImageUrl
    } = this.props;

    return (
      <div className="item">
        <div className="image">
          <img src={productImageUrl} />
        </div>
        <div className="middle aligned content">
          <div className="header">
            <a onClick={this.handleVote}>
              <i className="large caret up icon" />
            </a>
            <a onClick={this.handleVote}>
              <i className="large caret down icon" />
            </a>
            {votes}
          </div>
          <div className="description">
            <a href={url}>{title}</a>
            <p>{description}</p>
          </div>
          <div className="extra">
            <span>Submitted by:</span>
            <img className="ui avatar image" src={submitterAvatarUrl} />
          </div>
        </div>
      </div>
    );
  }
}
