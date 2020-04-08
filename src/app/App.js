import React, { Component } from 'react';
import Form from '../components/Form';
import CardList from '../components/CardList';


export default class App extends Component {
  state = {
    profiles: [] 
  }

  addNewUser = (newUserData) => {
    this.setState(prevState => { 
      return { profiles: [...prevState.profiles, newUserData] };
    })
  }

  render() {
    return (
      <React.Fragment>
        <Form sendUser={ this.addNewUser }/>
        <CardList profileData={ this.state.profiles }/>
      </React.Fragment>
    );
  }
}