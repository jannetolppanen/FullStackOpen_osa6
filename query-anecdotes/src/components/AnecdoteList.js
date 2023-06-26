import { useMutation, useQueryClient } from "react-query"
import { voteAnecdote } from "../requests"

const AnecdoteList = ({ anecdotes }) => {
  const queryClient = useQueryClient()

  const updateAnecdoteMutation = useMutation(voteAnecdote, {
    onSuccess: () => {
      queryClient.invalidateQueries('anecdotes')
    },
  })

  const handleVote = (anecdote) => {
    updateAnecdoteMutation.mutate({...anecdote, votes: anecdote.votes +1})
  }

  return (
    <>
      <ul>
        {anecdotes.map((anecdote) => (
          <div key={anecdote.id}>
            <div>{anecdote.content}</div>
            <div>
              has {anecdote.votes}
              <button onClick={() => handleVote(anecdote)}>vote</button>
            </div>
          </div>
        ))}
      </ul>
    </>
  )
}

export default AnecdoteList