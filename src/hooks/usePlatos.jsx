import { useContext } from "react";
import PlatosContext from "../context/PlatosProvider";

const usePlatos = () => {
  return useContext(PlatosContext)
};

export default usePlatos
