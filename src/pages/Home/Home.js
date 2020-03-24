import React, {Component} from 'react'
import { Grid, Item, Icon } from 'semantic-ui-react'
import AreaChartUsers from '../../components/AreaChartEvents/AreaChartEvents'
import PieChartAge from '../../components/PieChartAge/PieChartAge'
import './Home.css'

const headerStyle = {
    textAlign: "center"
}

const itemStyle = {
    boxShadow: "1px 1px 5px 1px #999999",
    backgroundColor: "#fff",
    borderRadius: "5px",
    padding: "20px",
    margin: "15px",
}

const data = [
    {id: 1, icon: 'user', header: 12184, description: 'Wszystkich użytkowników', color: '#8884d8'},
    {id: 2, icon: 'male', header: "63 lata", description: 'Wiek najstarszego użytkownika', color: '#999999'},
    {id: 3, icon: 'child', header: "9 lat", description: 'Wiek najmłodszego użytkownika', color: '#28bb76'},
    {id: 4, icon: 'map marker alternate', header: "Gdańsk", description: 'Najbardziej wybiegane miasto', color: '#006699'},
    {id: 5, icon: 'calendar check outline', header: 7392, description: 'Przeprowadzonych imprez w 2019 roku', color: '#999999'},
    {id: 6, icon: 'angle double right', header: 88349, description: 'Przebiegniętych km w 2019 roku', color: '#8884d8'},
    {id: 7, icon: 'fire', header: 5477638, description: 'Spalonych kcal w 2019 roku', color: '#006699'},
    {id: 8, icon: 'heartbeat', header: 12, description: 'Odbytych maratonów w 2019 roku', color: '#28bb76'},
]

export default class Home extends Component {
    render() {
        const appData = data.map(item => 
            <Grid.Column key={item.id} mobile={12} tablet={6} computer={3} style={itemStyle}>
                <Item verticalAlign='middle'>
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
            </Grid.Column>)
        return (
            <Grid padded='vertically' textAlign='center'> 
                <Grid.Row>
                    {appData}
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column mobile={13} tablet={13} computer={6}>
                        <h3 style={headerStyle}>Przeprowadzone imprezy 2020</h3>
                        <AreaChartUsers />
                    </Grid.Column>
                    <Grid.Column mobile={13} tablet={13} computer={6}>
                        <h3 style={headerStyle}>Wiek użytkowników</h3>
                        <PieChartAge />
                    </Grid.Column>
                </Grid.Row>  
            </Grid>
        )
    }
}
