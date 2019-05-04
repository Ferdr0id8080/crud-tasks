import React, { Component } from 'react'

import styles from './NewTask.module.css'

class NewTask extends Component {
    state = {}

    render() {
        return (
            <div className={styles.NewTask}>
                <form>
                    <fieldset>
                        <legend>Nueva Tarea</legend>
                        <input type="text" placeholder='Titulo' /><br />
                        <input type="text" placeholder='Descripcion' /><br />
                        <button>Añadir</button>
                    </fieldset>
                </form>
            </div>
        )
    }
}

export default NewTask