import React, { Component } from 'react';

import List from '../../components/List/List'

import allEvents from '../../List.json'

const IMEMS_PER_PAGE = 10

class EventList extends Component {
    state = {
        activePage: 1,
    }

    render() {
        // @@ TODO - all filters by category etc.
        const evetsFiltered = allEvents

        const totalPages = Math.ceil(evetsFiltered.length / IMEMS_PER_PAGE)

        const eventsOnActivePage = (
            evetsFiltered
                .filter((el, i) => i >= ((this.state.activePage - 1) * IMEMS_PER_PAGE) && i < (this.state.activePage * IMEMS_PER_PAGE))
        )


        return (
            <div>
                {/* @TODO search component propapbly will be here */}
                <List
                    events={eventsOnActivePage}
                    activePage={this.state.activePage}
                    onPageChange={(e, { activePage }) => this.setState({ activePage })}
                    totalPages={totalPages}
                />
            </div>
        )
    }
}

export default EventList;