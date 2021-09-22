import React from 'react';
import { useDispatch, useSelector } from "react-redux";

import Button from '../Button/Button';
import Text from '../Text/Text';

import styles from './Success.module.scss';

const Success = ({ }) => {
    const state = useSelector((state) => state.general);
    const dispatch = useDispatch();

    return (
        <section className={styles.Success}>
            <img alt="success" src={'./success.png'} />
            <Text align="center" priority={1} size="large" weight={"semibold"}>
                {state.successMessage}
            </Text>
            <Button onClick={() => dispatch(dispatch({
                type: 'SUCCESS',
                payload: false
            }))}>{state.successButton}</Button>
        </section>
    )
}

export default Success