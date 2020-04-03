import React from "react";
import { Button, Icon, Item } from "semantic-ui-react";
import PaginationExampleControlled from "../Pagination/Pagination";
import { Grid } from "semantic-ui-react";
// import defaultPlaceholder from ''

const List = ({
  filterPlace,
  filterRun,
  filterDistance,
  activePage,
  onPageChange,
  totalPages,
  list
}) => {
  const items = () => 
    list.map(el => {
      const filterPlaceCategory =
        el.place.toLowerCase().indexOf(filterPlace.toLowerCase()) !== -1 ||
        filterPlace === "";
      const filterDistanceCategory = el.distance === filterDistance || filterDistance === "0";
      const filterRunCategory = el.run === filterRun || filterRun === "";
      return filterPlaceCategory && filterDistanceCategory && filterRunCategory ? (
        <div className="divHeight" key={el.name}>
          <Item.Image src={el.image} />
          <Grid.Column>
            <Item.Content>
              <br />
              <Item.Header as="a">Nazwa:{" " + el.name}</Item.Header>
              <Item.Meta>
                <span className="cinema">Miasto:{" " + el.place}</span>
              </Item.Meta>
              <Item.Meta>
                <span className="cinema">Data:{" " + el.date}</span>
              </Item.Meta>
              <Item.Meta>
                <span className="cinema">Dystans:{" " + el.distance}</span>
              </Item.Meta>
              <Item.Meta>
                <span className="cinema">Rodzaj biegu:{" " + el.run}</span>
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
      ) : null;
    });

  return (
    <Item.Group divided>
      <Item className="row">{items()}</Item>
      <PaginationExampleControlled
        activePage={activePage}
        onPageChange={onPageChange}
        totalPages={totalPages}
      />
    </Item.Group>
  );
};

export default List;
