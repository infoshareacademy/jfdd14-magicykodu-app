import React, { Component } from "react";
import Search from "../../components/Search/Search";
import List from "../../components/List/List";

import allEvents from "../../List.json";

const IMEMS_PER_PAGE = 10;

// import List from '../../List.json'

class EventList extends Component {
  state = {
    activePage: 1,
    filterPlace: "",
    filterRun: "",
    filterDistance: "0",
    list: allEvents,
  };

  handleFilterPlace = (filterPlace) =>
    this.setState({ filterPlace: filterPlace });
  handleFilterDistance = (filterDistance) =>
    this.setState({ filterDistance: filterDistance });
  handleFilterRun = (filterRun) => this.setState({ filterRun: filterRun });

  componentDidMount() {
    const list = JSON.parse(localStorage.getItem("eventList"));
    list && this.setState({ list });
  }
  
  render() {
    const { filterPlace, filterDistance, filterRun } = this.state;
    const eventsFiltered = allEvents;
    const totalPages = Math.ceil(eventsFiltered.length / IMEMS_PER_PAGE);
    const eventsOnActivePage = eventsFiltered
      .filter((el) => {
        const filterPlaceCategory =
          el.place.toLowerCase().indexOf(filterPlace.toLowerCase()) !== -1 ||
          filterPlace === "";
        const filterDistanceCategory =
          el.distance === filterDistance || filterDistance === "0";
        const filterRunCategory = el.run === filterRun || filterRun === "";
        return (
          filterPlaceCategory && filterDistanceCategory && filterRunCategory
        );
      })
      .slice(
        (this.state.activePage - 1) * IMEMS_PER_PAGE,
        this.state.activePage * IMEMS_PER_PAGE
      );

    return (
      <div>
        <Search
          filterPlace={filterPlace}
          filterDistance={filterDistance}
          filterRun={filterRun}
          onFilterPlaceChange={this.handleFilterPlace}
          onFilterDistanceChange={this.handleFilterDistance}
          onFilterRunChange={this.handleFilterRun}
        />
        <List
          events={eventsOnActivePage}
          activePage={this.state.activePage}
          onPageChange={(e, { activePage }) => this.setState({ activePage })}
          totalPages={totalPages}
        />
      </div>
    );
  }
}

export default EventList;
