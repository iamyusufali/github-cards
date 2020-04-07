import React, { Component } from 'react';


export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { userInput: '' }
  }

  handleEvent = (event) => {
    event.preventDefault();
  }

  changeState = (event) => {
    this.setState({ userInput: event.target.value })
  }

  render() {
    return (
      <form onSubmit={ this.handleEvent }>
        <input value={ this.state.userInput } onChange= { this.changeState } type='text' />
        <button>Add Card</button>
      </form>
    );
  }
}