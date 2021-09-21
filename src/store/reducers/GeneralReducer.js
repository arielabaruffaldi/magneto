import * as actionType from "../types";

export const INITIAL_STATE = {
    loading: false,
    error: false,
    errorMessage: "",
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
        default:
            return state;
    }
}
