import React, {useState} from 'react';
import styles from './Navbar.module.scss'

import wrenchIcon from '../../assets/header/wrench.svg'
import user from '../../assets/header/user.svg'

const Navbar = () => {
    const [open, setOpen] = useState<boolean>(false)
    const handleShowMenu = () => {
        setOpen(!open)
        let item = document.getElementById("menu")
        if (open) {
            item!.classList.replace("menuContainerActive", "menuContainer")
        } else {
            item!.classList.replace("menuContainer", "menuContainerActive")
        }
    }

    return (
        <header className={styles.navbarCont}>
            <div className={styles.menuBTN} onClick={handleShowMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className={styles.leftPartHeader}>
                <img src={wrenchIcon} alt={"wrench icon"}/>
                <span className={styles.companyName}>Wrench CRM</span>
            </div>
            <div className={styles.rightPartHeader}>
                <div className={styles.circle}>
                    <img src={user} alt={"user icon"}/>
                </div>
                <span className={styles.userInfo}>Имя Фамилия</span>
            </div>
        </header>
    );
};

export default Navbar;
