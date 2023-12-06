import { component$, useSignal, $ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  const pokemonId = useSignal<number>(1); // Para primitivos, valores bools, strings, numbers
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

  return (
    <>
      <span class="text-2xl">Buscador simple</span>
      <span class="text-9xl">{pokemonId}</span>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId.value}.png`}
        alt="Pokemon Image"
        style={{ width: "200px" }}
      />
      <div class="mt-2">
        <button
          onClick$={() => changePokemonId(-1)}
          class="btn btn-primary mr-2"
        >
          Anterior
        </button>
        <button onClick$={() => changePokemonId(+1)} class="btn btn-primary">
          Siguiente
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
