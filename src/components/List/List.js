import React from 'react'
import { Button, Icon, Item, } from 'semantic-ui-react'
import PaginationExampleControlled from '../Pagination/Pagination'
import { Grid, Image } from 'semantic-ui-react'

const List = ({ events, activePage, onPageChange, totalPages }) => {
  const items = events.map(el =>
    <div className='divHeight'>
      <Item.Image class="image" src={el.image} />
      <Grid>
      <Grid.Column>
        <Item.Content><br />
        <Item.Header as='a'>Nazwa:{' ' + el.name}</Item.Header>
        <Item.Meta>
          <span className='cinema'>Miasto:{' ' + el.place}</span>
        </Item.Meta>
        <Item.Meta>
          <span className='cinema'>Data:{' ' + el.date}</span>
        </Item.Meta>
        <Item.Meta>
          <span className='cinema'>Dystans:{' ' + el.distance}</span>
        </Item.Meta>
        <Grid.Row> 
        <Item.Extra>
          <Button className='btn' primary floated='right'>
            Więcej informacji!
            <Icon name='right chevron' />
          </Button>
          <br />
        </Item.Extra>
        </Grid.Row>
      </Item.Content>
      </Grid.Column>
      </Grid>
    </div>
  )

  return (

    <Item.Group divided>
      <Item className='row'>
        {items}
      </Item>
      <PaginationExampleControlled
        activePage={activePage}
        onPageChange={onPageChange}
        totalPages={totalPages}
      />
    </Item.Group>
  )
}

export default List

