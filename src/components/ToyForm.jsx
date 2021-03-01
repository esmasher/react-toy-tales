import React, { Component } from 'react';

class ToyForm extends Component {

  constructor () {
    super ()
    this.state = {
      name: '',
      image: ''}
  }


  // addName = (event) => {
  //   this.setState({name: event.target.value})

  // }

  handleChange = (event) => {
    console.log(event.target.name)
    console.log(event.target.value)
    this.setState({
      [event.target.name]: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const newToy = {
      name: this.state.name,
      image: this.state.image
    }
    //send json
    this.props.addToy(newToy)
  }

  render() {
    console.log(this.state)
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="add-toy-form">
          <h3>Create a toy!</h3>
          <input onChange={this.handleChange} type="text" name="name" placeholder="Enter a toy's name..." className="input-text"/>
          <br/>
          <input onChange={this.handleChange} type="text" name="image" placeholder="Enter a toy's image URL..." className="input-text"/>
          <br/>
          <input type="submit" name="submit" value="Create New Toy" className="submit"/>
        </form>
      </div>
    );
  }

}

export default ToyForm;
