import React, { Component } from 'react'
import './App.css'
import Title from './components/layout/Title'
import TabsContainer from './components/containers/TabsContainer'

class App extends Component {
  render() {
    return (
      <div className='wrapper'>
        <Title />
        <TabsContainer />
      </div>
    )
  }
}

export default App
