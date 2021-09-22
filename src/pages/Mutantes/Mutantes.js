import React, { useState } from 'react';
import Text from '../../components/Text/Text';

import styles from './Mutantes.module.scss';
import { setMutant, setError } from '../../store/actions';
import { useDispatch, useSelector } from "react-redux";


const Mutantes = () => {
    const dispatch = useDispatch();
    const state = useSelector((state) => state.mutant);

    console.log(state.myMutants)
    return (
        <>
            <Text priority={1} size="large" weight={"semibold"}>
                Listado de mutantes
            </Text>

        </>
    )
}

export default Mutantes;