import React, {Component} from "react";
//import EventPractice from "./EventPractice";
//import ValidationSample from "./ValidationSample"; 
//import ScrollBox from "./ScrollBox";
//import IterationSample from "./IterationSample";
import LifeCycleSample from "./LifeCycleSample";
import ErrorBoundaty from "./ErrorBoundary";

//test
function getRandomColor(){
  return '#' + Math.floor(Math.random()*16777215).toString(16);
}
class App extends Component {
    state={
      color : '#000006'
    }

<<<<<<< HEAD
    //$$sksksk
=======
//test
>>>>>>> bd5f37254b59f13d06313c1c65e35e8fc2b15736

  handleClick=()=>{
    this.setState({
      color:getRandomColor()
    });
  }
  render() {
    return (
      <div>
        <button onClick ={this.handleClick}> 랜덤색상</button>
        <ErrorBoundaty>
        <LifeCycleSample color={this.state.color} />  
        </ErrorBoundaty>
      </div>
    );
  }
}

export default App;

