import React, {Component} from 'react'
import Search from '../../components/Search/Search'
import List from '../../List.json'

class EventList extends Component {
    render() {
        return (
            <div>
                <Search list={List}/>          
            </div>
        )
    }
}

export default EventList;