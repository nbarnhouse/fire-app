const locations = (state = { loading: true }, action) => {
  switch (action.type) {
    case "CLEAR_LOCATIONS":
      return { loading: true };
    case "SET_LOCATIONS":
      return { locationList: [...action.payload], loading: false };
    default:
      return state;
  }
};

export default locations;
