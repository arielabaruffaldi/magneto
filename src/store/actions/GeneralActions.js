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

export const setSuccess = (value) => {
    console.log("entro")
    return {
        type: actionTypes.SUCCESS,
        payload: value,
    };
};

export const restartGeneralState = () => {
    return {
        type: actionTypes.RESTART,
        payload: false,
    };
}
