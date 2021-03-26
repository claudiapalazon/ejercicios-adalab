import React from "react";
import Item from "./Item";

class ItemList extends React.Component {
  render() {
    let html = [];
    for (let i = 0; i < this.props.list.length; i++) {
      html.push(
        <li key={i}>
          <Item item={this.props.list[i]} />
        </li>
      );
    }

    return <ul className="item-list">{html}</ul>;
  }
}
export default ItemList;
