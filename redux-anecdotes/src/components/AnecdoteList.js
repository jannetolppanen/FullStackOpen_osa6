import { useDispatch, useSelector} from 'react-redux'
import { voteForAnecdote } from '../reducers/anecdoteReducer'

const AnecdoteList = () => {
  const dispatch = useDispatch();
  // const anecdotes = useSelector(state => state.anecdotes.anecdotes)
  const anecdotes = useSelector(state => state.anecdotes)
  console.log('AnecdoteList.js // anecdotes: ',anecdotes)

  // const fuckit = anecdotes.anecdotes.sort()
  // console.log('fuckit', fuckit)


  
  
    // Äänestys tapahtuu useDispatchin kautta
    const vote = (id) => {
      dispatch(voteForAnecdote(id))
    }

 
  
  return (
    <>
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
      </>
  )
}

export default AnecdoteList