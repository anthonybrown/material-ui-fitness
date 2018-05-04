import React, { Component, Fragment } from 'react';
import { Header, Footer } from './Layouts';
import Exercises from './Exercises'
import { muscles, exercises } from '../store'

export default class extends Component {
  state = {
    exercises,
    category: '',
  }

  getExercisesByMuscles() {
    return Object.entries(
      this.state.exercises.reduce((exercises, exercise) => {
        const { muscles } = exercise

        exercises[muscles] = exercises[muscles]
          ? [...exercises[muscles], exercise]
          : [exercise]

        return exercises
      }, {})
    )
  }

  handleSelected = category => {
    this.setState({
      category
    })
  }

  render() {
    const exercises = this.getExercisesByMuscles(),
      { category } = this.state
    return (
      <Fragment>
        <Header />

        <Exercises
          category={category}
          exercises={exercises}
        />

        <Footer
          category={category}
          muscles={muscles}
          onSelect={this.handleSelected}
        />
      </Fragment>
    )
  }
}
