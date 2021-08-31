import { Container, Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import ApiUrl from "../config/AppConfig";
import ProductCard from "./ProductCard";

function ProductGrid() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      async function getCategory() {
        let response = await fetch(`${ApiUrl}/products`);
        response = await response.json();
        setProducts(response);
        setLoading(false);
      }
      getCategory();
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Container>
      <Grid container spacing={2}>
        {products.map((products) => {
          return <ProductCard key={products.id} products={products} />;
        })}
      </Grid>
    </Container>
  );
}

export default ProductGrid;
