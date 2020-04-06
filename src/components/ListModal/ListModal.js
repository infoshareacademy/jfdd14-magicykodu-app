import React from "react";
import defaultPlaceholder from "../DefaultPlaceholder/defaultPlaceholder.png";
import { Button, Header, Image, Modal } from "semantic-ui-react";
import './ListModal.css'

const ListModal = function ({ element }) {
  return (
    <Modal className="containerModal" trigger={<Button className="btnModal"> Więcej informacji!</Button>}>
      <Modal.Header>{element.name}</Modal.Header>
      <Modal.Content image>
        <Image
          wrapped
          size="large"
          src={element.image || defaultPlaceholder}
        />
        <Modal.Description>
        <Header>Adres:{' '}{element.address}</Header>
          <p>Data:{' '}{element.date}</p>
          <p>Dystans:{' '}{element.distance} km</p>
          <p>Rodzaj biegu:{' '}{element.run}</p>
          <p>Liczba uczestników:{' '}{element.numOfrunners}</p>
          <p>Opis:{' '}{element.description}</p>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
};
export default ListModal;
