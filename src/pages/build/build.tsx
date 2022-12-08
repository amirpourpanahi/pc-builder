import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Button,
  Select,
  OutlinedInput,
  FormControl,
  MenuItem,
  InputLabel,
} from "@mui/material";
import { getAllProducts } from "../../services/axios";
import { PcContext } from "../../App";
import IPcPart from "../../interfaces/i-pc-part";
import { buildStyles } from "./buildStyles";

const pcPart: IPcPart = {
  name: "",
  brand: "",
  price: "",
};

const Build = () => {
  const [motherboards, setMotherboards] = useState([]);
  const [cpus, setCpus] = useState([]);
  const [rams, setRams] = useState([]);
  const navigate = useNavigate();

  const {
    arrPCs,
    selectedMotherboard,
    selectedCpu,
    selectedRam,
    setArrPCs,
    setSelectedMotherboard,
    setSelectedCpu,
    setSelectedRam,
  } = useContext(PcContext);

  const getProducts = async () => {
    getAllProducts("motherboard").then((res: any) => {
      setMotherboards([...motherboards.concat(res)]);
    });
    getAllProducts("cpu").then((res: any) => {
      setCpus([...cpus.concat(res)]);
    });
    getAllProducts("ram").then((res: any) => {
      setRams([...cpus.concat(res)]);
    });
  };

  useEffect(() => {
    getProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const allSelected = () => {
    return selectedMotherboard.name === "" ||
      selectedCpu.name === "" ||
      selectedRam.name === ""
      ? true
      : false;
  };

  const addToCart = () => {
    if (
      selectedMotherboard === pcPart ||
      selectedCpu === pcPart ||
      selectedRam === pcPart
    ) {
      return;
    }
    setArrPCs([
      ...arrPCs,
      { motherboard: selectedMotherboard, cpu: selectedCpu, ram: selectedRam },
    ]);
    setSelectedMotherboard(pcPart);
    setSelectedCpu(pcPart);
    setSelectedRam(pcPart);
    navigate("/mycart");
  };

  return (
    <Box sx={() => ({ ...buildStyles })}>
      <Typography className="typoHeader" variant="h4" gutterBottom>
        Build PC
      </Typography>
      <FormControl className="formControl" size="small">
        <InputLabel id="motherboard-label">Motherboard</InputLabel>
        <Select
          labelId="motherboard-label"
          id="motherboard-label"
          value={selectedMotherboard.name}
          onChange={(e) => {
            setSelectedMotherboard(
              motherboards?.find((mb) => mb["name"] === e.target.value)
            );
          }}
          label="Motherboard"
          className="select"
        >
          {motherboards?.map((motherboard: any, index) => (
            <MenuItem key={index} value={motherboard?.name}>
              {motherboard?.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl className="formControl" size="small">
        <InputLabel id="cpu-label">CPU</InputLabel>
        <Select
          labelId="cpu-label"
          id="cpu-label"
          value={selectedCpu.name}
          onChange={(e) =>
            setSelectedCpu(cpus?.find((cpu) => cpu["name"] === e.target.value))
          }
          input={<OutlinedInput label="CPU" />}
          className="select"
        >
          {cpus?.map((cpu: any, index) => (
            <MenuItem key={index} value={cpu?.name}>
              {cpu?.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl className="formControl" size="small">
        <InputLabel id="ram-label">RAM</InputLabel>
        <Select
          labelId="ram-label"
          id="select-ram"
          value={selectedRam.name}
          onChange={(e) =>
            setSelectedRam(rams?.find((ram) => ram["name"] === e.target.value))
          }
          input={<OutlinedInput label="RAM" />}
          className="select"
        >
          {rams?.map((ram: any, index) => (
            <MenuItem key={index} value={ram?.name}>
              {ram?.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Box className="buttonBox">
        <Button
          variant="contained"
          className="textButtonStyle"
          disabled={allSelected()}
          onClick={() => {
            addToCart();
          }}
        >
          Add to cart
        </Button>
      </Box>
    </Box>
  );
};

export default Build;
