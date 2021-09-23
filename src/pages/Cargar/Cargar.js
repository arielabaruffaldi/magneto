import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { addMutant, setError } from './../../store/actions';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import Text from '../../components/Text/Text';
import styles from './Cargar.module.scss';


const Cargar = () => {
    const dispatch = useDispatch();
    const state = useSelector((state) => state.mutant);

    const [data, setData] = useState({
        nombre: "",
        superpoder: "",
        nivel: ""
    })

    const resetData = () => {
        setData({
            nombre: "",
            superpoder: "",
            nivel: ""
        })
    }

    const validate = () => {
        if (data.nombre && data.superpoder && data.nivel) {
            return true
        }
        return false
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (!validate()) {
            dispatch(setError({
                error: true,
                errorMessage: `Los campos marcados con * son obligatorios`
            }))
            return
        }
        const mutantExists = state.myMutants.find(mutant => mutant.nombre === data.nombre)
        if (!mutantExists) {
            dispatch(addMutant(data))
            resetData()
        } else {
            dispatch(setError({
                error: true,
                errorMessage: `El mutante ${data.nombre} ya existe`
            }))
        }
    }
    return (
        <>
            <Text priority={1} size="large" weight={"semibold"}>
                Registrar nuevo mutante
            </Text>
            <form>
                <Input
                    name="nombre"
                    placeholder="Nombre"
                    label="Nombre del mutante*"
                    classes={styles.Input}
                    value={data.nombre}
                    handleChange={(e) => setData(prevState => ({ ...prevState, nombre: e }))}
                />
                <Input
                    name="superpoder"
                    placeholder="Ingresa el superpoder"
                    label="Superpoder*"
                    classes={styles.Input}
                    value={data.superpoder}
                    handleChange={(e) => setData(prevState => ({ ...prevState, superpoder: e }))}
                />
                <Text tag="label" weight={300} className={styles.Label}>Nivel*</Text>
                <div className={styles['radio--container']}>
                    <Input
                        type="radio"
                        name="nivel"
                        placeholder="Ingresa el superpoder"
                        label="Bajo"
                        handleChange={() => setData(prevState => ({ ...prevState, nivel: "1" }))}
                    />
                    <Input
                        type="radio"
                        name="nivel"
                        placeholder="Ingresa el superpoder"
                        label="Medio"
                        handleChange={() => setData(prevState => ({ ...prevState, nivel: "2" }))}
                    />
                    <Input
                        type="radio"
                        name="nivel"
                        placeholder="Ingresa el superpoder"
                        label="Alto"
                        handleChange={() => setData(prevState => ({ ...prevState, nivel: "3" }))}
                    />
                    <Input
                        type="radio"
                        name="nivel"
                        placeholder="Ingresa el superpoder"
                        label="Muy alto"
                        handleChange={() => setData(prevState => ({ ...prevState, nivel: "4" }))}
                    />
                </div>
                <Button type="submit" onClick={onSubmit}>Enviar</Button>
            </form>
        </>

    )
}

export default Cargar;