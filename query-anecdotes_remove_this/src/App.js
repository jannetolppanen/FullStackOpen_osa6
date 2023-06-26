import { useQuery } from 'react-query'
import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'
import AnecdoteList from './components/AnecdoteList'
import { getAnecdotes } from './requests'

const App = () => {
  const handleVote = (anecdote) => {
    console.log('vote')
  }

  const {
    status,
    data
  } = useQuery({ queryKey: ['anecdotes'], queryFn: getAnecdotes })

  return status === 'success' 
  ? ( <div>
    <h3>Anecdote app</h3>
    <Notification />
    <AnecdoteForm />
    <AnecdoteList anecdotes={data} handleVote={handleVote} />
  </div> ) 
  : (<h1>anecdote service not available due to problems in the server</h1>)  
}

export default App
