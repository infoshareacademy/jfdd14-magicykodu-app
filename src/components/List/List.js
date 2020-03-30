import React from 'react'
import { Button, Icon, Item, } from 'semantic-ui-react'
import PaginationExampleCompact from '../Pagination/Pagination'
import allList from '../../List.json';

console.log(allList)

const ItemExampleDivided = () => {
  const item = allList.map(el => 
    <div className='divHeight'>
      <Item.Image src={el.image} />
      <Item.Content>
        <Item.Header as='a'>Nazwa:{el.name}</Item.Header><br></br>
        <Item.Meta>
          <span className='cinema'>Miasto:{' '+ el.place}</span>
        </Item.Meta><br></br>
        <Item.Meta>
          <span className='cinema'>Data:{el.date}</span>
        </Item.Meta><br></br>
        <Item.Meta>
          <span className='cinema'>Dystans:{el.distance}</span>
        </Item.Meta>
        <br></br>
        <Item.Extra>
          <Button primary floated='right'>
            Zapisz się na bieg!
            <Icon name='right chevron' />
          </Button>
        </Item.Extra>
      </Item.Content>
    </div>   
  )

  return (
    <Item.Group divided>
      <Item className='row'>
        {item}
      </Item>
      <PaginationExampleCompact />
    </Item.Group>  
  )
}

export default ItemExampleDivided

