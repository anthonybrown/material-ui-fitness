import React, { Fragment } from 'react'
import { Grid, Paper, Typography, IconButton } from 'material-ui'
import { Edit, Delete } from '@material-ui/icons'
import Form from './Form'

import List, {
  ListItem,
  ListItemText,
  ListItemSecondaryAction
} from 'material-ui/List'

const styles = {
  Paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 30,
    height: 370,
    overflowY: 'auto'
  }
}

export default ({
  muscles,
  exercises,
  onSelect,
  editMode,
  category,
  exercise: {
    id,
    title = 'Welcome',
    description = `Please select an exercise from the list on the left.`,
  },
  onDelete,
  onSelectEdit,
  onEdit,
  exercise,
}) =>
  <Grid container spacing={16}>
    <Grid item xs>
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
                        onClick={() => onSelectEdit(id)}
                        aria-label='Create'
                      >
                        <Edit />
                      </IconButton>
                      <IconButton
                        onClick={() => onDelete(id)}
                        aria-label='Delete'
                      >
                        <Delete />
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
    <Grid item xs>
      <Paper style={styles.Paper}>
        {editMode
          ? <Form
            exercise={exercise}
            muscles={muscles}
            onSubmit={onEdit}
            />
          : <Fragment>
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
          </Fragment>
        }
      </Paper>
    </Grid>
  </Grid>
