import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './PlanetDetail.css'
import { Table } from 'reactstrap';

const PlanetDetail = () => {
  const [data, setData] = useState([]);

  const p = useSelector((state) => state.planet.data);

  console.log(p)
  useEffect(() => {
    setData(p[0]);
  }, []);

  const k = Object.keys(data).slice(0, 8);
  console.log(k)

  return (
    <div>
      <h2 style={{ textAlign: 'center', marginTop: '2rem' }}>Planet Details</h2>
      <div className="planet-detail">

        <h1 className='heading-title'>{data.name}</h1>
        <div className="planet-card">
          <div style={{ margin: '0px 45%' }}>
            <Table>
              <tbody>
                <tr>
                  <td><b>Rotation Speed</b></td>
                  <td>{data.rotation_period}</td>
                </tr>
                <tr>
                  <td><b>Orbital Speed</b></td>
                  <td>{data.orbital_period}</td>
                </tr>
                <tr>
                  <td><b>Diamter</b></td>
                  <td>{data.diameter}</td>
                </tr>
                <tr>
                  <td><b>Climate</b></td>
                  <td>{data.climate}</td>
                </tr>
                <tr>
                  <td><b>Gravity</b></td>
                  <td>{data.gravity}</td>
                </tr>
                <tr>
                  <td><b>Surface Water</b></td>
                  <td>{data.surface_water}</td>
                </tr>
                <tr>
                  <td><b> Terrain</b></td>
                  <td>{data.terrain}</td>
                </tr>
                <tr>
                  <td><b>Population</b></td>
                  <td>{data.population}</td>
                </tr>

              </tbody>
            </Table>
          </div>



          <h6 className='planet-attr'>Created at: {data.created}</h6>







        </div>

      </div>
    </div>
  );
};

export default PlanetDetail;
