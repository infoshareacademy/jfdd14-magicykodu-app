import React from "react";
import defaultPlaceholder from "../DefaultPlaceholder/defaultPlaceholder.png";
import { Button, Header, Icon, Image, Modal} from "semantic-ui-react";
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
        <Header>Miasto: {element.place}</Header>
          <p>Adres: {element.address}</p>
          <p>Data: {element.date}</p>
          <p>Dystans: {element.distance} km</p>
          <p>Rodzaj biegu: {element.run}</p>
          <p>Liczba uczestników: {element.numOfrunners}</p>
          <p>Opłata: {element.charge} PLN</p>
          <p>Opis: {element.description}</p>
          
        </Modal.Description>
      </Modal.Content> 
    
    </Modal>
  );
};
export default ListModal;
