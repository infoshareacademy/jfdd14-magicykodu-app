import React from "react";
import { Button, Icon, Item } from "semantic-ui-react";
import PaginationExampleControlled from "../Pagination/Pagination";
import { Grid } from "semantic-ui-react";
import defaultPlaceholder from "../DefaultPlaceholder/defaultPlaceholder.png";

const List = ({ activePage, onPageChange, totalPages, events }) => {
  console.log(events);
  const items = events.map((el) => {
    return (
      <div className="divHeight" key={el.name}>
        <Item.Image src={el.image || defaultPlaceholder} />
        <Grid.Column>
          <Item.Content>
            <br />
            <Item.Header as="a">Nazwa: {el.name}</Item.Header>
            <Item.Meta>
              <span className="cinema">Miasto: {el.place}</span>
            </Item.Meta>
            <Item.Meta>
              <span className="cinema">Data: {" " + el.date.substring(0,16).replace("T", " ")}</span>
            </Item.Meta>
            <Item.Meta>
              <span className="cinema">Dystans: {el.distance} km</span>
            </Item.Meta>
            <Item.Meta>
              <span className="cinema">Rodzaj biegu: {el.run}</span>
            </Item.Meta>
            <Grid.Row>
              <Item.Extra>
                <Button className="btn" primary floated="left">
                  Zapisz się na bieg!
                  <Icon name="right chevron" />
                </Button>
              </Item.Extra>
            </Grid.Row>
          </Item.Content>
        </Grid.Column>
      </div>
    );
  });

  return (
    <Item.Group divided>
      <Item className="row">{items}</Item>
      <PaginationExampleControlled
        activePage={activePage}
        onPageChange={onPageChange}
        totalPages={totalPages}
      />
    </Item.Group>
  );
};

export default List;
