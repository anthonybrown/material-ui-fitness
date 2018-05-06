import React, { Component } from 'react'
import { TextField, Select, Button } from 'material-ui'
import { FormControl } from 'material-ui/Form'
import { InputLabel } from 'material-ui/Input'
import { MenuItem } from 'material-ui/Menu'
import { withStyles } from 'material-ui/styles'

const styles = theme => ({
  FormControl: {
    width: 300  ,
  }
})

export default withStyles(styles)(class extends Component {
  state = this.getInitState()

  getInitState() {
    const { exercise } = this.props

    return exercise ? exercise : {
      title: '',
      description: '',
      muscles: '',
    }
  }

  static getDerivedStateFromProps({ exercise }) {
    return exercise
  }

  handleChange = name => ({ target: { value } }) =>
    this.setState({
      [name]: value
    })

  handleSubmit = () => {
    // TODO: validate

    this.props.onSubmit({
      id: this.state.title.toLowerCase().replace(/ /g, '-'),
      ...this.state,
    })

    this.setState(this.getInitState())
  }

  render() {
    const  { classes, exercise, muscles: categories } = this.props
    const { title, description, muscles } = this.state

    return (
      <form>
        <TextField
          autoFocus
          className={classes.FormControl}
          label='Title'
          value={title}
          onChange={this.handleChange('title')}
          margin="normal"
        />
        <br />
        <FormControl className={classes.FormControl}>
          <InputLabel htmlFor='muscles'>
            Muscles
          </InputLabel>
          <Select
            value={muscles}
            onChange={this.handleChange('muscles')}
          >
            {categories.map(category =>
              <MenuItem key={category} value={category}>
                {category}
              </MenuItem>
            )}
          </Select>
        </FormControl>
        <br />
        <TextField
          className={classes.FormControl}
          multiline
          rows='4'
          label='Description'
          value={description}
          onChange={this.handleChange('description')}
          margin="normal"
        />
        <br />
        <Button
          onClick={this.handleSubmit}
          color='primary'
          variant='raised'
        >
          {exercise ? 'Edit' : 'Create'}
        </Button>
      </form>
    )
  }
}
)
