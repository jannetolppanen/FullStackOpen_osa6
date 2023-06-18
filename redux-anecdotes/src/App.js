import { useSelector, useDispatch } from 'react-redux'
import { voteForAnecdote } from './reducers/anecdoteReducer'
import AnecdoteForm from './components/AnecdoteForm'

const App = () => {
  const anecdotes = useSelector(state => state)
  const dispatch = useDispatch()

  // Äänestys tapahtuu useDispatchin kautta
  const vote = (id) => {
    dispatch(voteForAnecdote(id))
  }
  // // Anekdootin lisäys
  // const addAnecdote = (event) => {
  //   event.preventDefault()
  //   const content = event.target.anecdote.value
  //   event.target.anecdote.value = ''
  //   dispatch(createAnecdote(content))
  // }

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes
      .sort((a, b) => b.votes - a.votes)
      .map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
      {/* <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div><input name='anecdote' /></div>
        <button type='submit'>create</button>
      </form> */}
      <AnecdoteForm dispatch={dispatch} />
    </div>
  )
}

export default App