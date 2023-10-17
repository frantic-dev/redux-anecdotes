import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { notificationChange } from '../reducers/notificationReducer'

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const handleSubmit = e => {
    e.preventDefault()
    dispatch(createAnecdote(e.target.anecdote.value))
    dispatch(notificationChange(`you created '${e.target.anecdote.value}'`))
    e.target.anecdote.value = ''
  }

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={e => handleSubmit(e)}>
        <div>
          <input name='anecdote' />
        </div>
        <button>create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm
