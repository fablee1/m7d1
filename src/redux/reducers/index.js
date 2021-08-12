import { initialState } from "../store"

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_FAVOURITES":
      return {
        ...state,
        favourites: [...state.favourites, action.payload],
      }

    case "REMOVE_FROM_FAVOURITES":
      let newFavourites = [...state.favourites].filter((name) => name !== action.payload)

      return {
        ...state,
        favourites: newFavourites,
      }

    default:
      return state
  }
}

export default mainReducer
