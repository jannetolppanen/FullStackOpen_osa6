import { createSlice } from "@reduxjs/toolkit"

const notificationSlice = createSlice({
  name: 'notification',
  initialState: 'Initial notification message',
  reducers: {
    notificationChange(state, action) {
      const notification = action.payload
      return notification
    }
  }
})

export const { notificationChange } = notificationSlice.actions
export default notificationSlice.reducer