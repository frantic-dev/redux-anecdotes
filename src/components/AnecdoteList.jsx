import { useDispatch, useSelector } from 'react-redux'
import { likeAnecdote } from '../reducers/anecdoteReducer'
import { notificationChange } from '../reducers/notificationReducer'

const AnecdoteList = () => {
  const anecdotes = useSelector(({ filter, anecdotes }) => {
    if (filter)
      return anecdotes.filter(anec => anec.content.toLowerCase().match(filter))
    return anecdotes
  })

  const sortedAnecdotes = [...anecdotes].sort((a, b) => b.votes - a.votes)

  const dispatch = useDispatch()

  const vote = anecdote => {
    dispatch(likeAnecdote(anecdote.id))
    dispatch(notificationChange(`you voted on '${anecdote.content}'`))
  }

  return (
    <div>
      {sortedAnecdotes.map(anecdote => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote)}>vote</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default AnecdoteList
