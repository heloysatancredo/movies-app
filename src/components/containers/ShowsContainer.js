import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import { updateShow } from '../services/api'
import Loading from '../layout/Loading'
import ResultsContainer from '../containers/ResultsContainer'
import { updateFilters, setFilter } from '../services/filters'

class ShowsContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [],
      isLoading: false,
      type: props.show,
      filter: setFilter(props.show),
      updatedFilter: [],
    }
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    setFilter(this.state.type)
    updateShow(this.state.filter, this.state.type).then((list) => {
      this.setState({
        list,
        isLoading: false,
        updatedFilter: updateFilters(this.state.type),
        filter: setFilter(this.state.type),
      })
    })
  }

  handleChange(event) {
    updateShow(event.target.value, this.state.type).then((list) => {
      this.setState({
        list,
        isLoading: false,
        filter: event.target.value,
      })
    })
  }

  render() {
    const { isLoading, list, updatedFilter } = this.state
    return (
      <div>
        <form className={'selectForm'}>
          <TextField
            id='category'
            select
            label='Category'
            value={this.state.filter}
            onChange={this.handleChange}
            style={{ minWidth: '20%', marginRight: '10px' }}
            name='filter'
          >
            {updatedFilter.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </form>
        <div>
          {isLoading ? <Loading /> : <ResultsContainer results={list} />}
        </div>
      </div>
    )
  }
}

export default ShowsContainer
