import './Grid.css';
import React, { useState, useEffect } from 'react';
import Planets from '../Planets';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';

import Pagination from '../Pagination';
import Planet from '../Planets/Planet';
import { Table, Button, Spinner } from 'reactstrap';
import { current } from '@reduxjs/toolkit';

function Grid() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false)
  const setPagination = (i) => {
    setCurrentPage(i);
  }

  console.log(currentPage)
  console.log(data)


  useEffect(() => {
    const apiUrl = `https://swapi.dev/api/planets/?page=${currentPage}`;

    console.log(currentPage)
    console.log('hi')
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

  console.log(data)


  return (
    <div>
      <Table striped bordered>
        <thead>
          <tr>
            <th><td>Name</td></th>
            <th><td>Rotation Period</td></th>
            <th><td>Orbital Period</td></th>
            <th><td>Diameter</td></th>
            <th><td>Climate</td></th>
            <th><td>Gravity</td></th>
            <th><td>Terrain</td></th>
            <th><td>Surface Water</td></th>
            <th><td>films/residents</td></th>
            <th><td>modal</td></th>
            <th><td>action</td></th>
            <th><td>Residents Count</td></th>
            <th><td>Films Count</td></th>
          </tr>
        </thead>
      </Table>
      {/* <tbody> */}
      {loading || data.length ==0 ? <div><Spinner style={{ width: '10rem', height: '10rem' }}>
        Loading...
      </Spinner><Pagination start={1} end={6} currentPage={currentPage} setPagination={(i) => setPagination(i)} /></div> : <div>{data.results.map((d, i) => { return (<tr><Planet key={i} data={d} /></tr>) })} <Pagination start={1} end={6} currentPage={currentPage} setPagination={(currentPage) => setCurrentPage(currentPage)} /></div>

      }

    </div>)


}
export default Grid;
