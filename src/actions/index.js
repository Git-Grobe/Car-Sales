// Action Types
export const ADD_FEATURE = "ADD_FEATURE";
export const REMOVE_FEATURE = "REMOVE_FEATURE";
export const UPDATE_TOTAL = "UPDATE_TOTAL";

// Action Creators
export const addFeature = feature => {
  console.log("addFeature");
  return {
    type: ADD_FEATURE,
    payload: feature
  };
};

export const removeFeature = feature => {
  console.log("removeFeature");
  return {
    type: REMOVE_FEATURE,
    payload: feature
  };
};

export const updateTotal = total => {
  return {
    type: UPDATE_TOTAL,
    payload: total
  };
};
