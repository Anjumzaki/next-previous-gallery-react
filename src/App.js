import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import array from './data';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
    this.handleIndexL = this.handleIndexL.bind(this);
    this.handleIndexR = this.handleIndexR.bind(this);
  }
  handleIndexL(){
    if(this.state.index !== 0){
      var updatedIndex= this.state.index - 1;
      this.setState({
        index:updatedIndex,
      })
    }
  }
  handleIndexR(){
    if(this.state.index !== array.array.length - 1){
      var updatedIndex= this.state.index + 1;
      this.setState({
        index:updatedIndex,
      })
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <img src={'./imagesleft.jpg'} className="buttonLeft" onClick={this.handleIndexL}/>
        <img src={'./imagesright.jpg'} className="buttonRight" onClick={this.handleIndexR}/>
          <img src={'./images/'+array.array[this.state.index].src} className="App-logo" alt={array.array[this.state.index].alt} />
          <p>
            {this.state.index + 1} - {  array.array[this.state.index].firstName} {array.array[this.state.index].lastNames} 
          </p>
          <p className="App-link" >
            {array.array[this.state.index].title}
          </p>
          {array.array[this.state.index].skills? (
        array.array[this.state.index].skills.map(skill => {
          return (
            <b className="skills">{skill+","}</b>
          );
        })
      // If there is a delay in data, let's let the user know it's loading
      ) : (
        <h3>No skills to show</h3>
      )}
        </header>
      </div>
    );
  }
}

export default App;
