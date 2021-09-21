import * as actionType from "../types";

export const INITIAL_STATE = {
    isMutante: false,
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionType.GET_MUTANTE:
            return { ...state, isMutante: action.payload };
        default:
            return state;
    }
}