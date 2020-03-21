import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import { Header, Menu, Icon, Segment, Sidebar } from 'semantic-ui-react'
import Home from '../../pages/Home/Home'

class MySidebar extends Component{
    render(){
        return (
            <Sidebar.Pushable as={Segment} style={{display: "grid", gridTemplateColumns: "300px auto"}}>
                <Sidebar style={{gridColumn: "1 / span 1", width:"300px", backgroundColor: "#28bb76",}}
                    as={Menu}
                    animation='overlay'
                    icon='labeled'
                    inverted
                    vertical
                    visible 
                    width='thin'>
                        <Menu.Item as='a'> 
                            <Link to="/" style={{fontWeight: "400", color: "#1e1e1e"}}>
                                <Icon name='home' />
                                Home
                            </Link>
                        </Menu.Item>
                        <Menu.Item as='a'>  
                            <Link to="/lista-wydarzen" style={{fontWeight: "400", color: "#1e1e1e"}}>
                                <Icon name='calendar alternate outline' />
                                Lista wydarzeń
                            </Link>
                        </Menu.Item>
                        <Menu.Item as='a'> 
                            <Link to="/stworz-wlasne-wydarzenie" style={{fontWeight: "400", color: "#1e1e1e"}}>
                                <Icon name='calendar plus outline' /> 
                                Stwórz własne wydarzenie
                            </Link>
                        </Menu.Item>
                        <Menu.Item as='a'>      
                            <Link to="/ulubione" style={{fontWeight: "400", color: "#1e1e1e"}}>
                                <Icon name='heart' />
                                Ulubione
                            </Link>
                        </Menu.Item>
                </Sidebar>

                <Sidebar.Pusher style={{gridColumn: "2 / span 1"}}>
                <Segment basic>
                    <Header as='h3'>Application Content</Header>
                    <Home />
                </Segment>
                </Sidebar.Pusher>
            </Sidebar.Pushable>
        )
    }
}

export default MySidebar;

