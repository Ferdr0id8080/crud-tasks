import React from 'react'

import styles from './Button.module.css'


const btnCustom = props => (
    <button className={styles.btnPrimary}>{props.children}</button>
)

export default btnCustom