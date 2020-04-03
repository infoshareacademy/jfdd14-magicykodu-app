import React, { Component } from "react";
import DatePicker from "react-datepicker";
import CreatableSelect from "react-select/creatable";
import { Button, Form, Header, Input, Popup } from "semantic-ui-react";
import { uuid } from "uuidv4";

import List from "../../List.json";

import "react-datepicker/dist/react-datepicker.css";
import "./AddEventForm.css";

const typeOfRun = [
  { key: "u", label: "Uliczny", value: "street" },
  { key: "p", label: "Przełajowy", value: "cross-country" }
];

const typeOfdistance = [
  { key: "5", label: "5 km", value: "5" },
  { key: "10", label: "10 km", value: "10" },
  { key: "half-m", label: "Półmaraton", value: "half-marathon" },
  { key: "m", label: "Maraton", value: "marathon" }
];

export default class AddEventForm extends Component {
  state = {
    id: uuid(),
    name: "",
    place: "",
    date: "",
    distance: "",
    run: "",
    numOfrunners: "",
    charge: "",
    img: "",
    description: "",
    confirm: false
  };

  handleClick = props => {
    this.props.handleClick();
    alert("Gratulacje! Dodałeś wydarzenie!");
  };

  handleChangeDistance = distance => {
    this.setState({ distance });
  };

  handleChangeRun = run => {
    this.setState({ run: run.value });
  };

  handleChangeDate = date => {
    this.setState({ date: date });
  };

  handleChangeText = (e, { name, value }) => {
    if (this.state.hasOwnProperty(name)) {
      this.setState({ [name]: value });
    }
  };

  handleChangeCheckbox = (e, { name, checked }) => {
    if (this.state.hasOwnProperty(name)) {
      this.setState({ [name]: checked });
    }
  };

  saveToLocaleStorage = () => {
    List.push(this.state);
    localStorage.setItem("eventList", JSON.stringify(List));
  };

  resetForm = () => {
    this.setState({
      name: "",
      place: "",
      date: "",
      distance: "",
      run: "",
      numOfrunners: "",
      charge: "",
      img: "",
      description: "",
      confirm: false
    });
  };

  onFormSubmit = e => {
    e.preventDefault();
    this.saveToLocaleStorage();
    this.resetForm();
  };

  render() {
    const {
      name,
      place,
      date,
      distance,
      run,
      numOfrunners,
      charge,
      img,
      description,
      confirm
    } = this.state;

    const addEventBtn = confirm ? (
      <Button type="submit" color="grey" onClick={this.handleClick}>
        Dodaj wydarzenie
      </Button>
    ) : (
      <Popup
        content="Akceptacja regulaminu jest konieczna"
        trigger={<Button color="grey">Dodaj wydarzenie</Button>}
      />
    );

    return (
      <div className="form__container">
        <Header>Stwórz własne wydarzenie</Header>
        <hr></hr>
        <br></br>
        <Form onSubmit={this.onFormSubmit}>
          <Form.Input
            name="name"
            value={name}
            onChange={this.handleChangeText}
            label="Nazwa"
            required
          />
          <Form.Input
            name="place"
            value={place}
            onChange={this.handleChangeText}
            label="Lokalizacja"
            required
          />
          <Form.Field required>
            <label>Data i godzina</label>
            <DatePicker
              name="date"
              selected={date}
              onChange={this.handleChangeDate}
              minDate={new Date()}
              showTimeSelect
              timeIntervals={30}
              timeCaption="time"
              dateFormat="MMMM d, yyyy h:mm"
              placeholderText="MM/DD/RRRR g:mm"
            />
          </Form.Field>
          <Form.Field required>
            <label>Dystans</label>
            <CreatableSelect
              isClearable
              value={distance}
              onChange={this.handleChangeDistance}
              options={typeOfdistance}
              placeholder="Wybierz lub dodaj..."
            />
          </Form.Field>
          <Form.Field required>
            <label>Rodzaj biegu</label>
            <CreatableSelect
              isClearable
              value={run}
              onChange={this.handleChangeRun}
              options={typeOfRun}
              placeholder="Wybierz..."
            />
          </Form.Field>
          <Form.Input
            name="numOfrunners"
            value={numOfrunners}
            onChange={this.handleChangeText}
            label="Liczba uczestników"
            type="number"
            required
          />
          <Form.Field>
            <label>
              Opłata
              <Input
                name="charge"
                value={charge}
                onChange={this.handleChangeText}
                label={{ basic: true, content: "PLN" }}
                labelPosition="right"
                type="number"
              />
            </label>
          </Form.Field>
          <Form.Field>
            <label>
              Zdjęcie wydarzenia
              <Input
                className="image"
                id="img"
                accept=".jpg, .jpeg, .png"
                name="img"
                value={img}
                onChange={this.handleChangeText}
                type="file"
              />
            </label>
          </Form.Field>
          <Form.TextArea
            name="description"
            value={description}
            onChange={this.handleChangeText}
            label="Opis wydarzenia"
            required
          />
          <br></br>
          <br></br>
          <Form.Checkbox
            name="confirm"
            checked={confirm}
            onChange={this.handleChangeCheckbox}
            label="Akceptuję regulamin"
            required
          />
          {addEventBtn}
        </Form>
      </div>
    );
  }
}
