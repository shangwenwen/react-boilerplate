import produce from 'immer'

const INITIAL_STATE = {
  data: ''
}

export default function users(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@users/query': {
        break
      }
      case '@users/save': {
        draft.data = action.payload
        break
      }
      default:
    }
  })
}
