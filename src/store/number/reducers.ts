import { NumberActionTypes, INCREMENT, DECREMENT } from './types'

const initialState = 0

const numberReducer = (state = initialState, action: NumberActionTypes) : number => {
  switch(action.type) {
    case INCREMENT:
      return state + action.payload
    case DECREMENT:
      return state - action.payload
    default:
      return state
  }
}

export default numberReducer