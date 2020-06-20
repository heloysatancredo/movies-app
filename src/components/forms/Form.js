import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import Button from '@material-ui/core/Button'

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = { type: 'multi' }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({ type: event.target.value })
  }

  render() {
    return (
      <form
        className='form'
        onSubmit={this.props.onSubmit}
        onSelect={this.props.onSelect}
      >
        <TextField
          label='Search'
          margin='normal'
          name='term'
          type='search'
          variant='outlined'
          style={{ width: '40%', marginRight: '20px', marginBottom: '0' }}
          required
        />
        <TextField
          id='search-type'
          select
          label='Search Type'
          defaultValue='multi'
          value={this.state.type}
          onChange={this.handleChange}
          style={{
            minWidth: '20%',
            marginRight: '20px',
            paddingTop: '10px',
            textAlign: 'center',
          }}
          name='type'
        >
          {types.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <Button
          type='submit'
          variant='outlined'
          style={{ backgroundColor: 'deeppink', color: 'white' }}
        >
          SEARCH
        </Button>
      </form>
    )
  }
}

const types = [
  {
    value: 'multi',
    label: 'multi',
  },
  {
    value: 'movie',
    label: 'movie',
  },
  {
    value: 'tv',
    label: 'tv',
  },
]

export default Form
