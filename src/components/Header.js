import React from 'react'

// Styles
const container = {
  display: 'flex',
  justifyContent: 'center',
  width: '60vw',
  height: '20vh',
  margin: 'auto',
  paddingTop: '2.5em'
}

const heading = {
  fontSize: '3em',
  color: '#4C4B4B',
  fontFamily: `system-ui, Poppins, Cambay, sans-serif`
}

// Header component
class Header extends React.Component {
  render() {
    return (
      <div style={container}>
        <h1 style={heading}>{this.props.title}</h1>
      </div>
    )
  }
}

export default Header