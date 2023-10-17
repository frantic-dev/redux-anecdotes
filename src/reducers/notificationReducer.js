import { createSlice } from '@reduxjs/toolkit'

const initialState = 'displaying all anecdotes'

const notificationSlicer = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    notificationChange(state, action) {
      return action.payload
    },
  },
})

export const {notificationChange} = notificationSlicer.actions
export default notificationSlicer.reducer