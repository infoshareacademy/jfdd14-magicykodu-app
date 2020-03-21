import React, {Component} from 'react'
import AreaChartUsers from '../../components/AreaChart/AreaChartUsers'
import PieChartAge from '../../components/PieChart/PieChartAge'

class Home extends Component {
    render() {
        return (
            <div style={{backgroundColor: '#e6e6e6'}}>
                <h3>Nowi użytkownicy</h3>
                <AreaChartUsers />
                <h3>Wiek użytkowników</h3>
                <PieChartAge />
            </div>
        )
    }
}

export default Home;