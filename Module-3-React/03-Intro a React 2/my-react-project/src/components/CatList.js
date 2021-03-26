import React from "react";
import RandomCat from "./RandomCat";

class CatList extends React.Component {
  render() {
    return (
      <section className="section-cats">
        <h1>All Cats Are Beautiful</h1>
        <ul className="section-cats_list">
          <li>
            <RandomCat title="Gato1" width={200} height={200} />
          </li>
          <li>
            <RandomCat title="Gato2" width={200} height={400} />
          </li>
          <li>
            <RandomCat title="Gato3" />
          </li>
        </ul>
      </section>
    );
  }
}

export default CatList;
