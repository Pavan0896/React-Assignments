
import { ADD, SUBMIT } from './actionTypes'

const addActions = (payload) => {
  return {type:ADD, payload:payload}
}

const submitActions = () => {
    return {type:SUBMIT}
  }

export {addActions,submitActions} 
