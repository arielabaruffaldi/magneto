import * as actionType from "../types";

export const INITIAL_STATE = {
    isMutante: false,
    myMutants: [],
    favorites: [],
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionType.GET_MUTANTE:
            return { ...state, isMutante: action.payload };
        case actionType.ADD_MUTANT:
            return { ...state, myMutants: [...state.myMutants, action.payload] };
        case actionType.REMOVE_MUTANT:
            return { ...state, myMutants: [...state.myMutants.filter(item => item.nombre !== action.payload)] };
        case actionType.ADD_FAVORITE:
            return { ...state, favorites: [...state.favorites, action.payload] };
        case actionType.REMOVE_FAVORITE:
            return { ...state, favorites: [...state.favorites.filter(item => item.nombre !== action.payload)] };
        default:
            return state;
    }
}