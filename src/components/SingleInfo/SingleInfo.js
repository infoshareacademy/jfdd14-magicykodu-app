import React, { Component } from 'react';
import { Item, Icon } from 'semantic-ui-react'

export default class SingleInfo extends Component {
    render(){
        const { item } = this.props;
        return(
            <Item>
                <Icon style={{color:item.color}} name={item.icon} size='huge'/>
                <Item.Content>
                    <Item.Header>
                        <h3>{item.header}</h3>
                    </Item.Header>
                    <Item.Description>
                        <p>{item.description}</p>
                    </Item.Description>
                </Item.Content>                  
            </Item> 
        )
    }
}