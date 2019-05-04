import React from 'react'

import styles from './Toolbar.module.css'


const toolbar = props => {

    const st = [styles.NavItem]


    return (
        <div className={styles.Toolbar}>
            <ul className={styles.Nav}>
                <li className={st.join(' ')}><a href="#">Home</a></li>
                <li className={st.join(' ')}><a href="#">Nueva tarea</a></li>
            </ul>
        </div>
    )
}

export default toolbar