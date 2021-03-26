import React from "react";

class ButtonCounter extends React.Component {
  render() {
    return <button onClick={this.props.event}>Más ovejas</button>;
  }
}
export default ButtonCounter;
