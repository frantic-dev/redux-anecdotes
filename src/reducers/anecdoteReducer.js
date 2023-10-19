import { createSlice } from '@reduxjs/toolkit'

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
export default anecdoteSlice.reducer
