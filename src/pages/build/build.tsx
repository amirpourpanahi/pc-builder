import React, { useEffect, useState, useContext } from 'react';
import {getAllProducts} from '../../services/axios'
import {PcContext} from '../../App'

const pc = {
  name: '',
  brand: '',
  price: ''
}

const Build = () => {
  const [motherboards, setMotherboards] = useState([pc]);
  const [cpus, setCpus] = useState([pc]);
  const [rams, setRams] = useState([pc]);

  const { 
    selectedMotherboard,
    selectedCpu,
    selectedRam,    
    setSelectedMotherboard,
    setSelectedCpu,
    setSelectedRam
  } = useContext(PcContext);

  const getProducts = async () => {
    getAllProducts('motherboard').then((res: any)=> {
      setMotherboards([...motherboards.concat(res.data)]);
    });
    getAllProducts('cpu').then((res: any)=> {
      setCpus([...cpus.concat(res.data)]);
    });
    getAllProducts('ram').then((res: any)=> {
      setRams([...cpus.concat(res.data)]);
    });
  };

  useEffect(() => {
    getProducts();
  }, []);


  return (
    <>
      <h1>Build</h1>
      <h1>Motherboard</h1>
        <select name="motherboard" id="motherboard" value={selectedMotherboard.name}
          onChange={(e) => setSelectedMotherboard(motherboards?.find(mb => mb['name'] === e.target.value))}
        >
        {motherboards?.map(
        (motherboard: any, index: any) => (
          <option id={index} value={motherboard?.name}>{motherboard?.name}</option>
        ),
      )}
      </select> 
      <h1>CPU</h1>
        <select name="cpu" id="cpu" value={selectedCpu.name}
          onChange={(e) => setSelectedCpu(cpus?.find(cpu => cpu['name'] === e.target.value))}
        >
        {cpus?.map(
        (cpu: any, index: any) => (
          <option id={index} value={cpu?.name}>{cpu?.name}</option>
        ),
      )}
      </select>
      <h1>RAM</h1>
        <select name="ram" id="ram" value={selectedRam.name}
          onChange={(e) => setSelectedRam(rams?.find(cpu => cpu['name'] === e.target.value))}
        >
        {rams?.map(
        (ram: any, index: any) => (
          <option id={index} value={ram?.name}>{ram?.name}</option>
        ),
      )}
      </select>
    </>
  )
};

export default Build;
