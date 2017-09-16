import React, { Component } from 'react';
import Greeting from './greeting';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      name: 'John',
    };
  }

 handleNameChange(e){
   this.setState({name: e.target.value});
 }

  render() {
  return (
    <div>
      <input
        type="text"
        value={this.state.name}
        onChange={e=> this.handleNameChange(e)}
      />
      <Greeting name={this.state.name }/>
    </div>
    );
  }
}

export default App;
