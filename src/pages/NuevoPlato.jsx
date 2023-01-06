import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const NuevoPlato = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      nombre: "",
      precio: "",
      categoria: "",
      imagen: "",
    },

    validationSchema: Yup.object({
      nombre: Yup.string()
        .required("El nombre del plato es obligatorio")
        .min(3, "Los nombres deben tener al menos 3 caracteres"),
      precio: Yup.number()
        .min(1, "Los precios deben ser de al menos 1")
        .required("El precio es obligatorio"),
      categoria: Yup.string().required("La categoria es obligatoria"),
      imagen: Yup.string().required("La imagen es obligatoria"),
      descripcion: Yup.string().required("La descripcion es obligatoria"),
    }),
    onSubmit: async (valores) => {
      console.log(valores);

      try {
        const { data } = await axios.post(
          "http://localhost:3000/api/platos",
          valores
        );
        console.log(data);

        //resetear el formulario
        formik.resetForm();

        //redireccionar
        navigate("/menu");
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <>
      <h1 className="text-3xl font-light mb-4">Nuevo Plato</h1>

      <div className="flex justify-center mt-10">
        <div className="w-full max-w-3xl">
          <form onSubmit={formik.handleSubmit}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm mb-2"
                htmlFor="nombre"
              >
                Nombre
              </label>
              <input
                type="text"
                id="nombre"
                placeholder="Nombre Plato"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={formik.values.nombre}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>

            {formik.touched.nombre && formik.errors.nombre ? (
              <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                <p className="font-bold">Error</p>
                <p>{formik.errors.nombre}</p>
              </div>
            ) : null}

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm mb-2"
                htmlFor="precio"
              >
                Precio
              </label>
              <input
                type="number"
                id="precio"
                placeholder="Precio Plato"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                min={0}
                value={formik.values.precio}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>

            {formik.touched.precio && formik.errors.precio ? (
              <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                <p className="font-bold">Error</p>
                <p>{formik.errors.precio}</p>
              </div>
            ) : null}

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm mb-2"
                htmlFor="categoria"
              >
                Categoria
              </label>
              <select
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white"
                id="categoria"
                value={formik.values.categoria}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                <option value="">-- Seleccione --</option>
                <option value="desayuno">Desayuno</option>
                <option value="comida">Comida</option>
                <option value="cena">Cena</option>
                <option value="bebida">Bebida</option>
                <option value="postre">Postre</option>
              </select>
            </div>

            {formik.touched.categoria && formik.errors.categoria ? (
              <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                <p className="font-bold">Error</p>
                <p>{formik.errors.categoria}</p>
              </div>
            ) : null}

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm mb-2"
                htmlFor="imagen"
              >
                Imagen
              </label>
              <input
                type="file"
                id="imagen"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={formik.values.imagen}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>

            {formik.touched.imagen && formik.errors.imagen ? (
              <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                <p className="font-bold">Error</p>
                <p>{formik.errors.imagen}</p>
              </div>
            ) : null}

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm mb-2"
                htmlFor="descripcion"
              >
                Descripcion
              </label>
              <textarea
                id="descripcion"
                placeholder="Descripcion Plato"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-20"
                value={formik.values.descripcion}
                onChange={formik.handleChange}
              ></textarea>
            </div>

            {formik.touched.descripcion && formik.errors.descripcion ? (
              <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                <p className="font-bold">Error</p>
                <p>{formik.errors.descripcion}</p>
              </div>
            ) : null}

            <input
              type="submit"
              className="bg-gray-800 hover:bg-gray-900 w-full mt-5 p-2 text-white uppercase font-bold"
              value="Agregar Plato"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default NuevoPlato;
