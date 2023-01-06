import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <h1 className="text-3xl font-light mb-4">Menu</h1>
      <Link
        to="/nuevo-plato"
        className="bg-blue-800 hover:bg-blue-700, inline-block mb-5  text-white uppercase font-bold p-2 hover:bg-gray-800"
      >
        Agregar Plato
      </Link>
    </>
  );
};

export default Menu;
