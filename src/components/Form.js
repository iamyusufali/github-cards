import React, { Component } from 'react';

import Title from '../components/Title';


export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { userInput: '' }
  }

  handleEvent = async (event) => {
    event.preventDefault();
    const userName = this.state.userInput;
    const resp = await fetch(`https://api.github.com/users/${userName}`);
    const data = await resp.json();
    this.props.sendUser(data);
  }

  changeState = (event) => {
    this.setState({ userInput: event.target.value })
  }

  render() {
    return (
      <div className='nav'>
        <Title />
        <div className='formBox'>
          <form className='form' onSubmit={ this.handleEvent }>
            <div className='newCard'>
              <h1>Add new Card :</h1>
            </div>
            <input 
              className='userInput' 
              value={ this.state.userInput } 
              onChange= { this.changeState } 
              placeholder='Github username'
              type='text' 
              required />
            <button className='addBtn'>Add</button>
          </form>
        </div>
      </div>
    );
  }
}