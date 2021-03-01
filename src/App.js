import React from 'react';
import './App.css';

import Header from './components/Header'
import ToyForm from './components/ToyForm'
import ToyContainer from './components/ToyContainer'


class App extends React.Component{
constructor(){
  super()
  this.state = {
    display: false,
    toys: []
  }

}


  handleClick = () => {
    let newBoolean = !this.state.display
    this.setState({
      display: newBoolean
    })
  }

  addLikes = (id) => {
    const add = this.state.toys.map (toyObj => {

      if (id === toyObj.id) {toyObj.likes += 1}
       else {return toyObj}
    })
    this.setState({pets: add})
  }

  addToy = (newToy) => {
    this.setState({
      toys: [...this.state.toys, newToy]
    })
  }

  componentDidMount() {
    fetch("http://localhost:3000/toys")
    .then(resp => resp.json())
    .then(toysArr => {
      this.setState({
        toys: toysArr
      })
    })
  }


  render(){
    return (
      <>
        <Header/>
        { this.state.display
            ?
          <ToyForm addToy={this.addToy}/>
            :
          null
        }
        <div className="buttonContainer">
          <button onClick={this.handleClick}> Add a Toy </button>
        </div>
        <ToyContainer toys={this.state.toys} addLikes={this.addLikes}/>
      </>
    );
  }

}

export default App;
