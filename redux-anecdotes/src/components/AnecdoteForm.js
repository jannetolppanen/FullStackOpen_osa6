import { createAnecdote } from '../reducers/anecdoteReducer'
import { createNotification, clearNotification } from '../reducers/notificationReducer'
import { useDispatch } from 'react-redux'
import anecdoteService from '../services/anecdotes'

const AnecdoteForm = () => {
  // Päästään käsiksi storeen 
  const dispatch = useDispatch()

  // Anekdootin lisäys
  const addAnecdote = async (event) => {
    event.preventDefault()
    
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    // const newAnecdote = await anecdoteService.createNew(content)
    dispatch(createAnecdote(content))  
    dispatch(createNotification(content))
    setTimeout(() => {
      dispatch(clearNotification())
    }, 5000)  
  }

  return (
    <>
    <h2>create new</h2>
    <form onSubmit={addAnecdote}>
      <div><input name='anecdote' /></div>
      <button type='submit'>create</button>
    </form>
    </>
  )
}

export default AnecdoteForm