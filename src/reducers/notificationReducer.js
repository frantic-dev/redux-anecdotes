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
    },
  },
})

export const { notificationChange, notificationHide } =
  notificationSlicer.actions

export const setNotification = (message, time) => {
  return async dispatch => {
    dispatch(notificationChange(message))
    await new Promise(resolve => setTimeout(resolve, time * 1000))
    dispatch(notificationHide())
  }
}

export default notificationSlicer.reducer
