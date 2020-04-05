import React from "react";
import { Button, Icon, Item } from "semantic-ui-react";
import PaginationExampleControlled from "../Pagination/Pagination";
import { Grid, Container } from "semantic-ui-react";
import defaultPlaceholder from "../DefaultPlaceholder/defaultPlaceholder.png";
import ListModal from '../ListModal/ListModal'

const List = ({ activePage, onPageChange, totalPages, events }) => {
  const items = events.map((el,) => {
    
    return (
      <Container className="containerList" key={el.name}>
        <div className="AddImageAndList">
          <Item.Image className="image" src={el.image || defaultPlaceholder} />
          <Grid>
            <Grid.Column>
              <Item.Content className="ulList">
                <br />
                <Item.Header className="colourText" as="a">
                  Nazwa:{" " + el.name}
                </Item.Header>
                <Item.Meta>
                  <span className="cinema">Miasto:{" " + el.place}</span>
                </Item.Meta>
                <Item.Meta>
                  <span className="cinema">
                    Data:{" " + el.date.substring(0, 16).replace("T", " ")}
                  </span>
                </Item.Meta>
                <Item.Meta>
                  <span className="cinema">Dystans:{" " + el.distance} km</span>
                </Item.Meta>
                <Item.Meta>
                  <span className="cinema">Rodzaj biegu: {el.run}</span>
                </Item.Meta>

                <Grid.Row>
                  <Item.Extra>
                    <ListModal />
                    <br />
                  </Item.Extra>
                </Grid.Row>
              </Item.Content>
            </Grid.Column>
          </Grid>
        </div>
      </Container>
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
