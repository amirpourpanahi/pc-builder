import React, { createContext, useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/layout/Layout'
import Build from './pages/build/build'
import MyCart from './pages/mycart/mycart'
import IPcPart from './interfaces/i-pc-part'
import IPC from './interfaces/i-pc'

const pcPart: IPcPart = {
  name: '',
  brand: '',
  price: ''
}

export const PcContext = createContext({
  arrPCs: [] as IPC[],
  selectedMotherboard: pcPart,
  selectedCpu: pcPart,
  selectedRam: pcPart,
  setArrPCs: (a:any) => {},
  setSelectedMotherboard: (a:any) => {},
  setSelectedCpu: (a:any) => {},
  setSelectedRam: (a:any) => {}
});

const App = () => {
  const [arrPCs, setArrPCs] = useState([] as IPC[]);
  const [selectedMotherboard, setSelectedMotherboard] = useState(pcPart);
  const [selectedCpu, setSelectedCpu] = useState(pcPart);;
  const [selectedRam, setSelectedRam] = useState(pcPart);;

  const value = {
    arrPCs,
    selectedMotherboard, 
    selectedCpu,
    selectedRam,
    setArrPCs,
    setSelectedMotherboard,
    setSelectedCpu,
    setSelectedRam
  };

  return (
    <BrowserRouter>
      <PcContext.Provider value={value}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Build />} />
            <Route path="mycart" element={<MyCart />} />
          </Route>
        </Routes>
      </PcContext.Provider>
    </BrowserRouter>
  );
}

export default App;
