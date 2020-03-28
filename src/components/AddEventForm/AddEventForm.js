import React, { Component } from 'react'
import { Button, Form, Header } from 'semantic-ui-react'
import DatePicker from 'react-datepicker';

import "react-datepicker/dist/react-datepicker.css";
import './AddEventForm.css'

const typeOfRun = [
    { key: 'u', text: 'Uliczny', value: 'street' },
    { key: 'p', text: 'Przełajowy', value: 'cross-country' },
]

const typeOfDistance = [
    { key: '5', text: '5 km', value: '5' },
    { key: '10', text: '10 km', value: '10' },
    { key: 'half-m', text: 'Półmaraton', value: 'half-marathon' },
    { key: 'm', text: 'Maraton', value: 'marathon' },
    { key: 'o', text: 'Inne', value: 'Other' },
]

export default class AddEventForm extends Component {

    state = {
        date: ''
    }

    handleClick = () => {

    }

    handleDate = (date) => {
        this.setState({ date: date })   
    }

    onFormSubmit = (e) => {
        e.preventDefault();
    }

    render() {
        return(
            <div className='form__container'>
                <Header>Stwórz własne wydarzenie</Header>
                <hr></hr>
                <br></br>     
                <Form onSubmit={ this.onFormSubmit }>
                    <Form.Input 
                        label='Nazwa' 
                        placeholder='Nazwa' 
                        required />
                    <Form.Input 
                        label='Lokalizacja' 
                        placeholder='Lokalizacja' 
                        required/>
                    <Form.Field required >
                        <label>Data i godzina</label>
                        <DatePicker
                            selected={ this.state.date }
                            onChange={ this.handleDate}
                            showTimeSelect
                            name='date'
                            timeIntervals={30}
                            timeCaption='time'
                            placeholderText='MM/DD/RRRR g:mm'
                            dateFormat='MMMM d, yyyy h:mm'/>
                    </Form.Field>
                    <Form.Select
                        fluid
                        label='Dystans'
                        options={typeOfDistance}
                        placeholder='Dystans'
                        required/> 
                    <Form.Select
                        fluid
                        label='Rodzaj biegu'
                        options={typeOfRun}
                        placeholder='Rodzaj biegu'
                        required/> 
                    <Form.Input 
                        label='Liczba uczestników' 
                        placeholder='Liczba uczestników'  
                        required/>
                    <Form.Input 
                        label='Opłata' 
                        placeholder='Opłata'/>
                    <Form.Input 
                        label='Zdjęcie wydarzenia' 
                        placeholder='Adres URL' />
                    <br></br>
                    <Button 
                        type='submit' 
                        color='grey'
                        // onClick={}
                        >
                        Dodaj wydarzenie
                    </Button>
                </Form>
            </div>         
        )
    }
}
    
 

