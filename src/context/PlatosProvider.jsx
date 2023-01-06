import { createContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const PlatosContext = createContext();

const PlatosProvider = ({ children }) => {
  const [platos, setPlatos] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [plato, setPlato] = React.useState(null);
  const [platoEdit, setPlatoEdit] = React.useState(null);

  const navigate = useNavigate();

  const createPlato = async (plato) => {
    try {
      const { data } = await axios.post(
        "http://localhost:3000/api/platos",
        plato
      );
      setPlatos([...platos, data]);
      navigate("/platos");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <PlatosContext.Provider
      value={{
        plato,
        setPlato,
        setPlatos,
        platos,
        createPlato,
      }}
    >
      {children}
    </PlatosContext.Provider>
  );
};

export { PlatosProvider };

export default PlatosContext;
