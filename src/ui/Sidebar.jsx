import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="md:w-2/5 xl:w-1/5 bg-gray-800">
      <div className="p-6">
        <p className="uppercase text-white text-2xl tracking-wide text-center font-bold">
          RestaurantApp
        </p>
        <p className="mt-3 text-gray-600">
          Administra tu restaurant en las siguientes opciones:
        </p>

        <nav className="mt-10">
          <NavLink
            to="/"
            className={({ isActive }) =>
              ` ${
                isActive ? "text-yellow-500" : "text-gray-400"
              } block mt-1 font-light text-white hover:text-yellow-500`
            }
            end
          >
            Ordenes
          </NavLink>
          <NavLink
            to="/menu"
            className={({ isActive }) =>
              ` ${
                isActive ? "text-yellow-500" : "text-gray-400"
              } block mt-1 font-light text-white hover:text-yellow-500`
            }
            end
          >
            Menu
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
