import { component$ } from "@builder.io/qwik";

interface Props {
  id: number;
  size?: number;
  backImage?: boolean;
}

export const PokemonImage = component$(
  ({ id, size = 200, backImage = false }: Props) => {
    let urlImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
    if (backImage) {
      urlImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${id}.png`;
    } else {
      urlImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
    }
    return (
      <>
        <img
          src={urlImage}
          alt="Pokemon Image"
          style={{ width: `${size}px` }}
        />
      </>
    );
  },
);
