import React, { Fragment, Component } from 'react'
import { Dialog, Button } from 'material-ui'
import {
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog'
import { Add } from '@material-ui/icons'
import Form from './Form'

export default class extends Component {
  state = {
    open: false,
  }

  handleToggle = () => {
    this.setState({
      open: !this.state.open
    })
  }

  handleFormSubmit = exercise => {
    this.handleToggle()

    this.props.onCreate(exercise)
  }


  render() {
    const { open } = this.state,
          { muscles } = this.props

    return (
      <Fragment>
        <Button
          onClick={this.handleToggle}
          mini
          variant='fab'
          aria-label='add'
        >
          <Add />
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
            <Form
              muscles={muscles}
              onSubmit={this.handleFormSubmit}
            />
          </DialogContent>
        </Dialog>
      </Fragment>
    )
  }
}
