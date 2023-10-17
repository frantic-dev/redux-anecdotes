import { useDispatch, useSelector } from 'react-redux'
import { likeAnecdote } from '../reducers/anecdoteReducer'

const AnecdoteList = () => {
  const anecdotes = useSelector(({filter, anecdotes}) => {
    if (filter)
      return anecdotes.filter(anec => anec.content.toLowerCase().match(filter))
    return anecdotes
  }).sort((a, b) => b.votes - a.votes)

  const dispatch = useDispatch()

  const vote = id => {
    dispatch(likeAnecdote(id))
  }

  return (
    <div>
      {anecdotes.map(anecdote => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default AnecdoteList
