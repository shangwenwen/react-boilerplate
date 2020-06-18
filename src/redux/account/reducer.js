import produce from 'immer'

const initState = {}

export default function users(state = initState, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@users/query': {
        draft.loading = true
        break
      }
      default:
    }
  })
}
