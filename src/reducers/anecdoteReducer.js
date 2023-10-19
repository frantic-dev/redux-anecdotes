import { createSlice } from '@reduxjs/toolkit'
import anecdoteService from '../services/anecdotes'


const getId = () => (100000 * Math.random()).toFixed(0)

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    createAnecdote(state, action) {
      return state.concat({ content: action.payload, id: getId(), votes: 0 })
    },
    likeAnecdote(state, action) {
      const id = action.payload
      const anecdoteToChange = state.find(anec => anec.id === id)
      const changedAnecdote = {
        ...anecdoteToChange,
        votes: anecdoteToChange.votes + 1,
      }
      return state.map(anec => (anec.id === id ? changedAnecdote : anec))
    },
    setAnecdotes(state, action) {
      return action.payload
    },
  },
})

export const { createAnecdote, likeAnecdote, setAnecdotes } =
  anecdoteSlice.actions

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}
export default anecdoteSlice.reducer
