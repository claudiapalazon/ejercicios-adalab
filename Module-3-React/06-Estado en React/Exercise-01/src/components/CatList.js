import React from "react";
import TextInput from "./TextInput";
import Paragrah from "./Paragraph";

class CatList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(ev) {
    this.setState({
      text: ev.currentTarget.value,
    });
  }
  render() {
    return (
      <div>
        <TextInput event={this.handleChange}></TextInput>
        <Paragrah text={this.state.text}></Paragrah>
      </div>
    );
  }
}

export default CatList;
