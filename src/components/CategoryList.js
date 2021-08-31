import React, { useEffect, useState } from "react";
import ApiUrl from "../config/AppConfig";
import CategoryListItem from "./CategoryListItem";

function CategoryList() {
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      async function getCategory() {
        let response = await fetch(`${ApiUrl}/category`);
        response = await response.json();
        setCategory(response);
        setLoading(false);
      }
      getCategory();
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return loading
    ? null
    : category.map((category) => {
        return <CategoryListItem key={category.id} category={category} />;
      });
}

export default CategoryList;
