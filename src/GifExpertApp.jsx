import React from "react";
import { useState } from "react";
import { AddCategory, GifGrid } from "./components";
// import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch,"]);

  const onAddCategory = (newCategory) => {
    setCategories([newCategory, ...categories]);
    //maneras de agregar items en un array
    // setcategories((cat) => [...cat, "valorant"]);
    // setcategories(["valorant", ...categories]);
    // categories.push("Valorant"); se utiliza para mutar un objeto
  };

  return (
    <>
      {/*titulo*/}

      <h1>GifExpertApp</h1>

      {/*input*/}
      <AddCategory onNewCategory={(value) => onAddCategory(value)} />
      {/* //   setCategories={setCategories} /> */}

      {/*listado de gif*/}

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}

      {/*gif item*/}
    </>
  );
};
