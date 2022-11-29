import React, { useContext, useEffect } from 'react';
import {PcContext} from '../../App'
import { useNavigate } from 'react-router-dom';
import IPcPart from '../../interfaces/i-pc-part'

const pcPart: IPcPart = {name: '', brand:'', price:''}

const MyCart = () => {
  const { 
    arrPCs,
    selectedMotherboard,
    selectedCpu,
    selectedRam,    
    setArrPCs,
    setSelectedMotherboard,
    setSelectedCpu,
    setSelectedRam
  } = useContext(PcContext);
  
  const navigate = useNavigate();

  useEffect(() => {
    if (selectedMotherboard === pcPart || selectedCpu === pcPart || selectedRam === pcPart){
      return;
    }
    setArrPCs([...arrPCs, { motherboard: selectedMotherboard, cpu: selectedCpu, ram: selectedRam }]);
    setSelectedMotherboard(pcPart);
    setSelectedCpu(pcPart);
    setSelectedRam(pcPart);
  }, []);

  const addMore = () => {
    navigate('/')
  }

  const removePC = (id: number) => {
    if (id !== -1) {
      setArrPCs(arrPCs.filter((_, i) => i !== id));
    }
  }

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
          {arrPCs.map((pc, index) => (
            <>
              <tr>
              <td>Motherboard</td>
              <td>{pc.motherboard.name}</td>
              <td>{pc.motherboard.price}</td>
              <td></td>
            </tr>
            <tr>
              <td>CPU</td>
              <td>{pc.cpu.name}</td>
              <td>{pc.cpu.price}</td>
              <td></td>
            </tr>
            <tr>
              <td>RAM</td>
              <td>{pc.ram.name}</td>
              <td>{pc.ram.price}</td>
              <td>
                <button onClick={() => removePC(index)}>Remove PC</button>
              </td>
            </tr>
            <tr><td><hr></hr></td><td><hr></hr></td><td><hr></hr></td><td><hr></hr></td></tr>
            </>
          ))}
          
        </tbody>
      </table>
      <button onClick={addMore}>Add more PC</button>
    </>
  );
};

export default MyCart;