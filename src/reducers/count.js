import { INCREMENT, DECREMENT} from '../actions'

const initialState = {value: 0}

export defalt (state = initialState, action) => {
  switch (action.type){
    case INCREMENT:
      return { state.value + 1 }
    case DECREMENT:
      return { state.value - 1}
    default:
      return state
  }
}
