import React, {Component} from 'react'
import { Grid } from 'semantic-ui-react'
import AreaChartUsers from '../../components/AreaChartEvents/AreaChartEvents'
import PieChartAge from '../../components/PieChartAge/PieChartAge'
import SingleInfo from '../../components/SingleInfo/SingleInfo'
import './Home.css'

const data = [
    {id: 1, icon: 'user', header: 12184, description: 'Wszystkich użytkowników', color: '#8884d8'},
    {id: 2, icon: 'male', header: "63 lata", description: 'Wiek najstarszego użytkownika', color: '#999999'},
    {id: 3, icon: 'child', header: "9 lat", description: 'Wiek najmłodszego użytkownika', color: '#28bb76'},
    {id: 4, icon: 'map marker alternate', header: "Gdańsk", description: 'Najbardziej wybiegane miasto', color: '#006699'},
    {id: 5, icon: 'calendar check outline', header: 7392, description: 'Zrealizowanych imprez w 2019 roku', color: '#999999'},
    {id: 6, icon: 'angle double right', header: 88349, description: 'Przebiegniętych km w 2019 roku', color: '#8884d8'},
    {id: 7, icon: 'fire', header: 5477638, description: 'Spalonych kcal w 2019 roku', color: '#006699'},
    {id: 8, icon: 'heartbeat', header: 12, description: 'Odbytych maratonów w 2019 roku', color: '#28bb76'},
]

export default class Home extends Component {
    renderAllData = () => data.map((item) =>
        <Grid.Column key={item.id} mobile={14} tablet={7} computer={3}>
            <SingleInfo item={item}/>           
        </Grid.Column>
    )

    render() {     
        return (
            <Grid textAlign='center'> 
                <Grid.Row>
                    {this.renderAllData()}
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column mobile={14} tablet={14} computer={6}>
                        <h3 className="home__heading">Przeprowadzone imprezy 2020</h3>
                        <AreaChartUsers />
                    </Grid.Column>
                    <Grid.Column mobile={14} tablet={14} computer={6}>
                        <h3 className="home__heading">Wiek użytkowników</h3>
                        <PieChartAge />
                    </Grid.Column>
                </Grid.Row>  
            </Grid>
        )
    }
}
