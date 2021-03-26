import React from "react";

class Item extends React.Component {
  render() {
    return (
      <div className="item">
        <h5 className="quantity">{this.props.item.quantity}</h5>
        <div>
          <h5>{this.props.item.name}</h5>
          <h6 className="text-muted">{this.props.item.description}</h6>
        </div>
        <div className="badge badge-info">{this.props.item.category}</div>
        <h5 className="price">{this.props.item.price}€</h5>
      </div>
    );
  }
}

export default Item;
