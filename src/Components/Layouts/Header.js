import React from 'react';
import { AppBar, Toolbar, Typography } from 'material-ui'
import CreateDialog from '../Exercises/Dialogs/Create'

export default (props) => (
  <AppBar position="static">
    <Toolbar>
      <Typography
        style={{flex: 1}}
        variant="headline"
        color='inherit'
      >
        Exercise App
      </Typography>

      <CreateDialog />
    </Toolbar>
  </AppBar>

);
