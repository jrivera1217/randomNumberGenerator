import React, { Component } from "react";
import "./App.css";
class Random extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      shouldAnimate: false,
    };
  }

  generateRandom = () => {
    const randomNumber = Math.floor(Math.random() * 9999);
    this.setState({
        count: randomNumber,
      shouldAnimate: true, // Trigger animation
    });

    setTimeout(() => {
      this.setState({
        shouldAnimate: false, // Reset animation
      });
    }, 1000); // Wait for 1 second (matching the animation duration)
  };

  render() {
    const animationClass = this.state.shouldAnimate
    ? "animate__animated animate__rotateInDownLeft"
    : "";
    return (
      <div className="container">
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
        <button className="btn" onClick={this.generateRandom}>
          Random Numbers
        </button>
        <h1 class={animationClass}>
          Number: {this.state.count}
        </h1>
      </div>
    );
  }
}

export default Random;
