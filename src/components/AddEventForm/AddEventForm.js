import React, { Component } from 'react'
import { Button, Form, Header } from 'semantic-ui-react'
import SemanticDatepicker from 'react-semantic-ui-datepickers';

import './AddEventForm.css'

const options = [
    { key: 'u', text: 'Uliczny', value: 'uliczny' },
    { key: 'p', text: 'Przełajowy', value: 'przelajowy' },
]

export default class AddEventForm extends Component {
    state = {}

    handleChange = (e, { value }) => this.setState({ value })

    render() {
        const { value } = this.state
        return(
            <div className='form__container'>
                <Header>Stwórz własne wydarzenie</Header>
                <hr></hr>
                <br></br>
                
                <Form>
                    <Form.Input required label='Nazwa' placeholder='Nazwa biegu' />
                    <Form.Input required label='Lokalizacja' placeholder='Lokalizacja' />
                    <Form.Field required>
                        <label>Data</label>
                        <SemanticDatepicker/>
                    </Form.Field>
                    
                    <Form.Select
                        fluid
                        required
                        label='Rodzaj biegu'
                        options={options}
                        placeholder='Rodzaj biegu'
                    /> 
                    <Form.Input required label='Liczba uczestników' placeholder='Liczba uczestników' />
                    <Form.Input label='Opłata' placeholder='Opłata' />
                    
                    <Form.Checkbox label='Zgadzam się z warunkami tworzenia własnych wydarzeń' />
                    <Button type='submit' color='grey'>Submit</Button>
                </Form>
            </div>         
        )
    }
}
    
 

