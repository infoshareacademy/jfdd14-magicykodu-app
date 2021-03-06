import React, { Component } from "react";
import DatePicker from "react-datepicker";
import CreatableSelect from "react-select/creatable";
import Select from "react-select";
import { Button, Form, Header, Input, Popup } from "semantic-ui-react";
import { uuid } from "uuidv4";

import EventAddedModal from "../EventAddedModal/EventAddedModal";
import list from "../../List.json";

import "react-datepicker/dist/react-datepicker.css";
import "./AddEventForm.css";

const typeOfRun = [
  { key: "u", label: "Uliczny", value: "Uliczny" },
  { key: "p", label: "Przełajowy", value: "Przełajowy" },
];

const typeOfdistance = [
  { key: "5", label: "5", value: "5" },
  { key: "10", label: "10", value: "10" },
  { key: "half-m", label: "21", value: "21" },
  { key: "m", label: "42", value: "42" },
];

const btnStyle = {
  backgroundColor: "#28bb76",
  color: "#fff",
};

export default class AddEventForm extends Component {
  state = {
    id: uuid(),
    name: "",
    place: "",
    address: "",
    date: "",
    distance: "",
    run: "",
    numOfrunners: "",
    charge: "",
    img: "",
    description: "",
    confirm: false,
    show: false,
  };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  handleChangeDistance = (distance) => {
    this.setState({ distance: distance });
  };

  handleChangeRun = (run) => {
    this.setState({ run: run });
  };

  handleChangeDate = (date) => {
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
    const newItem = { ...this.state };
    newItem.distance = this.state.distance.value;
    newItem.run = this.state.run.value;
    list.push(newItem);
    localStorage.setItem("eventList", JSON.stringify(list));
  };

  resetForm = () => {
    this.setState({
      name: "",
      place: "",
      address: "",
      date: "",
      distance: "",
      run: "",
      numOfrunners: "",
      charge: "",
      img: "",
      description: "",
      confirm: false,
    });
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    this.saveToLocaleStorage();
    this.resetForm();
  };

  render() {
    const {
      name,
      place,
      address,
      date,
      distance,
      run,
      numOfrunners,
      charge,
      img,
      description,
      confirm,
    } = this.state;

    const addEventBtn =
      name !== "" &&
      place !== "" &&
      (address !== "") & (date !== "") &&
      distance !== "" &&
      run !== "" &&
      numOfrunners !== "" &&
      description !== "" &&
      confirm ? (
        <Button type="submit" style={btnStyle} onClick={this.showModal}>
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
        <EventAddedModal
          show={this.state.show}
          handleClose={this.hideModal}
        ></EventAddedModal>
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
            label="Miasto"
            required
          />
          <Form.Input
            name="address"
            value={address}
            onChange={this.handleChangeText}
            label="Adres"
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
            <Select
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
            min="1"
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
                min="0"
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
