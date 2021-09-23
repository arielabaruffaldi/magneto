import * as actionTypes from "../types";
import { http } from "./../../utils/axios";
import { setLoading, setError, setSuccess, restartGeneralState } from './GeneralActions';

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
        dispatch(setLoading(false))
        dispatch({
            type: actionTypes.GET_MUTANTE,
            payload: true
        })
        dispatch(setSuccess({
            success: true,
            successMessage: "MUTANTE DETECTADO",
            successButton: "Volver a analizar"
        }))
    } catch (err) {
        dispatch(setLoading(false))
        dispatch(setError({
            error: true,
            errorMessage: "El mutante no existe, inténtelo nuevamente"
        }))
    }

}

export const addMutant = (mutant) => async (
    dispatch
) => {
    dispatch({
        type: actionTypes.ADD_MUTANT,
        payload: mutant
    })
    dispatch(setSuccess({
        success: true,
        successMessage: "MUTANTE CARGADO EXITOSAMENTE",
        successButton: "Cargar otro"
    }))
    dispatch(setError({
        error: false
    }))

}

export const removeMutant = (value) => async (
    dispatch
) => {
    dispatch({
        type: actionTypes.REMOVE_MUTANT,
        payload: value.nombre
    })
}

export const addToFavorite = (value) => async (
    dispatch
) => {
    dispatch({
        type: actionTypes.ADD_FAVORITE,
        payload: value
    })
}

export const removeFav = (value) => async (
    dispatch
) => {
    dispatch({
        type: actionTypes.REMOVE_FAVORITE,
        payload: value.nombre
    })
}
