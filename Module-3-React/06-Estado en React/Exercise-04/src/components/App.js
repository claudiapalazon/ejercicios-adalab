import React from "react";
import "../stylesheets/App.scss";
import CatList from "./CatList";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <CatList />
      </div>
    );
  }
}

export default App;
