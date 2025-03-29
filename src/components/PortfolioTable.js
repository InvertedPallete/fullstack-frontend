import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table, TableHead, TableRow, TableCell, TableBody, CircularProgress, Button, Container, TextField, MenuItem } from "@mui/material";
import _ from "lodash";
import "./PortfolioTable.css";

const sampleData = [
  { id: 1, loan_no: "L28U3243", loan_type: "Home Loan", borrower_name: "Vedika Sachar", borrower_address: "83 Yogi Gari, Kadapa", co_borrower: "Divit Vora", co_borrower_address: "245/43, Acharya Path", dpd: 91, sanction_amount: 1934068, region: "West" },
  { id: 2, loan_no: "L28U3247", loan_type: "Car Loan", borrower_name: "Hritsika Agrawal", borrower_address: "86/822, Deo Path, Bihar", co_borrower: "Mahika Tak", co_borrower_address: "58 Tela Road, Sultan Pur", dpd: 100, sanction_amount: 1842143, region: "North" },
  { id: 3, loan_no: "L28U3250", loan_type: "Home Loan", borrower_name: "Priyansh Soman", borrower_address: "H.No. 152, Amrita Street", co_borrower: "Zaina Dara", co_borrower_address: "H.No. 42, Srinivasta Marg", dpd: 100, sanction_amount: 4537829, region: "West" },
  { id: 4, loan_no: "L28U3248", loan_type: "Home Loan", borrower_name: "Priyansh Chinda", borrower_address: "24, Ray Chowk, Qutkaul", co_borrower: "Zain Ghosh", co_borrower_address: "H.No. 59, Sugar Street", dpd: 100, sanction_amount: 2687172, region: "West" },
  { id: 5, loan_no: "L28U3273", loan_type: "Personal Loan", borrower_name: "Vivaan Virk", borrower_address: "H.No. 653, Dada Ganj", co_borrower: "Ekaksh Chital", co_borrower_address: "164/5 Divan Road", dpd: 76, sanction_amount: 836514, region: "West" },
  { id: 6, loan_no: "L28U3274", loan_type: "Personal Loan", borrower_name: "Nirvan Mander", borrower_address: "543 Singhal Street", co_borrower: "Vihaan Dua", co_borrower_address: "H.No. 115, Saha Road", dpd: 90, sanction_amount: 1256883, region: "South" },
  { id: 7, loan_no: "L28U3275", loan_type: "Personal Loan", borrower_name: "Nirvi Sahni", borrower_address: "41/42, Dua, Amroha", co_borrower: "Dhanuk Lala", co_borrower_address: "48/41, Garde Path", dpd: 75, sanction_amount: 2687368, region: "East" },
  { id: 8, loan_no: "L28U3276", loan_type: "Personal Loan", borrower_name: "Samaira Jain", borrower_address: "79/10 Barad Zila", co_borrower: "Chirag Tripathi", co_borrower_address: "23/11 Rawal Street", dpd: 76, sanction_amount: 3617416, region: "South" },
  { id: 9, loan_no: "L28U3277", loan_type: "Personal Loan", borrower_name: "Aradhya Jayarman", borrower_address: "410, Vohra Zila", co_borrower: "Shan Hora", co_borrower_address: "35/41, Bajaj Nagar", dpd: 76, sanction_amount: 1383439, region: "West" },
  { id: 10, loan_no: "L28U3278", loan_type: "Car Loan", borrower_name: "Vritika Hayre", borrower_address: "343 Banera Sasan", co_borrower: "Sara Walia", co_borrower_address: "072 Doha Clark", dpd: 50, sanction_amount: 2277556, region: "North" },
];

const PortfolioTable = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setData(sampleData);
      setLoading(false);
    }, 1000);
  }, []);

  const groupedData = _.groupBy(data, "loan_type");

  return (
    <Container>
      <h2>Portfolio</h2>
      <TextField
        label="Search Loan Number"
        variant="outlined"
        fullWidth
        margin="dense"
        onChange={(e) => setFilter(e.target.value)}
      />
      <Button variant="contained" color="primary" style={{ margin: "10px 5px" }}>Generate Pre Sarfaesi Notice</Button>
      <Button variant="contained" color="secondary" style={{ margin: "10px 5px" }}>Decline NPA</Button>
      
      {loading ? <CircularProgress /> : 
        Object.keys(groupedData).map((group) => (
          <div key={group} style={{ marginTop: "20px" }}>
            <h3>{group}</h3>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Loan No</TableCell>
                  <TableCell>Borrower</TableCell>
                  <TableCell>Co-Borrower</TableCell>
                  <TableCell>DPD</TableCell>
                  <TableCell>Sanction Amount</TableCell>
                  <TableCell>Region</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {groupedData[group].filter(loan => loan.loan_no.includes(filter)).map((loan) => (
                  <TableRow key={loan.id}>
                    <TableCell>{loan.loan_no}</TableCell>
                    <TableCell>{loan.borrower_name}</TableCell>
                    <TableCell>{loan.co_borrower}</TableCell>
                    <TableCell>{loan.dpd}</TableCell>
                    <TableCell>₹ {loan.sanction_amount.toLocaleString()}</TableCell>
                    <TableCell>{loan.region}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        ))
      }
    </Container>
  );
};

export default PortfolioTable;
