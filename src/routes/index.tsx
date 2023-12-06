import { component$, useSignal, $ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { PokemonImage } from "~/components/pokemons/pokemon-image";

export default component$(() => {
  const pokemonId = useSignal<number>(1); // Para primitivos, valores bools, strings, numbers
  const showBackImage = useSignal<boolean>(false);
  // const pokemonId2 = useStore(1); Para arreglos y objetos
  // A continuacion se ve como puedo hacer funciones serializadas de qwik que seria
  // funciones que se tienen lazy loading ya que las disparare cuando se haga click en el boton
  // y el boton renderizara cosas de forma perezosa
  const changePokemonId = $((value: number) => {
    if (pokemonId.value + value <= 0) {
      return;
    }
    pokemonId.value += value;
  });

  const togglePokemonOrientation = $(( ) => {
    if (showBackImage.value) {
      showBackImage.value = false;
    } else {
      showBackImage.value = true;
    }
  });
  return (
    <>
      <span class="text-2xl">Buscador simple</span>
      <span class="text-9xl">{pokemonId}</span>

      <PokemonImage id={pokemonId.value} backImage={showBackImage.value} />
      <div class="mt-2">
        <button
          onClick$={() => changePokemonId(-1)}
          class="btn btn-primary mr-2"
        >
          Anterior
        </button>
        <button
          onClick$={() => changePokemonId(+1)}
          class="btn btn-primary mr-2"
        >
          Siguiente
        </button>
        <button
          onClick$={() => togglePokemonOrientation()}
          class="btn btn-primary mr-2"
        >
          Voltear
        </button>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Pokemon",
  meta: [
    {
      name: "description",
      content: "Primera aplicacion con qwik",
    },
  ],
};
