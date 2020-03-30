import React, { Component } from 'react'
import { Button, Form, Header, Modal, Input, Popup } from 'semantic-ui-react'
import DatePicker from 'react-datepicker';
import { uuid } from 'uuidv4';
import List from '../../List.json'

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
        id: uuid(),
        name: '',
        place: '',
        date: '',
        distance: '',
        run: '',
        numOfrunners: '',
        charge: '',
        img: '',
        confirm: false
    }

    handleClick = (props) => {
        this.props.handleClick()
    }

    handleChangeDate = (date) => {
        this.setState({ date: date })   
    }

    handleChangeText = (e, { name, value }) => {
        if (this.state.hasOwnProperty(name)) {
          this.setState({ [name]: value })
        }
    }

    handleChangeCheckbox = (e, { name, checked }) => {
        if (this.state.hasOwnProperty(name)) {
          this.setState({ [name]: checked })
        }
    }

    saveToLocaleStorage = () => {
        List.push(this.state);
        localStorage.setItem("eventList", JSON.stringify(List));
    }

    resetForm = () => {
        this.setState({ 
            name: '',
            place: '',
            date: '',
            distance: '',
            run: '',
            numOfrunners: '',
            charge: '',
            img: '',
        })
    }

    onFormSubmit = (e) => {
        e.preventDefault()
        this.saveToLocaleStorage()
        this.resetForm()
    }

    render() {
        const addEventBtn = this.state.confirm ?
        <Modal   
            trigger={<Button 
                        type='submit' 
                        color='grey'
                        onClick={this.handleClick}>
                        Dodaj wydarzenie
                    </Button>} 
            header='Gratulacje!'
            content='Stworzyłeś własne wydarzenie.'
            actions={[{ content: 'Ok', positive: true }]}/> :
        <Popup content='Akceptacja regulaminu jest konieczna' trigger={<Button>Dodaj wydarzenie</Button>} />

        return(
            <div className='form__container'>
                <Header>Stwórz własne wydarzenie</Header>
                <hr></hr>
                <br></br>     
                <Form onSubmit={this.onFormSubmit}>
                    <Form.Input 
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChangeText}
                        label='Nazwa' 
                        required />
                    <Form.Input 
                        name="place"
                        value={this.state.place}
                        onChange={this.handleChangeText}
                        label='Lokalizacja' 
                        required/>
                    <Form.Field required >
                        <label>Data i godzina</label>
                        <DatePicker
                            name='date'
                            selected={this.state.date}
                            onChange={this.handleChangeDate}
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
                        onChange={this.handleChangeText}
                        label='Dystans'
                        options={typeOfDistance}
                        required/> 
                    <Form.Select
                        fluid
                        name='run'
                        value={this.state.run}
                        onChange={this.handleChangeText}
                        label='Rodzaj biegu'
                        options={typeOfRun}
                        required/> 
                    <Form.Input 
                        name='numOfrunners'
                        value={this.state.numOfrunners}
                        onChange={this.handleChangeText}
                        label='Liczba uczestników' 
                        type='number'
                        required/>
                    <Form.Input 
                        name='charge'
                        value={this.state.charge}
                        onChange={this.handleChangeText}
                        label='Opłata' 
                        type='number'/> 
                    <Form.Field>
                        <label>Zdjęcie wydarzenia</label>
                        <Input
                            type="file"
                            name="img"
                            accept=".jpg, .jpeg, .png"
                            value={this.state.img}
                            onChange={this.handleChangeText}/>
                    </Form.Field>
                    <br></br> 
                    <Form.Checkbox 
                        label='Akceptuję regulamin' 
                        name='confirm' 
                        checked={this.state.confirm} 
                        onChange={this.handleChangeCheckbox}
                        required/>
                    {addEventBtn}
                </Form>
            </div>         
        )
    }
}
    
 

