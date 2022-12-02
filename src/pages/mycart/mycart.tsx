import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { PcContext } from "../../App";
import { mycartStyles } from "./mycartStyles";

const MyCart = () => {
  const { arrPCs, setArrPCs } = useContext(PcContext);
  const navigate = useNavigate();
  const addMore = () => {
    navigate("/");
  };

  const removePC = (id: number) => {
    if (id !== -1) {
      setArrPCs(arrPCs.filter((_, i) => i !== id));
    }
  };

  return (
    <Box sx={() => ({ ...mycartStyles })}>
      <Typography className="typoHeader" variant="h4" gutterBottom>
        My Cart
      </Typography>
      <TableContainer component={Paper}>
        <Table className="table" aria-label="simple table">
          <TableHead>
            <TableRow key={"headerRow"} sx={{ borderBottom: 2 }}>
              <TableCell key={"header-part"}>Part</TableCell>
              <TableCell key={"header-name"}>Name</TableCell>
              <TableCell key={"header-price"} align="right">
                Price
              </TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          {arrPCs?.map((pc, index) => (
            <TableBody key={index}>
              <TableRow key={"motherboard" + index}>
                <TableCell component="th" scope="row">
                  {"Motherboard"}
                </TableCell>
                <TableCell>{pc.motherboard.name}</TableCell>
                <TableCell align="right">{pc.motherboard.price}</TableCell>
              </TableRow>

              <TableRow key={"cpu" + index}>
                <TableCell component="th" scope="row">
                  {"CPU"}
                </TableCell>
                <TableCell>{pc.cpu.name}</TableCell>
                <TableCell align="right">{pc.cpu.price}</TableCell>
              </TableRow>

              <TableRow key={"ram" + index} sx={{ borderBottom: 2 }}>
                <TableCell component="th" scope="row">
                  {"RAM"}
                </TableCell>
                <TableCell>{pc.ram.name}</TableCell>
                <TableCell align="right">{pc.ram.price}</TableCell>
                <TableCell align="right">
                  <Button onClick={() => removePC(index)}>Remove</Button>
                </TableCell>
              </TableRow>
            </TableBody>
          ))}
        </Table>
      </TableContainer>

      <Box className="buttonBox">
        <Button
          key={"buttonjj"}
          variant="contained"
          className="textButtonStyle"
          onClick={addMore}
        >
          Add more PC
        </Button>
      </Box>
    </Box>
  );
};

export default MyCart;
