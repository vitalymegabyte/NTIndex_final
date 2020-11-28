import { createSelector } from 'reselect';

const selectApplicationsArr = (state) => state.applications;

export const selectApplications = createSelector(
  [selectApplicationsArr],
  (applications) => applications.applications
);

export const selectCurrentApplication = createSelector(
  [selectApplicationsArr],
  (applications) => {
    for (let i = 0; i < applications.applications.length; i++) {
      if (applications.applications[i].id == applications.currentApplicationId)
        return applications.applications[i];
    }
    return undefined;
  }
);

export const selectShowWindow = createSelector(
  [selectApplicationsArr],
  (applications) => applications.showWindow
);
