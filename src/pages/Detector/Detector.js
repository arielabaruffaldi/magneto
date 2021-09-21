import React, { useState } from 'react';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import Text from '../../components/Text/Text';
import { isMutant } from './../../store/actions';
import { useDispatch, useSelector } from "react-redux";

const Detector = () => {
    const [value, setValue] = useState('')
    const dispatch = useDispatch();
    const state = useSelector((state) => state.mutant);

    const submit = (e) => {
        e.preventDefault();
        dispatch(isMutant(value))
    }
    console.log(state)
    return (
        <>
            {!state.isMutante ?
                <form>
                    <Text priority={1} size="large" weight={"semibold"}>
                        Ingresá la secuencia de ADN
                    </Text>
                    <Input
                        placeholder={'ATGCGA, AGGCTA, CCCAGT, TCACTG, TCACTG, TATAGA'}
                        size='large'
                        handleChange={setValue}
                    />
                    <Button onClick={submit}>Analizar</Button>
                </form>
                :
                <>
                    <Text priority={1} size="large" weight={"semibold"}>
                        MUTANTE DETECTADO
                    </Text>
                    <Button onClick={() => dispatch(dispatch({
                        type: 'GET_MUTANTE',
                        payload: false
                    }))}>Volver a analizar</Button>
                </>

            }
        </>
    )
}

export default Detector;