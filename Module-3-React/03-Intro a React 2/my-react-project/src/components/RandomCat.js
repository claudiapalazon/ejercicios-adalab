import React from "react";

const getRandomInteger = (maxNumber) => Math.floor(Math.random() * maxNumber);
const NUMBER_OF_CATS = 10;

class RandomCat extends React.Component {
  render() {
    let width;
    let height;
    if (!this.props.width && !this.props.height) {
      width = 400;
      height = 200;
    } else {
      width = this.props.width;
      height = this.props.height;
    }
    const randomCat = getRandomInteger(NUMBER_OF_CATS);

    return (
      <>
        <h3>{this.props.title}</h3>
        <a href="http://lorempixel.com">
          <img
            src={`http://lorempixel.com/${width}/${height}/cats/${randomCat}`}
            alt="Random cat"
          />
        </a>
      </>
    );
  }
}
export default RandomCat;
