import React, { Component } from 'react';

import styles from './Tasks.module.css'


class Tasks extends Component {
    state = {}

    render() {
        return (
            <div className={styles.Tasks}>
                <h2>Listado de Tareas</h2>
                <ul>
                    <li>Tarea 1</li>
                    <li>Tarea 2</li>
                    <li>Tarea 3</li>
                </ul>
            </div>
        )
    }
}

export default Tasks;