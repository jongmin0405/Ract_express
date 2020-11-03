import React, { Component } from "react";
import "./ValidationSample.css";

class ValidationSample extends Component {
  state = {
    password: "",
    clicked: false,
    validated: false,
  };

  handleChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  handleButtonChange = () => {
    this.setState({
      clicked: true,
      validated: this.state.password === "0000",
    });
    this.input.focus();
  };

  render() {
    return (
      <div>
        <input
          type="password"
          value={this.state.password}
          onChange={this.handleChange}
          onClick={this.handleButtonChange}
          className={
            this.state.clicked
              ? this.state.validated
                ? "success"
                : "failure"
              : ""
          }
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              this.handleButtonChange();
            }
            
          }}
          ref={(ref)=>{this.input=ref}}
        />
        
        <button onClick={this.handleButtonChange}>검증</button>
      </div>
    );
  }
}

export default ValidationSample;
