import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import allList from '../../List.json'

import './ListModal.css'



const ListModal = function(props) {
   
return (
  <Modal trigger={<Button> Więcej informacji!</Button>}>
    <Modal.Header>${props.name}</Modal.Header>
    <Modal.Content image>
      <Image wrapped size='medium' src={props.image} />
      <Modal.Description>
        <Header>{props.adress}</Header>
        <p>{props.date}</p>
        <p>{props.distance}</p>
        <p>{props.run}</p>
        <p>{props.numOfrunners}</p>
        <p>{props.description}</p>
      </Modal.Description>
    </Modal.Content>
  </Modal>
);
        
}
export default ListModal