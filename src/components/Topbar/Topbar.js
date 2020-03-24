import React, {Component} from 'react'
import { Menu, Segment } from 'semantic-ui-react'
import Logo from '../Logo/Logo'
import MySidebar from './../MySidebar/MySidebar'
import './Topbar.css'

export default class Topbar extends Component {
    state = { 
      menuVisible: false
    }

    changeMenuVisibility = () => {
      this.setState({
        menuVisible: !this.state.menuVisible
      })
    }
  
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
    render() {
      const { menuVisible } = this.state

      return (
        <div >
          <Segment inverted>
            <Menu inverted secondary>
              <Menu.Item 
                  
                  icon="bars"
                  active
                  onClick={this.changeMenuVisibility} />
              <Menu.Item className='logo__item'>
                <Logo 
                position='left'/>
              </Menu.Item  >
              
              <Menu.Item
                position='right'
                name='Log out'
                active
                onClick={this.handleItemClick} />
            </Menu>
          </Segment>
          <MySidebar visibility={menuVisible} />
        </div>  
      )
    }
}
  

