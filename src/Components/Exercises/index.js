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

export default ({
  exercises,
  onSelect,
  category,
  exercise: {
    id,
    title = 'Welcome',
    description = 'Please select an exercise from the list on the left.',
  }
}) =>
  <Grid container spacing={8}>
    <Grid item sm>
      <Paper style={styles.Paper}>
        {exercises.map(([group, exercises]) =>
          !category || category === group
            ? <Fragment key={group}>
              <Typography
                variant='title'
                style={{textTransform: 'capitalize'}}
              >
                {group}
              </Typography>
              <List key={id} component='ul'>
                {exercises.map(({ id, title }) =>
                  <ListItem
                    key={id}
                    button
                    onClick={() => onSelect(id)}
                  >
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
          {title}
        </Typography>
        <Typography
          variant='subheading'
        >
          {description}
        </Typography>
      </Paper>
    </Grid>
  </Grid>
