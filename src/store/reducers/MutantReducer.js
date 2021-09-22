import * as actionType from "../types";

export const INITIAL_STATE = {
    isMutante: false,
    myMutants: [],
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionType.GET_MUTANTE:
            return { ...state, isMutante: action.payload };
        case actionType.SET_MUTANT:
            return { ...state, myMutants: [...state.myMutants, action.payload] };
        default:
            return state;
    }
}