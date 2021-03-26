import React from "react";
import "../stylesheets/App.scss";
import Form from "./Form";
import Preview from "./Preview";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.fileinput = React.createRef();
    this.state = {
      name: "",
      description: "",
      language: "",
      file: "",
      nameImage: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleFileChange = this.handleFileChange.bind(this);
  }

  handleFileChange(name, value) {
    this.setState({
      file: value,
      nameImage: name,
    });
  }
  handleChange(name, value) {
    this.setState({
      [name]: value,
    });
  }
  render() {
    return (
      <div className="App">
        <Form
          handleChange={this.handleChange}
          handleFileChange={this.handleFileChange}
        />
        <Preview state={this.state} />
      </div>
    );
  }
}

export default App;
