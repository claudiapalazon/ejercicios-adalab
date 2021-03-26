import React from "react";

class Preview extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.state.name}</h1>
        <h2>{this.props.state.description}</h2>
        <h3>{this.props.state.language}</h3>
        <img src={this.props.state.file} alt="imagen" />
      </div>
    );
  }
}

export default Preview;
