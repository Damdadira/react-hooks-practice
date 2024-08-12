import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = { counter: 1 }; //상태 기본 설정
  }

  handleIncrease = () => {
    this.setState({
      counter: this.state.counter * 2, //상태 업데이트
    });
  };

  handleDecrease = () => {
    this.setState({
      counter: this.state.counter / 2, //상태 업데이트
    });
  };

  render() {
    return (
      <>
        <h2>Class Component</h2>
        <div style={{ display: 'flex' }}>
          <h1 style={{ margin: '0 24px 0 0', color: 'palegreen' }}>
            {this.state.counter}
          </h1>
          <button onClick={this.handleIncrease} style={{ marginRight: '8px' }}>
            X2
          </button>
          <button onClick={this.handleDecrease}>%2</button>
        </div>
      </>
    );
  }
}

export default Counter;
