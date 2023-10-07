import { generateUUID } from "../helper/helpers";
const Pokemon = ({ detallePokemon }) => {
  return (
    <div>
      <img src={detallePokemon.sprites.front_default} alt="foto del Pokemon" />
      <p>Selecciona una habilidad</p>
      {detallePokemon.abilities.map((ability) => (
        <button key={generateUUID}>{ability.name}</button>
      ))}
    </div>
  );
};

export default Pokemon;
