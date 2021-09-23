import React from 'react';
import Text from '../../components/Text/Text';

import styles from './Mutantes.module.scss';
import { useSelector } from "react-redux";
import MutanteCard from '../../components/MutanteCard/MutanteCard';


const Mutantes = () => {
    const state = useSelector((state) => state.mutant);
    return (
        <>
            <Text priority={1} size="large" weight={"semibold"}>
                Listado de mutantes
            </Text>
            <ul className={styles['Mutants-container']}>
                {state.myMutants.map(mutant => <MutanteCard mutant={mutant} />)}
            </ul>

        </>
    )
}

export default Mutantes;