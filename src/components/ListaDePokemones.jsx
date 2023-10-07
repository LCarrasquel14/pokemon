import { useState, useEffect } from "react";
import { styled } from "styled-components";

const Boton = styled.button`
  display: block;
  width: 100%;
  max-
  padding: 9px;
  margin-bottom: 10px;
  border: none;
  border-radius: 5px;
  font-family: "Roboto", sans-serif;
  font-size: 20px;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
`;
const Div = styled.div`
  width: 30%;
  margin-right: 30px;
  max-height: 550px;
  overflow: auto;
`;

const ListaDePokemones = ({ obtenerDetallePokemon }) => {
  const [listaPokemon, setListaPokemon] = useState([]);
  const seleccionarPokemon = (e) => {
    obtenerDetallePokemon(e.target.value);
  };

  useEffect(() => {
    const consultarApi = async () => {
      const url = "https://pokeapi.co/api/v2/pokemon";
      const consulta = await fetch(url);
      const respuesta = await consulta.json();
      setListaPokemon(respuesta.results);
    };
    consultarApi();
  }, []);
  return (
    <Div>
      {listaPokemon.map((pokemon) => (
        <Boton
          value={pokemon.url}
          onClick={seleccionarPokemon}
          key={pokemon.url}
        >
          {pokemon.name}
        </Boton>
      ))}
    </Div>
  );
};

export default ListaDePokemones;
