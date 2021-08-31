import { Container, Grid, useMediaQuery } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import ApiUrl from "../config/AppConfig";
import ProductCard from "./ProductCard";
import Masonry from "react-masonry-css";

function ProductGrid() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const matches = useMediaQuery("(max-width:600px)");

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
      <Masonry
        breakpointCols={matches ? 2 : 4}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {products.map((products) => {
          return <ProductCard key={products.id} products={products} />;
        })}
      </Masonry>
    </Container>
  );
}

export default ProductGrid;
