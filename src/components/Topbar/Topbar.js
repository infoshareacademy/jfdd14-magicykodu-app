import React, {Component} from 'react';
import { Button } from 'semantic-ui-react';
// import './Topbar.css';
import { Menu, Header, Segment } from 'semantic-ui-react'

// class Topbar extends Component{

//     render(){
//         return (
//             <div className="topbar">
//                 <h2>Planner 4 Runner</h2>
//                 <Button className="button" color="green">Log out</Button>
//             </div>
            
//         )
//     }
// }

// export default Topbar;

export default class Topbar extends Component {
    state = { activeItem: 'home' }
  
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
    render() {
      const { activeItem } = this.state
  
      return (
        <Segment inverted>
          <Menu inverted secondary>
          <Header inverted as='h3'>Third Header</Header>
            <Menu.Item
            position='right'
              name='home'
              active={activeItem === 'home'}
              onClick={this.handleItemClick}
            />

          </Menu>
        </Segment>
      )
    }
  }
  

