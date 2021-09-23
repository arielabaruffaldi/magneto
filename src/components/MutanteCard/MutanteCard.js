import React from 'react';
import styles from './MutanteCard.module.scss';
import { HiStar, HiOutlineStar, HiOutlineTrash } from "react-icons/hi";
import { addToFavorite, removeFav, removeMutant } from './../../store/actions';
import { useDispatch, useSelector } from "react-redux";


const MutanteCard = ({ mutant }) => {

    const dispatch = useDispatch();
    const state = useSelector((state) => state.mutant);

    const isFav = state.favorites.find(item => item.nombre === mutant.nombre);

    return (
        <li className={styles['MutanteCard--container']}>
            <header className={styles['MutanteCard--header']}>
                <span className={styles['MutanteCard--level']}>{mutant.nivel}</span>
                <h2>{mutant.nombre}</h2>
            </header>
            <span className={styles['MutanteCard--superpoder']}>{mutant.superpoder}</span>
            <footer className={styles['MutanteCard--footer']}>
                {!isFav ?
                    <HiOutlineStar onClick={() => dispatch(addToFavorite(mutant))} size={30} color={'var(--yellow)'} />
                    :
                    <HiStar onClick={() => dispatch(removeFav(mutant))} size={30} color={'var(--yellow)'} />
                }
                <HiOutlineTrash onClick={() => dispatch(removeMutant(mutant))} size={30} color={'var(--green)'} />
            </footer>
        </li>
    )
}

export default MutanteCard