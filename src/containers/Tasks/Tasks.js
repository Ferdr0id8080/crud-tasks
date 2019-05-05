import React, { Component } from 'react';

import axios from '../../helpers/axios'

import styles from './Tasks.module.css'


class Tasks extends Component {
    state = {
        tasks: []
    }

    componentDidMount() {
        axios.get('/tasks')
             .then(res => {
                 if (res.data.success) {
                     this.setState({tasks: res.data.data})
                 }
             })
             .catch(err => {
                 console.log(err)
             })
    }

    render() {
        return (
            <div className={styles.Tasks}>
                <h2>Listado de Tareas</h2>
                <ul>
                    {this.state.tasks.length > 0 && this.state.tasks.map(i => (
                        <li key={i._id}>
                            {i.title} => {i.description}
                        </li>
                    ))
                    }
                </ul>
            </div>
        )
    }
}

export default Tasks;