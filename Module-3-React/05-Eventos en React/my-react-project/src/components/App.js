import React from "react";
import "../stylesheets/App.scss";
import CatList from "./CatList";

// const cities = ["Buenos aires", "Sydney", "Praga", "Boston", "Tokyo"];
class App extends React.Component {
  render() {
    return (
      <div className="App">
        {/* <CatList cities={cities} /> */}
        <CatList />
      </div>
    );
  }
}

export default App;
