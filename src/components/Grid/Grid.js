import './Grid.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import Pagination from '../Pagination';
import Planet from '../Planets/Planet';
import { Table, Spinner } from 'reactstrap';

function Grid() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false)
  const setPagination = (i) => {
    setCurrentPage(i);
  }

  useEffect(() => {
    const apiUrl = `https://swapi.dev/api/planets/?page=${currentPage}`;

    setLoading(true)

    axios.get(apiUrl)
      .then((response) => {
        setLoading(false)
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [currentPage]);

  return (
    <div>
      <Table striped bordered>
        <thead>
          <tr>
            <th>Name</th>
            <th>Rotation Period</th>
            <th>Orbital Period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface Water</th>
            <th>films/residents</th>
            <th>modal</th>
            <th>action</th>
            <th>Residents Count</th>
            <th>Films Count</th>
          </tr>
        </thead>
      </Table>
      {/* <tbody> */}
      {loading || data.length ==0 ? <div><Spinner style={{ width: '10rem', height: '10rem' }}>
        Loading...
      </Spinner><Pagination start={1} end={6} currentPage={currentPage} setPagination={(i) => setPagination(i)} /></div> 
      : 
      <tbody>
        {data.results.map((d, i) => { return (<tr key={i}><Planet  data={d} /></tr>) })} 
        <Pagination start={1} end={6} currentPage={currentPage} setPagination={(currentPage) => setCurrentPage(currentPage)} />
      </tbody>
      }

    </div>)


}
export default Grid;
