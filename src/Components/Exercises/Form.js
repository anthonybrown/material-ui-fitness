import React, { Component } from 'react'
import { FormControl } from 'material-ui/Form'
import { InputLabel } from 'material-ui/Input'
import { MenuItem } from 'material-ui/Menu'
import { withStyles } from 'material-ui/styles'

const styles = theme => ({
  FormControl: {
    width: 500,
  }
})

export default withStyles(styles)(class extends Component {
  state =  {
    title: '',
    description: '',
    muscles: '',

  handleChange = name => ({ target: { value } }) =>
    this.setState({
      [name]: value
    })

  handleSubmit = () =>
    // TODO: validate

    const { exercise } = this.state

    this.props.onCreate({
      ...exercise,
      id: exercise.title.toLowerCase().replace(/ /g, '-')
    })

    this.setState({
      exercise: {
        title: '',
        description: '',
        muscles: '',
      },
      open: false
    })
  }


  render() {
    const  { classes, muscles: categories } = this.props

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
      </form>
    )
  }
})
