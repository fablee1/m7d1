export const addToFavouritesAction = (companyName) => ({
  type: "ADD_TO_FAVOURITES",
  payload: companyName,
})

export const removeFromFavouritesAction = (companyName) => ({
  type: "REMOVE_FROM_FAVOURITES",
  payload: companyName,
})
