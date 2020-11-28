import { ApplicationsActionTypes } from './applications.types';

const initialState = {
  applications: [],
  currentApplicationId: -1,
  showWindow: false,
};

const ApplicationsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ApplicationsActionTypes.RESET_APPLICATIONS_STATE:
      return initialState;
    case ApplicationsActionTypes.SET_APPLICATIONS:
      return {
        ...state,
        applications: payload,
      };
    case ApplicationsActionTypes.SET_CURRENT_APPLICATION_ID:
      return {
        ...state,
        currentApplicationId: payload,
      };
    case ApplicationsActionTypes.SET_SHOW_WINDOW:
      return {
        ...state,
        showWindow: payload,
      };
    default:
      return state;
  }
};

export default ApplicationsReducer;
