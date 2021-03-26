import React from "react";

const fr = new FileReader();
class Form extends React.Component {
  constructor(props) {
    super(props);
    this.handleFormChange = this.handleFormChange.bind(this);
    this.handleFileChange = this.handleFileChange.bind(this);
    this.writeImage = this.writeImage.bind(this);
    this.fileInput = React.createRef();
    this.state = {
      file: "",
      fileUrl: "",
    };
  }
  writeImage() {
    const url = fr.result;
    this.setState({
      fileUrl: url,
    });
    this.props.handleFileChange(this.state.file, this.state.fileUrl);
  }
  handleFileChange(ev) {
    const myPic = ev.currentTarget.files[0];
    const picName = myPic.name;
    fr.onload = this.writeImage;
    fr.readAsDataURL(myPic);
    this.setState({
      file: picName,
    });
  }

  handleFormChange(ev) {
    const name = ev.target.id;
    const value = ev.target.value;
    this.props.handleChange(name, value);
  }
  render() {
    return (
      <form>
        <label htmlFor="name">Nombre:</label>
        <input
          id="name"
          type="text"
          // value={this.state.name}
          onChange={this.handleFormChange}
        />
        <label htmlFor="description">Descripción:</label>
        <textarea
          name="description"
          id="description"
          cols="30"
          rows="10"
          // value={this.state.text}
          onChange={this.handleFormChange}
        ></textarea>
        <select
          name="languages"
          id="language"
          // value={this.state.language}
          onChange={this.handleFormChange}
        >
          <option value="Español">Español</option>
          <option value="Inglés">Inglés</option>
          <option value="Portugués">Portugués</option>
        </select>
        <input
          id="file"
          type="file"
          name="file"
          ref={this.fileInput}
          onChange={this.handleFileChange}
        />
      </form>
    );
  }
}

export default Form;
