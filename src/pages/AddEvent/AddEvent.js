import React, { Component } from "react";
import AddEventForm from "../../components/AddEventForm/AddEventForm";

class AddEvent extends Component {
  state = { showModal: false };

  onClickHandle = () => {
    this.setState({ showModal: true });
  };

  render() {
    return (
      <div>
        <AddEventForm
          showModal={this.state.showModal}
          handleClick={this.onClickHandle}
        />
      </div>
    );
  }
}

export default AddEvent;
