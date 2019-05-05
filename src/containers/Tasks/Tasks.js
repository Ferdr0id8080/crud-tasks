import React, { Component } from 'react';

import axios from '../../helpers/axios'

import styles from './Tasks.module.css'


class Tasks extends Component {
    state = {
        tasks: [],
        loading: true
    }

    componentDidMount() {
        axios.get('/tasks')
             .then(res => {
                 if (res.data.success) {
                     this.setState({
                        tasks: res.data.data,
                        loading: false
                    })
                 }
             })
             .catch(err => {
                 console.log(err)
             })
    }

    render() {
        return (
            <div className={styles.Tasks}>
                <h2 style={{margin: '8px 0px'}}>Listado de Tareas</h2>
                {this.state.loading
                    ?
                        <p>Cargando...</p>
                    : 
                        this.state.tasks.length > 0 
                            ?
                                (
                                    <table className={styles.tableTasks}>
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Titulo</th>
                                                <th>Descripcion</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.state.tasks.map((i, idx) => (
                                                <tr key={i._id}>
                                                    <td>{idx + 1}</td>
                                                    <td>{i.title}</td>
                                                    <td>{i.description}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                )
                            : 
                                <p>No hay ninguna tarea registrada</p>
                }
            </div>
        )
    }
}

export default Tasks;