import React, { useState } from "react";
import axios from "axios";
import { Box, Button, TextField } from "@mui/material";

const UploadDocument = () => {
  const [docName, setDocName] = useState("");
  const [docType, setDocType] = useState("");
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("doc_name", docName);
    formData.append("doc_type", docType);
    formData.append("file", file);

    try {
      await axios.post("http://127.0.0.1:8000/api/upload/", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("File uploaded successfully!");
    } catch (error) {
      console.error("Upload failed:", error);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ width: 400, padding: 3 }}>
      <TextField fullWidth label="Document Name" value={docName} onChange={(e) => setDocName(e.target.value)} />
      <TextField fullWidth label="Document Type" value={docType} onChange={(e) => setDocType(e.target.value)} />
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <Button type="submit" variant="contained" sx={{ marginTop: 2 }}>
        Upload
      </Button>
    </Box>
  );
};

export default UploadDocument;
