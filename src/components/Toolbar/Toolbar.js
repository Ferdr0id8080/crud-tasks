import React from 'react'
import { Link } from 'react-router-dom'

import styles from './Toolbar.module.css'


const toolbar = props => {

    const st = [styles.NavItem]


    return (
        <div className={styles.Toolbar}>
            <ul className={styles.Nav}>
                <li className={st.join(' ')}><Link to='/'>Tareas</Link></li>
                <li className={st.join(' ')}><Link to="/new">Nueva tarea</Link></li>
            </ul>
        </div>
    )
}

export default toolbar