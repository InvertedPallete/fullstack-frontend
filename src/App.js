import React, { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "https://your-backend-url.com"; // Replace with actual backend URL

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get(`${API_URL}/items/`)
      .then(response => setItems(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Data Table</h1>
      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
