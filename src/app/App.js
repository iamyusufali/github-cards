import React from 'react'
import Header from '../components/Header'
import Card from '../components/Card'

// App component
class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header title="Github Cards"/>
        <Card />
      </React.Fragment>
    )
  }
}

export default App