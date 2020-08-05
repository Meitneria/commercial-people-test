import * as ActionType from 'actions/library'

const initialState = {
  catalog: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_LIBRARY_ITEMS:
      return {
        ...state,
        catalog: action.payload.catalog,
      }
    default:
      return state
  }
}
