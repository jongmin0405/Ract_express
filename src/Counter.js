import React, { Component } from "react";

class Counter extends Component {
  /* constructor(props) {
    super(props);
    this.state = {
      number: 0,
      fixedNumber : 0
    }; */
    state ={
        number : 0,
        fixedNumber : 0
    }
  

  render() {
    const { number ,fixedNumber} = this.state;
    return (
      <div>
        <h1>{number}</h1>
        <h2>불변 :{fixedNumber}</h2>
        <button
          onClick={() => {
            this.setState(
                {
                    number : number + 1
                }
            ,
            ()=>{
                console.log(this.setState);
            })
        }}
        >
            
          +1
        </button>
        
      </div>
     
    );
  }
};

export default Counter;