import React, { Component } from 'react';
import TodoList from "./components/TodoList";
import './App.css';


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username:null
        };
       this.state = { items: [], text: '' };
       this.handleChange = this.handleChange.bind(this);
       this.handleSubmit = this.handleSubmit.bind(this);
    }

  render() {
    const {username} = this.state;
    return (
        <div className="App" >
          <header className="App-header">
            {username ? `Hello ${username}` : 'Hello World'}
          </header>
        
        <h3>TODO</h3>
        <TodoList items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <p>
            <label htmlFor="new-todo">
            What needs to be done?
          </label>
          </p>
          <input
            id="new-todo"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <button>
            Add #{this.state.items.length + 1}
          </button>
        </form>

        
        </div>


        
    );
   
  }
  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.text.length === 0) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState(state => ({
      items: state.items.concat(newItem),
      text: ''
    }));
  }

  

  
  componentDidMount() {
    fetch('/api/group')
        .then(res=>res.json())
        .then(data=>this.setState({username:data.username}));
   }


}



export default App;






