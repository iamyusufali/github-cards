import React from 'react'

// Styles
const container = {
  display: 'flex',
  justifyContent: 'center',
  width: '60vw',
  margin: 'auto'
}

const profile = {
  width: '10vw',
  height: '18vh'
}

const person = {
  marginLeft: '2em'
}

const name = {
  fontSize: '2em'
}

const company = {
  fontSize: '1.5em'
}

// Card component
class Card extends React.Component {
  render() {
    return (
      <div style={container}>
        <img style={profile} src="https://placehold.it/75" alt=''/>
        <div style={person}>
          <div style={name}>Name</div>
          <div style={company}>Company name</div>
        </div>
      </div>
    )
  }
}

export default Card