import React from "react";

class ClassComp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Delarta",
      counter: 0,
    };
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  componentDidUpdate() {
    const { counter } = this.state;

    console.log("componentDidUpdate");
    if (counter > 10) {
      this.setState({ counter: 0 });
    }
  }

  componentWillUnmount(){
    console.log("componentWillUnmount")
  }

  handleCounter = () => {
    const { counter } = this.state;
    this.setState({ counter: counter + 1 });
  };

  render() {
    return (
      <div>
        <h1>This is Class Component</h1>
        <h2>Welcome {this.state.name}</h2>

        <h2>Counter: {this.state.counter}</h2>
        <button onClick={() => this.handleCounter()}>Add Count</button>
      </div>
    );
  }
}

export default ClassComp;
