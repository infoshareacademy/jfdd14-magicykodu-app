import React from "react";
import defaultPlaceholder from "../DefaultPlaceholder/defaultPlaceholder.png";
import { Button, Header, Image, Modal } from "semantic-ui-react";

const btnStyle = {
  backgroundColor: "#28bb76",
  color: "#fff",
};

const ListModal = function ({ element }) {
  return (
    <Modal trigger={<Button style={btnStyle}> Więcej informacji!</Button>}>
      <Modal.Header>{element.name}</Modal.Header>
      <Modal.Content image>
        <Image
          wrapped
          size="medium"
          src={element.image || defaultPlaceholder}
        />
        <Modal.Description>
          <Header>{element.adress}</Header>
          <p>{element.date}</p>
          <p>{element.distance} km</p>
          <p>{element.run}</p>
          <p>{element.numOfrunners}</p>
          <p>{element.description}</p>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
};
export default ListModal;
