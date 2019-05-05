import React, { Component } from 'react'

import styles from './NewTask.module.css'

import axios from '../../helpers/axios'

import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'


class NewTask extends Component {
    state = {
        form: {
            title: '',
            description: ''
        }
    }

    inputChangedHandler = (e, input) => {
        const value = e.target.value
        const newFormValues = {
            ...this.state.form,
            [input]: value
        }
        this.setState({form: newFormValues})
    }

    formSubmittedHandler = ev => {
        ev.preventDefault()

        const data = {
            title: this.state.form.title.trim(),
            description: this.state.form.description.trim()
        }

        if (data.title.length === 0) {
            alert('El campo de [title] es requerido')
            return
        }

        if (data.description.length === 0) {
            alert('El campo de [description] es requerido')
            return 
        }
        
        axios.post('/tasks/create', data)
             .then(res => {
                 if (res.data.success) {
                     const clearedForm = {
                         ...this.state.form,
                         title: '',
                         description: ''
                     }
                     this.setState({form: clearedForm})
                     alert('Tarea agregada exitosamente')
                 }
             })
             .catch(err => {
                 console.log(err)
             })

    }


    render() {
        return (
            <div className={styles.NewTask}>
                <form className={styles.formTask} onSubmit={this.formSubmittedHandler}>
                    <fieldset className={styles.fieldSetTask}>
                        <legend>Creando una nueva tarea</legend>
                        <Input label='Titulo' inputtype='text' 
                            value={this.state.form.title} changed={e => this.inputChangedHandler(e, 'title')} />
                        <Input label='Descripcion' inputtype='text' 
                            value={this.state.form.description} changed={e => this.inputChangedHandler(e, 'description')} />
                        <Button>Añadir</Button>
                    </fieldset>
                </form>
            </div>
        )
    }
}

export default NewTask