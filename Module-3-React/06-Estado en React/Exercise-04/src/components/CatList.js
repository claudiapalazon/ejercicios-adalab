import React from "react";
import SheepCounter from "./SheepCounter";
import ButtonCounter from "./ButtonCounter";

class CatList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1,
    };

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange() {
    let counterResult = this.state.counter + 1;
    this.setState({
      counter: counterResult,
    });
  }
  render() {
    return (
      <div>
        <SheepCounter counter={this.state.counter}></SheepCounter>
        <ButtonCounter event={this.handleChange}></ButtonCounter>
      </div>
    );
  }
}

export default CatList;
