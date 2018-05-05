import React from 'react';
import { AppBar, Toolbar, Typography } from 'material-ui'
import CreateDialog from '../Exercises/Dialog'

export default ({ muscles, onExerciseCreate }) => (
  <AppBar position="static">
    <Toolbar>
      <Typography
        style={{flex: 1}}
        variant="headline"
        color='inherit'
      >
        Exercise App
      </Typography>

      <CreateDialog
        muscles={muscles}
        onCreate={onExerciseCreate}
      />
    </Toolbar>
  </AppBar>

);
