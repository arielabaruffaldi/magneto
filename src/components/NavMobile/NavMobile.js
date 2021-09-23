import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import styles from './NavMobile.module.scss';


const NavMobile = ({ menu }) => {
    console.log(menu)
    const [isOpen, setIsOpen] = useState(false);
    const [scrollingUp, setScrollingUp] = useState(false);
    const [scrollPosition, setSrollPosition] = useState(0);

    const handleScroll = () => {
        const position = window.pageYOffset;
        setSrollPosition(position)
        position < scrollPosition ? setScrollingUp(true) : setScrollingUp(false)
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    });

    return (
        <>
            <header className={`${styles['NavMobile']} ${isOpen ? styles["navOpen"] : ""} ${!scrollingUp && scrollPosition > 50 ? styles.hiddenNav : ""}`}>
                <div className={styles["NavWrapper"]}>
                    <div className={`${styles['NavMobile--Burger']} ${isOpen ? styles["open"] : ""}`} onClick={() => setIsOpen(!isOpen)}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>

                <nav className={`${styles['NavLinks']} ${isOpen ? styles["navOpen"] : ""}`}>
                    {isOpen &&
                        <ul className={`${styles['NavLinks--container']}`}>
                            {menu.map((link, index) => {
                                return (
                                    <>
                                        <li key={index} className={`${isOpen ? styles["navLinkOpen"] : ""}`}>
                                            <NavLink to={link.href} onClick={() => setIsOpen(!isOpen)}>{link.name}</NavLink>
                                        </li>
                                    </>
                                )
                            })}
                        </ul>}
                </nav>

            </header>

        </>
    )
}

export default NavMobile;