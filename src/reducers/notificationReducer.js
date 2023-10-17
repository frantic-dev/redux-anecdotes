import { createSlice } from '@reduxjs/toolkit'

const initialState = null

const notificationSlicer = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    notificationChange(state, action) {
      return action.payload
    },
    notificationHide() {
      return null
    }
  },
})

export const {notificationChange, notificationHide} = notificationSlicer.actions
export default notificationSlicer.reducer