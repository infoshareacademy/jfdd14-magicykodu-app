import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { Menu, Icon, Sidebar } from 'semantic-ui-react'
import './MySidebar.css'

export default class MySidebar extends Component{
    
    render(){
        const visibility = this.props.visibility

        const sidebarStyle = {
            minHeight: '100vh',
            borderRadius: 0,
            fontWeight: "400",
            backgroundColor: "#28bb76",
            marginTop: "40px"
        };

        return (
            <Sidebar style={sidebarStyle} 
            as={Menu}
            animation='push'
            icon='labeled'
            inverted
            vertical
            visible={visibility ? false : true}
            width='thin'>
                <Menu.Item as={ Link } to='/' style={{fontWeight: "400", color: "#1e1e1e"}}> 
                    <Icon name='home' />
                    Home
                </Menu.Item>
                <Menu.Item as={ Link } to="/lista-wydarzen" style={{fontWeight: "400", color: "#1e1e1e"}}>  
                    <Icon name='calendar alternate outline' />
                    Lista wydarzeń   
                </Menu.Item>
                <Menu.Item as={ Link } to="/stworz-wlasne-wydarzenie" style={{fontWeight: "400", color: "#1e1e1e"}}> 
                    <Icon name='calendar plus outline' /> 
                    Stwórz własne wydarzenie
                </Menu.Item>
                <Menu.Item as={ Link } to="/ulubione" style={{fontWeight: "400", color: "#1e1e1e"}}>      
                    <Icon name='heart' />
                    Ulubione
                </Menu.Item>      
            </Sidebar>      
        )
    }
}


