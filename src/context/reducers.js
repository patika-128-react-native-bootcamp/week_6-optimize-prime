export default (state, action) => {
  switch (action.type) {
    case 'CHANGE_APP_THEME': {
      console.log(action.payload.theme);
      return { ...state, theme: action.payload.theme };
    }

    case 'ADD_TO_FAVORITES': {
      const selectedComic = action.payload.comic;
      const comicFavoriteIndex = state.favoritesList.findIndex(
        f => f.id === selectedComic.id,
      );
      const inInFavorites = comicFavoriteIndex !== -1;
      if (inInFavorites) {
        return state;
      }
      const updatedFavorites = [...state.favoritesList, selectedComic];

      return { ...state, favoritesList: updatedFavorites };
    }
    case 'REMOVE_FROM_FAVORITES': {
      const selectedComic = action.payload.comic;
      const comicFavoritesIndex = state.favoritesList.findIndex(
        f => f.id === selectedComic.id,
      );
      const updatedFavoritesList = [...state.favoritesList];
      updatedFavoritesList.splice(comicFavoritesIndex, 1);

      return { ...state, favoritesList: updatedFavoritesList };
    }

    default:
      return state;
  }
};
