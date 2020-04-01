import React, { Component } from "react";
import { Button, Form, Header, Modal, Input, Popup } from "semantic-ui-react";
import DatePicker from "react-datepicker";
import CreatableSelect from "react-select/creatable";
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
  { key: "m", label: "Maraton", value: "marathon" },
  { key: "o", label: "Inne", value: "Other" }
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
    confirm: false
  };

  handleInputChange = distance => {
    this.setState({ distance });
  };

  handleInputChangeRun = run => {
    this.setState({ run });
  };

  handleClick = props => {
    this.props.handleClick();
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
      confirm: false
    });
  };

  onFormSubmit = e => {
    e.preventDefault();
    this.saveToLocaleStorage();
    this.resetForm();
  };

  render() {
    const addEventBtn = this.state.confirm ? (
      <Modal
        trigger={
          <Button type="submit" color="grey" onClick={this.handleClick}>
            Dodaj wydarzenie
          </Button>
        }
        header="Gratulacje!"
        content="Stworzyłeś własne wydarzenie."
        actions={[{ content: "Ok", positive: true }]}
      />
    ) : (
      <Popup
        content="Akceptacja regulaminu jest konieczna"
        trigger={<Button type="submit" color="grey">Dodaj wydarzenie</Button>}
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
            value={this.state.name}
            onChange={this.handleChangeText}
            label="Nazwa"
            required
          />
          <Form.Input
            name="place"
            value={this.state.place}
            onChange={this.handleChangeText}
            label="Lokalizacja"
            required
          />
          <Form.Field required>
            <label>Data i godzina</label>
            <DatePicker
              name="date"
              selected={this.state.date}
              onChange={this.handleChangeDate}
              showTimeSelect
              timeIntervals={30}
              timeCaption="time"
              placeholderText="MM/DD/RRRR g:mm"
              dateFormat="MMMM d, yyyy h:mm"
            />
          </Form.Field>
          <Form.Field>
            <label>
              Dystans
              <CreatableSelect
                isClearable
                onChange={this.handleInputChange}
                value={this.state.distance}
                options={typeOfdistance}
                placeholder="Wybierz..."
              />
            </label>
          </Form.Field>
          <Form.Field>
            <label>
              Rodzaj biegu
              <CreatableSelect
                isClearable
                name="run"
                onChange={this.handleInputChangeRun}
                value={this.state.run}
                options={typeOfRun}
                placeholder="Wybierz..."
              />
            </label>
          </Form.Field>
          <Form.Input
            name="numOfrunners"
            value={this.state.numOfrunners}
            onChange={this.handleChangeText}
            label="Liczba uczestników"
            type="number"
            required
          />
          <Form.Input
            name="charge"
            value={this.state.charge}
            onChange={this.handleChangeText}
            label="Opłata"
            type="number"
          />
          <Form.Field>
            <label>
              Zdjęcie wydarzenia
              <Input
                className="image"
                id="img"
                type="file"
                name="img"
                title=" "
                accept=".jpg, .jpeg, .png"
                value={this.state.img}
                onChange={this.handleChangeText}
              />
            </label>
          </Form.Field>
          <br></br>
          <Form.Checkbox
            label="Akceptuję regulamin"
            name="confirm"
            checked={this.state.confirm}
            onChange={this.handleChangeCheckbox}
            required
          />
          {addEventBtn}
        </Form>
      </div>
    );
  }
}
