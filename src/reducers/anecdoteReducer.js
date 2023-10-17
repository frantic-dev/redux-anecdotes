import { createSlice } from '@reduxjs/toolkit'

const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
]

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = anecdote => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0,
  }
}

const initialState = anecdotesAtStart.map(asObject)

// const anecdoteReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'LIKE': {
//       const id = action.payload.id
//       const anecdoteToChange = state.find(anec => anec.id === id)
//       const changedAnecdote = {
//         ...anecdoteToChange,
//         votes: anecdoteToChange.votes + 1,
//       }
//       return state.map(anec => (anec.id === id ? changedAnecdote : anec))
//     }

//     case 'NEW-ANEC': {
//       return state.concat(action.payload)
//     }

//     default:
//       return state
//   }
// }

// export const likeAnecdote = id => {
//   return {
//     type: 'LIKE',
//     payload: { id },
//   }
// }

// export const createAnecdote = content => {
//   return {
//     type: 'NEW-ANEC',
//     payload: { content: content, id: getId(), votes: 0 },
//   }
// }

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState,
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
  },
})

export const { createAnecdote, likeAnecdote } = anecdoteSlice.actions
export default anecdoteSlice.reducer
