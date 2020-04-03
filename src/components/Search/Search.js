import React, { Component } from "react";
import { Grid, Form, Input, Dropdown, Header } from "semantic-ui-react";
// import { uuid } from "uuidv4";

import "./Search.css";

const typeOfRun = [
  { key: "u", text: "Uliczny", value: "Uliczny" },
  { key: "p", text: "Przełajowy", value: "Przełajowy" }
];

export default class Search extends Component {
  handleFilterPlace = e => this.props.onFilterPlaceChange(e.target.value);

  handleFilterRun = (e, { value }) => { this.props.onFilterRunChange(value); }

  handleFilterDistance = e => this.props.onFilterDistanceChange(e.target.value);

  render() {
    const { filterPlace, filterRun, filterDistance } = this.props;
    return (
      <div>
        <Header textAlign="center" className="search__header">
          Znajdź wydarzenie, zapisz się i biegnij!
        </Header>
        <hr></hr>
        <br></br>
        <Grid>
          <Grid.Row columns={1} centered={true} className="search__grid">
            <Grid.Column mobile={14} tablet={14} computer={4}>
              <Input
                className="search__input"
                fluid
                value={filterPlace}
                onChange={this.handleFilterPlace}
                placeholder="Wpisz miasto"
              />
            </Grid.Column>
            <Grid.Column mobile={14} tablet={14} computer={4}>
              <Dropdown
                fluid
                selection
                options={typeOfRun}
                value={filterRun}
                onChange={this.handleFilterRun}
                placeholder="Wybierz rodzaj biegu"
              />
            </Grid.Column>
            <Grid.Column as={Form} mobile={14} tablet={14} computer={4}>
              <Form.Input
                className="search__flex"
                label={`Dystans: ${filterDistance}km `}
                name="distance"
                value={filterDistance}
                onChange={this.handleFilterDistance}
                min={0}
                max={100}
                step={1}
                type="range"
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
