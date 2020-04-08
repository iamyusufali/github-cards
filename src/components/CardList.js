import React, { Component } from 'react';
import Card from '../components/Card';

export default class CardList extends Component {
  render() {
    const profiles = this.props.profileData;
    return (
      <div className='cardBox'>
        {profiles.map(profile => <Card key={ profile.id } {...profile}/>)}
      </div>
    );
  }
}