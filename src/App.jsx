import { useState, useEffect } from "react";
import { styled } from "styled-components";
import DetalleDelPokemon from "./components/DetalleDelPokemon";
import ListaDePokemones from "./components/ListaDePokemones";

const ContenedorGeneral = styled.div`
  border: 1px solid #fff;
  width: 90%;
  height: 100%;
  margin: 0 auto;
  display: flex;
`;

const Titulo = styled.h1`
  font-family: "Roboto", sans-serif;
  text-align: center;
`;

function App() {
  const [pokemonSeleccionado, setPokemonSeleccionado] = useState("");

  const obtenerDetallePokemon = (ruta) => {
    setPokemonSeleccionado(ruta);
  };

  return (
    <>
      <Titulo>Lista De Pokemones</Titulo>
      <ContenedorGeneral>
        <ListaDePokemones obtenerDetallePokemon={obtenerDetallePokemon} />
        <DetalleDelPokemon pokemonSeleccionado={pokemonSeleccionado} />
      </ContenedorGeneral>
    </>
  );
}

export default App;
