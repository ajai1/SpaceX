const initialState = {
  fetchedData: {},
};

export function LaunchReducer(state = initialState, action) {
  switch (action.type) {
    case "Launches": {
      let copyState = { ...state, fetchedData: action.payload };
      return copyState;
    }
    default: {
      return state;
    }
  }
}
