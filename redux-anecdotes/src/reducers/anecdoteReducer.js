const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

// Generoi satunnaisen id:n anekdootille
const getId = () => (100000 * Math.random()).toFixed(0)

// Luo anekdoottiobjektin
const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

// action creater funktio
export const voteForAnecdote = (id) => {
  return {
    type: 'VOTE',
    payload: { id }
  }
}

// action creater funktio
export const createAnecdote = (content) => {
  return {
    type: 'NEW_ANECDOTE',
    payload: {
      content,
      id: getId(),
      votes: 0
    }
  }
}

// Luo alkutilanteen statelle
const initialState = {
  anecdotes: anecdotesAtStart.map(asObject),
  filter: ''
}

console.log('initialState', initialState)

// Logiikka mitä eri actionit tekee
const reducer = (state = initialState, action) => {
  console.log('state now: ', state)
  console.log('action', action)

  switch(action.type) {
    case 'NEW_ANECDOTE':
      return {
        ...state, anecdotes: [...state.anecdotes, action.payload]
      }
    case 'VOTE':
      const id = action.payload.id
      const updatedAnecdotes = state.anecdotes.map(anecdote =>
       anecdote.id === id
       ? {...anecdote, votes: anecdote.votes + 1}
       : anecdote
        )
        return {
          ...state, anecdotes: updatedAnecdotes
        }
    default:
      return state
    }
  } 

export default reducer