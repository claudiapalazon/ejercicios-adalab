import React from "react";

class CatList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      styling: "blue",
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState, props) => {
      let nextStyling;
      if (prevState.styling === "blue") {
        nextStyling = "red";
      } else {
        nextStyling = "blue";
      }

      return {
        styling: nextStyling,
      };
    });
  }

  render() {
    return (
      <div className={this.state.styling} onClick={this.handleClick}></div>
    );
  }
}

export default CatList;
