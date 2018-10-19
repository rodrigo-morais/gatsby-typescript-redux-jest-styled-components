import React from 'react'
import { connect } from 'react-redux'

export const CounterPage = ({increment, decrement}: {increment: () => void, decrement: () => void}) => (
  <div>
    <h1>Here you can count up or down</h1>
    <button onClick={increment}>Up</button>
    <br/>
    <br/>
    <button onClick={decrement}>Down</button>
  </div>
)

const mapDispatchToProps = (dispatch: (action: any) => void) => {
  return {
    decrement: () => dispatch({ type: 'DECREMENT' }),
    increment: () => dispatch({ type: 'INCREMENT' })
  }
}

export default connect(null, mapDispatchToProps)(CounterPage)
