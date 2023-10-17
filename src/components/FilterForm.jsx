import { useDispatch } from 'react-redux'
import { filterChange } from '../reducers/filterReducer'

const FilterForm = () => {
  const dispatch = useDispatch()
  return (
    <form>
      <label htmlFor='filter'>filter </label>
      <input
        type='text'
        name='filter'
        id='filter'
        onChange={e => dispatch(filterChange(e.target.value))}
        autoComplete='off'
      />
    </form>
  )
}

export default FilterForm
