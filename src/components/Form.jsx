import React, { useState } from "react";
import clienteAxios from "../config/clienteAxios";
const Form = () => {
  const [name, setName] = useState("");
  const [model, setModel] = useState("");
  const [manufacter, setManufacter] = useState("");
  const [passangers, setPassangers] = useState("");
  const [starshipClass, setStarshipClass] = useState("");
  const [cargoCapacity, setCargoCapacity] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await clienteAxios.post(`/api/interstellar-ships`, {
        name,
        model,
        manufacter,
        passangers,
        starshipClass,
        cargoCapacity,
      });
      console.log(data);
      setName("");
      setModel("");
      setManufacter("");
      setPassangers("");
      setStarshipClass("");
      setCargoCapacity("");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="md:w-4/5 xl:w-3/5 mx-auto mb-32 mt-20">
      <div className="flex justify-center mt-5">
        <div className="w-full max-w-lg">
          <form
            className="bg-white rounded shadow-md px-8 pt-6 pb-8 mb-4"
            onSubmit={handleSubmit}
          >
            <div className="mb-4">
              <label
                className="block text-black text-base font-bold mb-2"
                htmlFor="name"
              >
                Nombre
              </label>
              <input
                id="name"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-black text-base font-bold mb-2"
                htmlFor="model"
              >
                Model
              </label>
              <input
                id="model"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                value={model}
                onChange={(e) => setModel(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-black text-base font-bold mb-2"
                htmlFor="manufacter"
              >
                manufacter
              </label>
              <input
                id="manufacter"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                value={manufacter}
                onChange={(e) => setManufacter(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-black text-base font-bold mb-2"
                htmlFor="passangers"
              >
                passangers
              </label>
              <input
                id="passangers"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                value={passangers}
                onChange={(e) => setPassangers(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-black text-base font-bold mb-2"
                htmlFor="starship_class"
              >
                Starship Class
              </label>
              <input
                id="starship_class"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                value={starshipClass}
                onChange={(e) => setStarshipClass(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-black text-base font-bold mb-2"
                htmlFor="cargo_capacity"
              >
                Cargo Capacity
              </label>
              <input
                id="cargo_capacity"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                value={cargoCapacity}
                onChange={(e) => setCargoCapacity(e.target.value)}
              />
            </div>
            <input
              type="submit"
              className="bg-yellow-500 hover:bg-gray-900 w-full p-2 text-white uppercase font-bold"
              value="Crear Nave"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
