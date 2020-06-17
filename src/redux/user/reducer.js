import produce from 'immer'

const initState = {
  data: '',
  loading: false
}

export default function users(state = initState, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@users/query': {
        draft.loading = true
        break
      }
      case '@users/save': {
        draft.data = action.payload
        draft.loading = false
        break
      }
      default:
    }
  })
}
