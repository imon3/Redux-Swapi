import { FETCH_PEOPLE_START, FETCH_PEOPLE_SUCCESS, FETCH_PEOPLE_FAIL } from "../actions";

const initialState = {
  characters: [],
  isFetching: false,
  error: ''
  // Array characters, Boolean fetching, null error.
};

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case FETCH_PEOPLE_START:
      return {
        ...state,
        isFetching: true
      }

    case FETCH_PEOPLE_SUCCESS:
      return {
        ...state,
        characters: action.payload,
        isFetching: false
      }

    case FETCH_PEOPLE_FAIL:
      return {
        ...state,
        error: action.payload
      }

    default:
      return state;
  }
};
