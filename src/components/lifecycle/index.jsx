import React, { Component } from "react";

class Lifecycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      method: "Mounting",
      unmount: false,
    };
    console.log("Mounting Constructor");
  }

  static getDerivedStateFromProps(prop, state) {
    // console.log(`${this.state.method} from getDerivedStateFromProps`);
    console.log(`Mounting/Updating from getDerivedStateFromProps`);
    return null;
  }

  componentDidMount() {
    console.log("Mounting componentDidMount");
  }

  shouldComponentUpdate() {
    console.log("Updating shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate() {
    console.log("Updating getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    console.log("Updating componentDidUpdate");
  }

  changeMethodHandler = () => {
    console.clear();
    this.setState({
      method: "Updating",
    });
  };

  render() {
    console.log(`${this.state.method} from Render`);
    return (
      <div>
        <h1>Lifecycle Methods - {this.state.method}</h1>
        {this.state.method === "Mounting" ? (
          <>
            <p>1. Constructor</p>
            <p>2. GetDerivedStateFromProps</p>
            <p>3. Render</p>
            <p>4. ComponentDidMount</p>
          </>
        ) : (
          <>
            <p>1. GetDerivedStateFromProps</p>
            <p>2. ShouldComponentUpdate</p>
            <p>3. Render</p>
            <p>4. GetSnapshotBeforeUpdate</p>
            <p>5. ComponentDidUpdate</p>
          </>
        )}
        <button onClick={this.changeMethodHandler}>Updating</button>
        <hr />
        {this.state.unmount ? <Child /> : null}
        <button onClick={() => this.setState({ unmount: !this.state.unmount })}>
          Unmounting
        </button>
      </div>
    );
  }
}

export default Lifecycle;

class Child extends Component {
  componentWillUnmount() {
    console.clear();
    console.warn("Unmounting componentWillUnmount");
  }
  render() {
    console.clear();
    return (
      <div>
        <p>1. componentWillUnmount</p>
      </div>
    );
  }
}
