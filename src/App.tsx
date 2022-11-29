import React, { createContext, useState, useContext, useMemo } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/layout/Layout'
import Build from './pages/build/build'
import MyCard from './pages/mycard/mycard'

interface PC {
  name: string;
  brand: string;
  price: string;
}

const pc: PC = {
  name: '',
  brand: '',
  price: ''
}

export const PcContext = createContext({
  selectedMotherboard: pc,
  selectedCpu: pc,
  selectedRam: pc,
  setSelectedMotherboard: (a:any) => {},
  setSelectedCpu: (a:any) => {},
  setSelectedRam: (a:any) => {}
});

const App = () => {
  const [selectedMotherboard, setSelectedMotherboard] = useState(pc);
  const [selectedCpu, setSelectedCpu] = useState(pc);;
  const [selectedRam, setSelectedRam] = useState(pc);;

  const value = {
    selectedMotherboard, 
    selectedCpu,
    selectedRam,
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
            <Route path="mycard" element={<MyCard />} />
          </Route>
        </Routes>
      </PcContext.Provider>
    </BrowserRouter>
  );
}

export default App;
