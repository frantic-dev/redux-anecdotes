import { useDispatch, useSelector } from 'react-redux'
import { notificationHide } from '../reducers/notificationReducer'

const Notification = () => {
  const notification = useSelector(state => state.notification)
  const dispatch = useDispatch()
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
  }
  
  if (notification) {
    setTimeout(() => {
      dispatch(notificationHide())
    }, 5000)
  } else style.display = 'none'

  return <div style={style}>{notification}</div>
}

export default Notification
