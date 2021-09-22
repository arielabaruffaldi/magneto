import * as actionType from "../types";

export const INITIAL_STATE = {
    loading: false,
    error: false,
    errorMessage: "",
    success: false,
    successMessage: "",
    successButton: "",
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionType.LOADING:
            return {
                ...state,
                loading: action.payload,
            };
        case actionType.ERROR:
            return {
                ...state,
                error: action.payload.error,
                errorMessage: action.payload.errorMessage,
            };
        case actionType.SUCCESS:
            return {
                ...state,
                success: action.payload,
                successMessage: action.payload.successMessage,
                successButton: action.payload.successButton,
            };
        case actionType.RESTART:
            return {
                ...state,
                success: false,
                error: false
            };
        default:
            return state;
    }
}
