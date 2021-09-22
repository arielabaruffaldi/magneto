import React from 'react';

const MutanteCard = ({ nivel, nombre, superpoder }) => {
    return (
        <li>
            <header>
                <span>{nivel}</span>
                <h2>{nombre}</h2>
            </header>
            <span>{superpoder}</span>
        </li>
    )
}

export default MutanteCard