import { INCREMENT, DECREMENT } from "../actions";

const initialState = {
  count: 0
};

// Our reducer that handles our two action cases:
// increment and decrement. It receives the state
// of our redux store, along with an action created
// by our action creator. What does the reducer
// need to do with the count in each case?
export default (state = initialState, action) => {
  let count = state.count;
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: ++count
      };
    // Fill in the body of this case
    case DECREMENT:
      // Fill in the body of this case
      return {
        ...state,
        count: --count
      };
    default:
      return state;
  }
};
