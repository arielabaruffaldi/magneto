import React, { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";

import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import Text from '../../components/Text/Text';

import { isMutant, setError } from './../../store/actions';

const Detector = () => {
    const [value, setValue] = useState('')
    const dispatch = useDispatch();

    const submit = (e) => {
        e.preventDefault();
        dispatch(isMutant(value))
    }

    useEffect(() => {
        return () => {
            dispatch(setError({
                error: false,
            }))
        }
    }, [])

    return (
        <form>
            <Text priority={1} size="large" weight={"semibold"}>
                Ingresá la secuencia de ADN
            </Text>
            <Input
                placeholder='ATGCGA, AGGCTA, CCCAGT, TCACTG, TCACTG, TATAGA'
                size='large'
                handleChange={setValue}
            />
            <Button onClick={submit}>Analizar</Button>
        </form>
    )
}

export default Detector;