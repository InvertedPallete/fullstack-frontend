import React, { useEffect, useState } from "react";
import axios from "axios";
import _ from "lodash";
import { Table, TableHead, TableRow, TableCell, TableBody, CircularProgress, Button } from "@mui/material";

const PortfolioTable = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Mock data for testing (replace with API data)
  const mockData = [
    { id: 1, loan_no: "LB012345", loan_type: "Personal Loan", borrower_name: "Vivaan Yek", sanction_amount: 384554, region: "West" },
    { id: 2, loan_no: "LB012346", loan_type: "Personal Loan", borrower_name: "Nirvi Sahu", sanction_amount: 308451, region: "South" },
    { id: 3, loan_no: "LB012347", loan_type: "Personal Loan", borrower_name: "Samar Jain", sanction_amount: 343439, region: "South" },
    { id: 4, loan_no: "LB012348", loan_type: "Personal Loan", borrower_name: "Neelesh Jayaprakash", sanction_amount: 314349, region: "South" },
    { id: 5, loan_no: "LB012349", loan_type: "Home Loan", borrower_name: "Badril Bhatnagar", sanction_amount: 346800, region: "West" },
    { id: 6, loan_no: "LB012350", loan_type: "Personal Loan", borrower_name: "Zoya Kala", sanction_amount: 1098346, region: "South" },
    { id: 7, loan_no: "LB012351", loan_type: "Car Loan", borrower_name: "Shlok Kulkarni", sanction_amount: 2735686, region: "South" },
    { id: 8, loan_no: "LB012352", loan_type: "Home Loan", borrower_name: "Dhanak Bhatnagar", sanction_amount: 1398765, region: "North" },
    { id: 9, loan_no: "LB012353", loan_type: "Car Loan", borrower_name: "Vritika Hayre", sanction_amount: 2275565, region: "North" },
    { id: 10, loan_no: "LB012354", loan_type: "Personal Loan", borrower_name: "Aarav Mehta", sanction_amount: 312450, region: "West" },
  ];

  useEffect(() => {
    // Uncomment this for real API
    // axios.get("http://127.0.0.1:8000/api/loans/")
    //   .then((response) => {
    //     setData(response.data);
    //     setLoading(false);
    //   })
    //   .catch((error) => {
    //     console.error("Error fetching data:", error);
    //     setLoading(false);
    //   });

    // Using mock data for now
    setTimeout(() => {
      setData(mockData);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) return <CircularProgress />;

  // Group data by loan_type
  const groupedData = _.groupBy(data, "loan_type");

  return (
    <>
      {Object.keys(groupedData).map((group) => (
        <div key={group} style={{ marginBottom: "20px" }}>
          <h3>{group}</h3>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Loan No</TableCell>
                <TableCell>Borrower</TableCell>
                <TableCell>Amount</TableCell>
                <TableCell>Region</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {groupedData[group].map((loan) => (
                <TableRow key={loan.id}>
                  <TableCell>{loan.loan_no}</TableCell>
                  <TableCell>{loan.borrower_name}</TableCell>
                  <TableCell>₹ {loan.sanction_amount.toLocaleString()}</TableCell>
                  <TableCell>{loan.region}</TableCell>
                  <TableCell>
                    <Button variant="contained" color="primary" style={{ marginRight: "5px" }}>
                      Edit
                    </Button>
                    <Button variant="contained" color="secondary">
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      ))}
    </>
  );
};

export default PortfolioTable;
