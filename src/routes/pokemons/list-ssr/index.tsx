import { component$ } from "@builder.io/qwik";
import { Link, type DocumentHead, routeLoader$ } from "@builder.io/qwik-city";

export const usePokemonList = routeLoader$(async () => {
  const respuesta = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=10&offset=10`,
  );
  const data = await respuesta.json();

  return data;
});

export default component$(() => {
  const pokemonResponse = usePokemonList();

  return (
    <>
      <div class="flex flex-col">
        <span class="my-5 text-5xl">Status</span>
        <span>Pagina actual : </span>
        <span>Esta cargando pagina: </span>
      </div>

      <div class="mt-10">
        <Link class="btn btn-primary mr-2">Anteriores</Link>

        <Link class="btn btn-primary mr-2">Siguientes</Link>
      </div>

      <div class="mt-5 grid grid-cols-6">
        <div class="justfy-center m-5 flex flex-col items-center">Pokemon</div>
        <div class="justfy-center m-5 flex flex-col items-center">Pokemon</div>
        <div class="justfy-center m-5 flex flex-col items-center">Pokemon</div>
        <div class="justfy-center m-5 flex flex-col items-center">Pokemon</div>
        <div class="justfy-center m-5 flex flex-col items-center">Pokemon</div>
      </div>

      <div>{JSON.stringify(pokemonResponse.value)}</div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Ssr",
  meta: [
    {
      name: "description",
      content: "Server side rendering",
    },
  ],
};
