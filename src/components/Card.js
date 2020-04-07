import React, { Component } from 'react';

export default class Card extends Component {
  render() {
    return (
      <div className='profileBox'>
        <img className='avatar' src={this.props.avatar_url} alt=''/>
        <div className='profileInfo'>
          <div className='name'>{this.props.name}</div>
          <div>{this.props.company}</div>
        </div>
      </div>
    );
  }
}