import * as actionTypes from "../types";
import { http } from "./../../utils/axios";
import { setLoading, setError } from './GeneralActions';

export const isMutant = (body) => async (
    dispatch
) => {
    dispatch(setError({
        error: false,
    }))
    dispatch(setLoading(true))
    const parsedData = body.replace(/ /g, "").split(',')
    
    try {
       await http.post(`/mutant/`, { dna: parsedData });
        dispatch({
            type: actionTypes.GET_MUTANTE,
            payload: true
        })
        dispatch(setLoading(false))
    } catch (err) {
        dispatch(setLoading(false))
        dispatch(setError({
            error: true,
            errorMessage: "Ocurrió un error, inténtelo nuevamente"
        }))
    }

}
