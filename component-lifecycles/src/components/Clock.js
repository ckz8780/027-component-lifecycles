import React from "react";

class Clock extends React.Component {
  constructor(props) {
    console.log("Constructor called!");
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    console.log("Component mounted");
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentDidUpdate() {
    console.log("Component updated");
  }

  componentWillUnmount() {
    console.log("Component unmounting...");
    clearInterval(this.timerID);
  }

  tick() {
    this.setState(
      {
        date: new Date()
      },
      // () => {
      //   console.log(`Tick - ${this.state.date.toLocaleTimeString()}`);
      // }
    );
  }

  render() {
    console.log("Render method called");
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

export default Clock;