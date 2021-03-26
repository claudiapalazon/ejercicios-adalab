import React from "react";
import "../stylesheets/App.scss";
import { fetchReasons } from "./ReasonsService";
import PeopleList from "./PeopleList";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reasonsStore: [],
    };

    this.fetchNewReasons = this.fetchNewReasons.bind(this);
  }
  fetchNewReasons() {
    fetchReasons().then((data) => {
      console.log(data);
      this.setState({
        reasonsStore: data.results,
      });
    });
  }

  render() {
    const { reasonsStore } = this.state;

    return <PeopleList people={reasonsStore} />;
  }
}

export default App;
