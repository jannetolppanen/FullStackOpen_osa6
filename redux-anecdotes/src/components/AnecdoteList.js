import { useDispatch, useSelector} from 'react-redux'
import { voteForAnecdote } from '../reducers/anecdoteReducer'

const AnecdoteList = () => {
  const dispatch = useDispatch()
  // Valitaan storesta anekdootit
  const anecdotes = useSelector(state => state.anecdotes)

  // Tallennetaan filtteri muuttujaan
  const anecdoteFilter = useSelector(state => state.filter)

// Äänestys tapahtuu useDispatchin kautta
    const vote = (id) => {
      dispatch(voteForAnecdote(id))
    } 
  
  return (
    <>
    {anecdotes
      .filter(anecdote => anecdote.content.toLowerCase().includes(anecdoteFilter.toLowerCase()))
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
      </>
  )
}

export default AnecdoteList