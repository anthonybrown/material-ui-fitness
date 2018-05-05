import React, { Fragment, Component } from 'react'
import { Dialog, Button, TextField, Select } from 'material-ui'
import {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog'
import AddIcon from '@material-ui/icons/Add';
import { FormControl } from 'material-ui/Form'
import { InputLabel } from 'material-ui/Input'
import { MenuItem } from 'material-ui/Menu'
import { withStyles } from 'material-ui/styles'

const styles = theme => ({
  FormControl: {
    width: 500,
  }
})

export default withStyles(styles) (class extends Component {
  state = {
    open: false,
    exercise: {
      title: '',
      description: '',
      muscles: '',
    }
  }

  handleToggle = () => {
    this.setState({
      open: !this.state.open
    })
  }

  handleChange = name => ({ target: { value } }) => {
    this.setState({
      exercise: {
        ...this.state.exercise,
        [name]: value
      }
    })
  }

  handleSubmit = () => {
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
      open: false,
    })
  }

  render() {
    const { open, exercise: { title, description, muscles } } = this.state,
      { classes, muscles: categories } = this.props

    return (
      <Fragment>
        <Button
          onClick={this.handleToggle}
          mini
          variant='fab'
          aria-label='add'
        >
          <AddIcon />
        </Button>
        <Dialog
          open={open}
          onClose={this.handleToggle}
          aria-labelledby='form-dialog-title'
        >
          <DialogTitle id='form-dialog-title'>
            Create a new exercise.
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please fill out the form.
            </DialogContentText>
            <form>
              <TextField
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
          </DialogContent>
          <DialogActions>
            <Button
              onClick={this.handleSubmit}
              color='primary'
              variant='raised'
            >
              Create
            </Button>
          </DialogActions>
        </Dialog>
      </Fragment>
    )
  }
})
