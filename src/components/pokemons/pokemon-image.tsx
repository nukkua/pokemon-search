import { component$ } from "@builder.io/qwik";

// import { type Signal } from "@builder.io/qwik"
// Tambien puedo recibir como prop la signal definiendo el interface Props de la siguiente forma
// id: Signal<number>

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
        <img width="96" height="96"
          src={urlImage}
          alt="Pokemon Image"
          style={{ width: `${size}px` }}
        />
      </>
    );
  },
);
