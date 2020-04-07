import React, { Component } from 'react';
import Card from '../components/Card';

export default class CardList extends Component {
  render() {
    const profiles = this.props.profileData;
    return (
      profiles.map(profile => <Card {...profile}/>)
    );
  }
}