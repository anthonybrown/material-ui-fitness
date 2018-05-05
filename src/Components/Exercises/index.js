import React, { Fragment } from 'react'
import { Grid, Paper, Typography, IconButton } from 'material-ui'
import CommentIcon from '@material-ui/icons/Comment'
import DeleteIcon from '@material-ui/icons/Delete'
import CreateIcon from '@material-ui/icons/Create'
import List, {
  ListItem,
  ListItemText,
  ListItemSecondaryAction
} from 'material-ui/List'

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
  },
  onDelete
}) =>
  <Grid container spacing={16}>
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
                    key={title}
                    button
                    onClick={() => onSelect(id)}
                  >
                    <ListItemText primary={title} />
                    <ListItemSecondaryAction>
                      <IconButton
                        aria-label='Create'
                      >
                        <CreateIcon />
                      </IconButton>
                      <IconButton
                        onClick={() => onDelete(id)}
                        aria-label='Delete'
                      >
                        <DeleteIcon />
                      </IconButton>
                    </ListItemSecondaryAction>
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
