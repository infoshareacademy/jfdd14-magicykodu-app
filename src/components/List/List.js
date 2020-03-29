import React from 'react'
import { Button, Icon, Image, Item, Label } from 'semantic-ui-react'
import PaginationExampleCompact from '../Pagination/Pagination'
import allList from "../List/List.json";

console.log(allList)


const ItemExampleDivided = props => {
  const item = allList.map(el => `</br>User ID:${item.name}</br> ID: ${item.place} </br> TITLE: ${item.date}`)
  console.log(ItemExampleDivided)

    return (
  <Item.Group divided>
    <Item>
      <Item.Image src={item.image} />

      <Item.Content>
        <Item.Header as='a'>Nazwa:{item.name}</Item.Header><br></br>
        <Item.Meta>
          <span className='cinema'>Miasto:{' '+ item.place}</span>
        </Item.Meta><br></br>
        <Item.Meta>
          <span className='cinema'>Data:{item.date}</span>
        </Item.Meta><br></br>
        <Item.Meta>
          <span className='cinema'>Dystans:{item.distance}</span>
        </Item.Meta><br></br>
        <Item.Extra>
          <Button primary floated='right'>
            Zapisz się na bieg!
            <Icon name='right chevron' />
          </Button>
        </Item.Extra>
      </Item.Content>
    </Item>
    <PaginationExampleCompact />
    </Item.Group>
)
}
export default ItemExampleDivided

