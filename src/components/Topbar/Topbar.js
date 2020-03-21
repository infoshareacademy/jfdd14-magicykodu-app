import React, {Component} from 'react'
// import './Topbar.css';
import { Menu, Segment } from 'semantic-ui-react'
import Logo from '../Logo/Logo'


export default class Topbar extends Component {
    state = { 
      activeItem: 'home' 
    }
  
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
    render() {
      const { activeItem } = this.state
  
      return (
        <Segment inverted>
          <Menu inverted secondary>
            <Logo />
            <Menu.Item
              position='right'
              name='Log out'
              active={activeItem === 'home'}
              onClick={this.handleItemClick}
            />
          </Menu>
        </Segment>
      )
    }
  }
  

