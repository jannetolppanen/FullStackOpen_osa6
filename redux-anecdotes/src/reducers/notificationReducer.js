import { createSlice } from "@reduxjs/toolkit"
import { useSelector } from "react-redux"


const notificationSlice = createSlice({
  name: 'notification',
  initialState: '',
  reducers: {
    voteNotification(state, action) {
      const content = action.payload
      return `You voted '${content}'`
    },
    createNotification(state, action) {
      const content = action.payload
      return `You created '${content}'`
    },
    clearNotification(state, action) {
      return ''
    }
  }
})

export const { voteNotification, clearNotification, createNotification } = notificationSlice.actions
export default notificationSlice.reducer