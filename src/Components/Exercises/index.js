import React, { Fragment } from 'react'
import { Grid, Paper, Typography } from 'material-ui'
import List, { ListItem, ListItemText  } from 'material-ui/List'

const styles = {
  Paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
    height: 370,
    overflowY: 'auto'
  }
}

export default ({ exercises, category }) =>
  <Grid container spacing={8}>
    <Grid item sm>
      <Paper style={styles.Paper}>
        {exercises.map(([group, exercises]) =>
          !category || category === group
            ? <Fragment>
              <Typography
                variant='title'
                style={{textTransform: 'capitalize'}}
              >
                {group}
              </Typography>
              <List component='ul'>
                {exercises.map(({ title }) =>
                  <ListItem button>
                    <ListItemText primary={title} />
                  </ListItem>
                )}
              </List>
            </Fragment>
            : null
        )}
      </Paper>
    </Grid>
    <Grid item sm>
      <Paper style={styles.Paper}>
        <Typography
          variant='display1'
        gutterBottom>
          Welcome
        </Typography>
        <Typography
          variant='subheading'
        >
          Please select an exercise from the list on the left.
        </Typography>
      </Paper>
    </Grid>
  </Grid>
