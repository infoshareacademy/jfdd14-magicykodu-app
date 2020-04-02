import React, { Component } from "react";
import { Grid, Input, Dropdown } from "semantic-ui-react";
// import List from '../../List.json'

const typeOfRun = [
  { key: "u", text: "Uliczny", value: "street" },
  { key: "p", text: "Przełajowy", value: "cross-country" }
];

export default class Search extends Component {
  render() {
    return (
      <div>
        <Grid padded={true}>
          <Grid.Row columns={1} centered={true}>
            <Grid.Column mobile={14} tablet={14} computer={4}>
              <Input placeholder="Wpisz miasto" fluid />
            </Grid.Column>
            <Grid.Column mobile={14} tablet={14} computer={4}>
              <Dropdown
                fluid
                selection
                options={typeOfRun}
                placeholder="Wybierz rodzaj biegu"
              />
            </Grid.Column>
            <Grid.Column mobile={14} tablet={14} computer={4}></Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
