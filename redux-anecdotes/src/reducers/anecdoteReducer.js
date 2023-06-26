import { createSlice } from '@reduxjs/toolkit'
import anecdoteService from '../services/anecdotes'

// Luo anekdoottiobjektin
const asObject = (anecdote) => {
  return {
    content: anecdote,
    votes: 0,
  }
}
const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    createAnecdote(state, action) {
      const content = action.payload
      state.push(asObject(content))
    },
    voteForAnecdote(state, action) {
      const id = action.payload
      const updatedAnecdotes = state.map((anecdote) =>
        anecdote.id === id
          ? { ...anecdote, votes: anecdote.votes + 1 }
          : anecdote
      )
      return updatedAnecdotes
    },
    appendAnecdote(state, action) {
      state.push(action.payload)
    },
    setAnecdotes(state, action) {
      return action.payload
    }
  },
})

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}

export const { createAnecdote, voteForAnecdote, appendAnecdote, setAnecdotes } = anecdoteSlice.actions
export default anecdoteSlice.reducer
