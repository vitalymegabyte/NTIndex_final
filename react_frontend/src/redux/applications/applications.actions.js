import { ApplicationsActionTypes } from './applications.types';

export const resetApplicationsState = () => ({
  type: ApplicationsActionTypes.RESET_APPLICATIONS_STATE,
});

export const setApplications = (applications) => ({
  type: ApplicationsActionTypes.SET_APPLICATIONS,
  payload: applications,
});

export const setShowWindow = (showWindow) => ({
  type: ApplicationsActionTypes.SET_SHOW_WINDOW,
  payload: showWindow,
});

export const setCurrentApplicationId = (applicationId) => ({
  type: ApplicationsActionTypes.SET_CURRENT_APPLICATION_ID,
  payload: applicationId,
});
