import React from 'react'

import styles from './Input.module.css'


const inputCustom = props => (
    <div className={styles.formInput}>
        <label className={styles.formLabel}>{props.label}</label>
        <input type={props.inputtype} className={styles.formControl} 
            value={props.value} onChange={props.changed} />
    </div>
)

export default inputCustom