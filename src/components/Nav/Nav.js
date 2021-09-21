import React from 'react';
import { NavLink } from "react-router-dom";
import styles from './Nav.module.scss';

const Nav = ({ menu }) => {
    return (
        <header className={styles['Header']}>
            <nav>
                <ul>
                    {menu.map((item, index) =>
                        <li>
                            <NavLink key={index} exact to={item.href} activeClassName={styles.active}>
                                {item.name}</NavLink>
                        </li>
                    )}
                </ul>
            </nav>
        </header>
    )
}

export default Nav;