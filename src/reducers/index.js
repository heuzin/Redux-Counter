import { INCREMENT, DECREMENT } from '../actions';

const initialState = {
  count: 0
}

// Our reducer that handles our two action cases:
// increment and decrement. It receives the state
// of our redux store, along with an action created
// by our action creator. What does the reducer
// need to do with the count in each case?
export default (state = initialState, action) => {
  switch (action.type) {
    // Fill in the body of this case
    case INCREMENT: {
      let newCount = state.count + 1
      return {
        ...state,
        count: newCount
      }
    }
    // Fill in the body of this case
    case DECREMENT:{
      let newCount = state.count - 1
      return {
        ...state,
        count: newCount
      }
    }
    default:
      return state;
  }
};
