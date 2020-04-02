import React, {Component} from 'react'
import Search from '../../components/Search/Search'
import List from '../../List.json'

class EventList extends Component {
    state = {
        // id: uuid(),
        filteredPlace: "",
        filteredDistance: "10",
        filteredRun: "",
      };
    
    setFilter = () => this.setState
      
    render() {
        return (
            <div>
                <Search list={List} filter={this.state}/>          
            </div>
        )
    }
}

export default EventList;