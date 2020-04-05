import React from "react";
import "./EventAddedModal.css";
import { Button, Header, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

const btnStyle = {
  backgroundColor: "#28bb76",
  color: "#fff",
  marginBottom: "10px",
};

const EventAddedModal = ({ handleClose, show }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <main className="modal-main">
        <Header as="h2">Gratulacje!</Header>
        <Icon name="thumbs up" size="big" />
        <Header as="h4">
          Stworzone przez Ciebie wydarzenie zostało dodane do listy wydarzeń.
        </Header>
        <Button
          icon
          labelPosition="left"
          onClick={handleClose}
          style={btnStyle}
        >
          <Icon name="plus" />
          Dodaj następne wydarzenie
        </Button>
        <Link to="/lista-wydarzen">
          <Button icon labelPosition="right" color="grey" onClick={handleClose}>
            Przejdź do listy wydarzeń
            <Icon name="arrow alternate circle right" />
          </Button>
        </Link>
      </main>
    </div>
  );
};

export default EventAddedModal;
