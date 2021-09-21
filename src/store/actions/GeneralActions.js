import * as actionTypes from "./../types";

export const setLoading = (value) => {
    return {
        type: actionTypes.LOADING,
        payload: value,
    };
};

export const setError = (value) => {
    return {
        type: actionTypes.ERROR,
        payload: value,
    };
};
