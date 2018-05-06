import React, { Component, Fragment } from 'react';
import { Header, Footer } from './Layouts';
import Exercises from './Exercises'
import { muscles, exercises } from '../store'

export default class extends Component {
  state = {
    exercises,
    category: '',
    exercise: {},
    editMode: false,
  }

  getExercisesByMuscles() {
    const initialExercises = muscles.reduce((exercises, category) => ({
      ...exercises,
      [category]: []
    }), {})

    // console.log(muscles, initialExercises);

    return Object.entries(
      this.state.exercises.reduce((exercises, exercise) => {
        const { muscles } = exercise

        exercises[muscles] = [...exercises[muscles], exercise]

        return exercises
      }, initialExercises)
    )
  }

  handleSelect = category =>
    this.setState({
      category
    })

  handleExerciseSelect = id =>
    this.setState(({ exercises }) => ({
      exercise: exercises.find(ex => ex.id === id),
      editMode: false,
    }))

  handleExerciseCreate = exercise =>
    this.setState(({ exercises }) => ({
      exercises: [
        ...exercises,
        exercise
      ]
    }))

  handleExerciseDelete = id =>
    this.setState(({ exercises, exercise }) => ({
      exercises: exercises.filter(ex => ex.id !== id),
      editMode: false,
      exercise: exercise.id === id ? {} : exercise
    }))

  handleExerciseSelectEdit = id =>
    this.setState(({ exercises }) => ({
      exercise: exercises.find(ex => ex.id === id),
      editMode: true
    }))

  handleExerciseEdit = exercise =>
    this.setState(({ exercises }) => ({
      exercises: [
        ...exercises.filter(ex => ex.id !== exercise.id),
        exercise
      ],
      exercise
    }))

  render() {
    const exercises = this.getExercisesByMuscles()
    const { category, exercise, editMode } = this.state
    return (
      <Fragment>
        <Header
          muscles={muscles}
          onExerciseCreate={this.handleExerciseCreate}
        />

        <Exercises
          exercise={exercise}
          category={category}
          exercises={exercises}
          editMode={editMode}
          muscles={muscles}
          onSelect={this.handleExerciseSelect}
          onDelete={this.handleExerciseDelete}
          onSelectEdit={this.handleExerciseSelectEdit}
          onEdit={this.handleExerciseEdit}
        />

        <Footer
          category={category}
          muscles={muscles}
          onSelect={this.handleSelect}
        />
      </Fragment>
    )
  }
}
