import React from 'react'
import { Link } from 'react-router-dom'

import styles from './Toolbar.module.css'


const toolbar = props => {

    const homeItemStyles = [styles.NavItem]
    const newItemStyles = [styles.NavItem]

    if (props.activeItem === 'home')
        homeItemStyles.push(styles.active)

    if (props.activeItem === 'new')
        newItemStyles.push(styles.active)


    return (
        <div className={styles.Toolbar}>
            <ul className={styles.Nav}>
                <li className={homeItemStyles.join(' ')} onClick={() => props.changedPage('home')}><Link to='/'>Tareas</Link></li>
                <li className={newItemStyles.join(' ')} onClick={() => props.changedPage('new')}><Link to="/new">Nueva tarea</Link></li>
            </ul>
        </div>
    )
}

export default toolbar