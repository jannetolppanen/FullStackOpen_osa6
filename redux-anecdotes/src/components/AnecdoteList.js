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
    const vote = (anecdote) => {
      dispatch(voteForAnecdote(anecdote))
      dispatch(voteNotification(anecdote.content))
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
            <button onClick={() => vote(anecdote)}>vote</button>
          </div>
        </div>
      )}
      </>
  )
}

export default AnecdoteList