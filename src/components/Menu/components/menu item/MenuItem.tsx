import React, {FC} from 'react';
import styles from './MenuItem.module.scss'
import {NavLink, useLocation} from "react-router-dom";

interface MenuItemProps {
    icon: string
    secondIcon?: string
    title: string
    link?: string
    parent?: boolean
    child?: boolean
    open?: boolean
    setOpen?: (arg0: boolean) => void
}

const MenuItem: FC<MenuItemProps> = ({
        icon,
        secondIcon,
        title,
        link,
        child,
        parent,
        open,
        setOpen
    }) => {
    const location = useLocation()
    let pathName = location.pathname

    return !parent ? (
        <NavLink to={link!} className={styles.menuItem} style={child ? {marginLeft: "46px"} : {}}>
            <img src={icon} className={styles.icon} alt={"icon"}/>
            <span>{title}</span>
            {pathName === link && <span className={styles.currentPage} style={!child ? {right: "-2rem"} : {}}></span>}
        </NavLink>
    ) : (
        <button onClick={() => setOpen!(!open)} className={styles.menuItem}>
            <img src={icon} className={styles.icon} alt={"icon"}/>
            <span>{title}</span>
            <div className={styles.arrow}>
                <img src={secondIcon} alt={"arrow"} style={open ? {} : {transform: "rotate(180deg)"}}/>
            </div>
        </button>
    )
};

export default MenuItem;
