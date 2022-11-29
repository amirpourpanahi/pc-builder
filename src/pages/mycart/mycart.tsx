import React, { useContext } from 'react';
import {PcContext} from '../../App'
import { useNavigate } from 'react-router-dom';

const MyCart = () => {
  const { 
    selectedMotherboard,
    selectedCpu,
    selectedRam,    
    setSelectedMotherboard,
    setSelectedCpu,
    setSelectedRam
  } = useContext(PcContext);
  
  const navigate = useNavigate();

  return (
    <>
      <h1>My Cart</h1>
      <table>
        <tbody>
          <tr>
            <td>Part</td>
            <td>Name</td>
            <td>Price</td>
            <td></td>
          </tr>
          <tr>
            <td>Motherboard</td>
            <td>{selectedMotherboard.name}</td>
            <td>{selectedMotherboard.price}</td>
            <td>
              <button onClick={(e) => setSelectedMotherboard({name:'', brand:'', price:''})}>Remove</button>
            </td>
          </tr>
          <tr>
            <td>CPU</td>
            <td>{selectedCpu.name}</td>
            <td>{selectedCpu.price}</td>
            <td>
              <button onClick={(e) => setSelectedCpu({name:'', brand:'', price:''})}>Remove</button>
            </td>
          </tr>
          <tr>
            <td>RAM</td>
            <td>{selectedRam.name}</td>
            <td>{selectedRam.price}</td>
            <td>
              <button onClick={(e) => setSelectedRam({name:'', brand:'', price:''})}>Remove</button>
            </td>
          </tr>
        </tbody>
      </table>
      <button onClick={() => {navigate('/')}}>Add more</button>
    </>
  );
};

export default MyCart;