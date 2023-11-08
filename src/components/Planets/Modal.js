import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const Modall = ({ data }) => {

  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: data.name,
    rotation_period: data.rotation_period,
    orbital_period: data.orbital_period,
    diameter: data.diameter,
    climate: data.climate,
    gravity: data.gravity,
    terrain: data.terrain,
    surface_water: data.surface_water,
  });

  const toggleModal = () => setModalOpen(!modalOpen);

  const [dropdownToggle, setDropdownToggle] = useState(false)

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {

    console.log('Form Data:', formData);
    toggleModal(); // Close the modal after submission
  };
  return (

    <div>
      <Button onClick={toggleModal}>Open Modal</Button>
      <Modal isOpen={modalOpen} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Create Planet</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="rotation_period">Rotation Period</Label>
              <Input
                type="number"
                name="rotation_period"
                id="rotation_period"
                value={formData.rotation_period}
                onChange={handleInputChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="orbital_period">Orbital Period</Label>
              <Input
                type="number"
                name="orbital_period"
                id="orbital_period"
                value={formData.orbital_period}
                onChange={handleInputChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="diameter">Diameter</Label>
              <Input
                type="number"
                name="diameter"
                id="diameter"
                value={formData.diameter}
                onChange={handleInputChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="climate">Climate</Label>
              <Input
                type="text"
                name="climate"
                id="climate"
                value={formData.climate}
                onChange={handleInputChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="gravity">Gravity</Label>
              <Input
                type="text"
                name="gravity"
                id="gravity"
                value={formData.gravity}
                onChange={handleInputChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="terrain">Terrain</Label>
              <Dropdown isOpen={formData.terrain !== '' && dropdownToggle} toggle={() => { setDropdownToggle(!dropdownToggle) }}>
                <DropdownToggle caret>
                  {formData.terrain || 'Select Terrain'}
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem onClick={() => handleInputChange({ target: { name: 'terrain', value: 'Desert' } })}>Desert</DropdownItem>
                  <DropdownItem onClick={() => handleInputChange({ target: { name: 'terrain', value: 'Forest' } })}>Forest</DropdownItem>
                  <DropdownItem onClick={() => handleInputChange({ target: { name: 'terrain', value: 'Mountain' } })}>Mountain</DropdownItem>
                  <DropdownItem onClick={() => handleInputChange({ target: { name: 'terrain', value: 'Tundra' } })}>Tundra</DropdownItem>
                  <DropdownItem onClick={() => handleInputChange({ target: { name: 'terrain', value: 'Ice caves' } })}>Ice caves</DropdownItem>
                  <DropdownItem onClick={() => handleInputChange({ target: { name: 'terrain', value: 'gas giant' } })}>Gas giants</DropdownItem>
                  {/* Add more terrain options as needed */}
                </DropdownMenu>
              </Dropdown>
            </FormGroup>
            <FormGroup>
              <Label for="surface_water">Surface Water</Label>
              <Input
                type="number"
                name="surface_water"
                id="surface_water"
                value={formData.surface_water}
                onChange={handleInputChange}
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleSubmit}>
            Save
          </Button>
          <Button color="secondary" onClick={toggleModal}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default Modall
