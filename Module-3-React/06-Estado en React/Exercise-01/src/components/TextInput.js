import React from "react";

class TextInput extends React.Component {
  render() {
    return <input type="text" onChange={this.props.event} />;
  }
}

export default TextInput;
