import React from "react";
import styles from './Navbar.module.css';
import { BiHomeAlt, BiUser, BiBook, BiChat } from 'react-icons/bi'

function Navbar(){
    return(
    <nav className={styles.navbar}>
        <h2>Felipe Gonçalves</h2>
        <ul className={styles.list}>
            <li className={styles.item}><a href="#"><BiHomeAlt /></a></li>
            <li className={styles.item}><a href="#"><BiUser /></a></li>
            <li className={styles.item}><a href="#"><BiBook /></a></li>
            <li className={styles.item}><a href="#"><BiChat /></a></li>
        </ul>
    </nav>
    )
}

export default Navbar;