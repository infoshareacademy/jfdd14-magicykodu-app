import React, { Component } from 'react'
import { Button, Form, Header, Modal, Input } from 'semantic-ui-react'
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
        name: '',
        place: '',
        date: '',
        distance: '',
        run: '',
        numOfrunners: '',
        charge: '',
        img: ''
    }

    handleClick = (props) => {
        this.props.handleClick()
    }

    handleDate = (date) => {
        this.setState({ date: date })   
    }

    handleChange = (e, { name, value }) => {
        if (this.state.hasOwnProperty(name)) {
          this.setState({ [name]: value });
        }
    };

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
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                        label='Nazwa' 
                        placeholder='Nazwa' 
                        required />
                    <Form.Input 
                        name="place"
                        value={this.state.place}
                        onChange={this.handleChange}
                        label='Lokalizacja' 
                        placeholder='Lokalizacja' 
                        required/>
                    <Form.Field required >
                        <label>Data i godzina</label>
                        <DatePicker
                            name='date'
                            selected={this.state.date}
                            onChange={this.handleDate}
                            showTimeSelect
                            timeIntervals={30}
                            timeCaption='time'
                            placeholderText='MM/DD/RRRR g:mm'
                            dateFormat='MMMM d, yyyy h:mm'/>
                    </Form.Field>
                    <Form.Select
                        fluid
                        name='distance'
                        value={this.state.distance}
                        onChange={this.handleChange}
                        label='Dystans'
                        options={typeOfDistance}
                        placeholder='Dystans'
                        required/> 
                    <Form.Select
                        fluid
                        name='run'
                        value={this.state.run}
                        onChange={this.handleChange}
                        label='Rodzaj biegu'
                        options={typeOfRun}
                        placeholder='Rodzaj biegu'
                        required/> 
                    <Form.Input 
                        name='numOfrunners'
                        value={this.state.numOfrunners}
                        onChange={this.handleChange}
                        label='Liczba uczestników' 
                        type='number'
                        placeholder='Liczba uczestników'  
                        required/>
                    <Form.Input 
                        name='charge'
                        value={this.state.charge}
                        onChange={this.handleChange}
                        label='Opłata' 
                        type='number'
                        placeholder='Opłata'/> 
                    <Form.Field>
                        <label>Zdjęcie wydarzenia</label>
                        <Input
                            type="file"
                            name="img"
                            accept=".jpg, .jpeg, .png"
                            value={this.state.img}
                            onChange={this.handleChange}/>
                    </Form.Field>
                    <br></br> 
                    <Modal   
                        trigger={<Button 
                            type='submit' 
                            color='grey'
                            onClick={this.handleClick}>
                            Dodaj wydarzenie
                        </Button>} 
                        header='Gratulacje!'
                        content='Stworzyłeś własne wydarzenie.'
                        actions={[{ content: 'Ok', positive: true }]}/>             
                </Form>
            </div>         
        )
    }
}
    
 

