import React, { Component } from 'react'
import { getData } from '../services/api'
import Form from '../forms/Form'
import ResultsContainer from './ResultsContainer'
import Loading from '../layout/Loading'
import ShowsContainer from './ShowsContainer'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

class TabsContainer extends Component {
  constructor() {
    super()
    this.state = {
      list: [],
      isLoading: false,
      tabIndex: 0,
      gotData: false,
      textDisplay: 'Please enter a Search',
    }
  }

  changeTab = () => {
    this.setState({
      tabIndex: 1,
    })
    this.forceUpdate()
  }

  changeText = () => {
    this.setState({
      textDisplay: 'Please initiate a Search',
      list: [],
    })
  }

  fetchData = (event) => {
    event.preventDefault()
    const { term, type } = event.target.elements

    this.setState({
      isLoading: true,
    })

    getData(term, type).then((list) => {
      if (list.length > 0) {
        this.setState({
          list,
          isLoading: false,
          tabIndex: 1,
          textDisplay: '',
        })
      } else {
        this.setState({
          list,
          isLoading: false,
          tabIndex: 1,
          textDisplay: 'Sorry, there were no results',
        })
      }
    })
  }

  render() {
    const { isLoading, list } = this.state
    return (
      <div className='outContainer'>
        <div onInput={this.changeText.bind(this)}>
          <Form
            onSubmit={this.fetchData.bind(this)}
            onSelect={this.changeTab.bind(this)}
          />
        </div>
        <Tabs
          className='tab-container'
          selectedIndex={this.state.tabIndex}
          onSelect={(tabIndex) => this.setState({ tabIndex })}
        >
          <TabList className='tabs'>
            <Tab selectedClassName='selectedTab'>MOVIES</Tab>
            <Tab selectedClassName='selectedTab'>SEARCH</Tab>
            <Tab selectedClassName='selectedTab'>TV</Tab>
          </TabList>

          <TabPanel>
            <ShowsContainer show='movie' />
          </TabPanel>

          <TabPanel className='textSearch'>
            <h3>{this.state.textDisplay}</h3>
            {isLoading ? <Loading /> : <ResultsContainer results={list} />}
          </TabPanel>

          <TabPanel>
            <ShowsContainer show='tv' />
          </TabPanel>
        </Tabs>
      </div>
    )
  }
}

export default TabsContainer
