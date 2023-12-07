import { component$, useTask$, useSignal } from "@builder.io/qwik";

// import { type Signal } from "@builder.io/qwik"
// Tambien puedo recibir como prop la signal definiendo el interface Props de la siguiente forma
// id: Signal<number>

interface Props {
  id: number;
  size?: number;
  backImage?: boolean;
  isVisible?: boolean;
}

export const PokemonImage = component$(
  ({ id, size = 200, backImage = false, isVisible = false }: Props) => {
    const imageLoaded = useSignal(false);

    // Tipo el effect o derived, solo que no es magico como en svelte la reactividad aqui le digo
    // que trackee cierto valor cuando cambie,  si cambia ese valor hago esto disparo esto.
    useTask$(({ track }) => {
      track(() => id);
      imageLoaded.value = false;
    });

    let urlImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
    if (backImage) {
      urlImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${id}.png`;
    } else {
      urlImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
    }
    return (
      <div
        class="flex items-center justify-center"
        style={{ width: `${size}px`, height: `${size}px` }}
      >
        {!imageLoaded.value && <span>Cargando ... </span>}

        <img
          width="96"
          height="96"
          src={urlImage}
          alt="Pokemon Image"
          style={{ width: `${size}px` }}
          onLoad$={() => {
            imageLoaded.value = true;
          }}
          class={[
            {
              hidden: !imageLoaded.value,
              "brightness-0": isVisible,
            },
            "transition-all",
          ]}
        />
      </div>
    );
  },
);
