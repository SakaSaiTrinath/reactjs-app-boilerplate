import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import NavBar from "../components/NavBar";

// const products = [
//   { id: 1000, name: "Book" },
//   { id: 1001, name: "Pen" },
//   { id: 1002, name: "Pencil" },
//   { id: 1003, name: "Eraser" },
// ];

const ProductsPage = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetchList();
  }, []);

  const fetchList = () => {
    axios.get("https://reqres.in/api/users").then((response) => {
      setList(response.data.data);
    });
  };

  return (
    <>
      <NavBar />
      <p>Products Page</p>
      <>
        {list &&
          Array.isArray(list) &&
          list.map((item) => (
            <Card key={item.id}>
              <CardContent>
                {item.first_name} {item.last_name}
              </CardContent>
            </Card>
          ))}
      </>
    </>
  );
};

export default ProductsPage;
