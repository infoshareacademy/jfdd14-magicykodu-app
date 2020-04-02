import React, { Component } from "react";
import { Grid, Form, Input, Dropdown, Header } from "semantic-ui-react";
import { uuid } from "uuidv4";
// import List from '../../List.json'
import "./Search.css";

const typeOfRun = [
  { key: "u", text: "Uliczny", value: "street" },
  { key: "p", text: "Przełajowy", value: "cross-country" }
];

const typeOfdistance = [
  { key: "5", label: "5 km", value: "5" },
  { key: "10", label: "10 km", value: "10" },
  { key: "half-m", label: "Półmaraton", value: "half-marathon" },
  { key: "m", label: "Maraton", value: "marathon" }
];

export default class Search extends Component {

  state = {
    id: uuid(),
    place: "",
    distance: "10",
    run: "",
  };

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  render() {
    const {place, distance, run} = this.state
    return (
      <div>
        <Header textAlign="center" className="search__header">
          Znajdź wydarzenie, zapisz się i biegnij!
        </Header>
        <Grid padded={true}>
          <Grid.Row columns={1} centered={true}>
            <Grid.Column mobile={14} tablet={14} computer={4}>
              <Input placeholder="Wpisz miasto" fluid onChange={this.handleChange}/>
            </Grid.Column>
            <Grid.Column mobile={14} tablet={14} computer={4}>
              <Dropdown
                fluid
                selection
                options={typeOfRun}
                placeholder="Wybierz rodzaj biegu"
              />
            </Grid.Column>
            <Grid.Column as ={Form} mobile={14} tablet={14} computer={4}>
              <Form.Input
                label={`Dystans: ${distance}km `}
                min={0}
                max={100}
                name="distance"
                onChange={this.handleChange}
                step={1}
                type="range"
                value={distance}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
