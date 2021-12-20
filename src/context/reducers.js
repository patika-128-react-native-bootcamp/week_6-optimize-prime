export default (state, action) => {
  switch (action.type) {
    case 'CHANGE_APP_THEME':
      console.log(state.theme);
      return {...state, theme: action.payload.theme};

    default:
      return state;
  }
};
