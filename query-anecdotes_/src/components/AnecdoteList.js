const AnecdoteList = ({ anecdotes, handleVote }) => {
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