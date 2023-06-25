import { useDispatch, useSelector} from 'react-redux'
import { voteForAnecdote } from '../reducers/anecdoteReducer'
import { voteNotification, clearNotification } from '../reducers/notificationReducer'


const AnecdoteList = () => {
  // Päästään tallentamaan storeen 
  const dispatch = useDispatch()

  // Valitaan storesta anekdootit
  const anecdotes = useSelector(state => state.anecdotes)

  // Tallennetaan filtteri muuttujaan
  const anecdoteFilter = useSelector(state => state.filter)

// Äänestys tapahtuu useDispatchin kautta
    const vote = (id, content) => {
      dispatch(voteForAnecdote(id))
      dispatch(voteNotification(content))
      setTimeout(() => {
        dispatch(clearNotification())
      }, 5000)

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
            <button onClick={() => vote(anecdote.id, anecdote.content)}>vote</button>
          </div>
        </div>
      )}
      </>
  )
}

export default AnecdoteList