import React, { useState } from 'react'
import "./Planets.css"
import 'bootstrap/dist/css/bootstrap.css';
import Modall from './Modal';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { addPlanet } from '../../store/planet'
import { useHistory } from "react-router-dom";
import { Table, Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';




const Planet = ({ data, key }) => {

  const keys = Object.keys(data);
  const planet = useSelector(((state) => state.planet.data))
  const dispatch = useDispatch();

  const [modalOpen, setModalOpen] = useState(false)



  const history = useHistory();


  const handlePlanetClick = (data) => {
    dispatch(addPlanet(data))
    let path = "/planet";
    history.push(path);

  }
  const displayKeys = keys.slice(0, 8)


  const toggleModal = () => {
    setModalOpen(!modalOpen)
  }




  return (
    <div>



      <Table striped bordered>
        <tbody>
          <tr>
            <td >{data.name}</td>
            <td className={typeof Number(data.rotation_period) === 'number' ? 'numeric-cell' : ''}>
              {data.rotation_period}
            </td>
            <td className={typeof Number(data.orbital_period_period) === 'number' ? 'numeric-cell' : ''}>
              {data.orbital_period}
            </td>
            <td className={typeof Number(data.diameter) === 'number' ? 'numeric-cell' : ''}>
              {data.diameter}
            </td>
            <td>{data.climate}</td>
            <td>{data.gravity}</td>
            <td>{data.terrain}</td>
            <td className={typeof Number(data.surface_water) === 'number' ? 'numeric-cell' : ''}>
              {data.surface_water}
            </td>
            <td>
              <tr>
                <td className="link-buttons">
                  <Button>Go To Films</Button>
                </td>
              </tr>
              <tr>
                <td className="link-buttons">
                  <Button>Go To Residents</Button>
                </td>
              </tr>
            </td>
            <td>
              <Modall isOpen={modalOpen} toggle={toggleModal} data={data} />
            </td>
            <td>
              <Button onClick={() => handlePlanetClick(data)}>More Details</Button>
            </td>
            <td className={typeof data.residents.length === 'number' ? 'numeric-cell' : ''}>{data.residents.length}</td>
            <td className={typeof data.films.length === 'number' ? 'numeric-cell' : ''}>{data.films.length}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );

}

Planet.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    rotation_period: PropTypes.number,
    orbital_period: PropTypes.number,
    diameter: PropTypes.number,
    climate: PropTypes.string,
    gravity: PropTypes.string,
    terrain: PropTypes.string,
    surfaceWater: PropTypes.number,
  }).isRequired,

};
export default Planet
