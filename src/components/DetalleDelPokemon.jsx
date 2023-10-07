import { useState, useEffect } from "react";
import { variasPeticiones } from "../helper/helpers";
import { styled } from "styled-components";
import Pokemon from "./Pokemon";
const Div = styled.div`
  width: 100%;
`;

const DetalleDelPokemon = ({ pokemonSeleccionado }) => {
  const [detallePokemon, setDetallePokemon] = useState(null);
  const [cargando, setCargando] = useState(false);
  useEffect(() => {
    const obtenerDetalles = async () => {
      setCargando(true);
      const url = pokemonSeleccionado;
      const consulta = await fetch(url);
      const respuesta = await consulta.json();
      const promesasResueltas = await Promise.all(
        variasPeticiones(respuesta.abilities)
      );
      const pokemonInfo = {
        ...respuesta,
        abilities: promesasResueltas,
      };
      setDetallePokemon(pokemonInfo);
      setCargando(false);
    };
    if (pokemonSeleccionado) {
      obtenerDetalles();
    }
  }, [pokemonSeleccionado]);

  return (
    <>
      {cargando && "cargando..."}
      {detallePokemon ? (
        <Pokemon detallePokemon={detallePokemon} />
      ) : (
        <p>Seleccione un pokemon</p>
      )}
    </>
  );
};

export default DetalleDelPokemon;
