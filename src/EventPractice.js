import React, { Component } from "react";

class EventPractice extends Component {
  state = {
    message: "",
  };

  constructor(props) {
    super(props);
    this.handleChang = this.handleChang.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChang(e) {
    this.setState({
      message: e.target.value,
    });
  }

  handleClick() {
    alert(this.state.message);
    this.setState({
      message: "",
    });
  }

  render() {
    return (
      <div>
        <h1>입력하시오</h1>
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력"
          value={this.state.message}
          onChange={this.handleChang}
        ></input>
        <button onClick={this.handleClick}>확인</button>
      </div>
    );
  }
}

export default EventPractice;
