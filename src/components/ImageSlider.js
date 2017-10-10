// Bomb Component Code Goes Here

import React from 'react';

export default class ImageSlider extends React.Component {
  constructor(){
    super();

    this.state = {
      currentSlideIndex: 0
    }
  }

  render(){
    return (
      <p>I am on slide {this.state.currentSlideIndex}</p>
    )
  }
}



// // src/components/Address.js
// import React from 'react';
//
// class Address extends React.Component {
//   constructor(props) {
//     super(props);
//
//     this.state = {
//       fullAddress: `${props.street}, ${props.city}`
//     }
//   }
//
//   render() {
//     return (
//       <div className="address">
//         {this.state.fullAddress}
//       </div>
//     );
//   }
// }
//
// export default Address;

// class Address extends React.Component {
//   render() {
//     return (
//       <div className="address">{this.props.street}, {this.props.city}</div>
//     );
//   }
// }
