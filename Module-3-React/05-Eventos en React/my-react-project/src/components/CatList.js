import React from "react";

// Ejercicio 1

// const onBlurListener = (ev) => {
//   if (ev.target.value.includes("cebolla")) {
//     alert("Odio la cebolla");
//   }
// };
// class CatList extends React.Component {
//   render() {
//     return <input onBlur={onBlurListener}></input>;
//   }
// }

// export default CatList;

// const onClickListener = (ev) => {
//   console.log(ev.target);
//   alert(`Tu destino es viajar a ${ev.target.value}`); //No sé qué poner
// };

// class CatList extends React.Component {
//   render() {
//     let html = [];
//     for (let index = 0; index < this.props.cities.length; index++) {
//       html.push(<option key={index}>{this.props.cities[index]}</option>);
//     }
//     return (
//       <select onChange={onClickListener} name="cities">
//         {html}
//       </select>
//     );
//   }
// }

// export default CatList;

// Ejercicio 3
//     const onBlurListener = (ev) => {
//       const body = document.querySelector("body");
//       if (ev.target.value.includes("cebolla")) {
//         body.classList.add("bodyRed");
//       } else {
//         body.classList.remove("bodyRed");
//       }
//     };
// class CatList extends React.Component {
//   render() {
//     return <input onBlur={onBlurListener}></input>;
//   }
// }

// export default CatList;

class CatList extends React.Component {
  constructor(props) {
    super(props);
    this.handleBlur = this.handleBlur.bind(this);
    this.isHating = "white";
  }
  handleBlur = (ev) => {
    // const body = document.querySelector("body");
    if (ev.target.value.includes("cebolla")) {
      // body.classList.add("bodyRed");
      this.isHating = "bodyRed";
    } else {
      // if (this.isHating === "bodyRed") {
      //   console.log("entro aquí");
      this.isHating = "white";
      // }
    }
    this.forceUpdate();
  };
  render() {
    return <input onBlur={this.handleBlur} className={this.isHating}></input>;
  }
}

export default CatList;

// HACER EJERCICIO 6
