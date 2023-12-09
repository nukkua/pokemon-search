import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import { PokemonImage } from "~/components/pokemons/pokemon-image";

// El routeLoader$() es para cargar cosas antes de que se monte el componente
export const usePokemonId = routeLoader$<number>(({ params, redirect }) => {
  const id = Number(params.id);

  if (isNaN(id)) {
    redirect(301, "/");
  }
  if (id <= 0) {
    redirect(301, "/");
  }
  if (id > 1000) {
    redirect(301, "/");
  }
  return id;
});

export default component$(() => {
  // const location = useLocation(); Con su atributo agarro el id, location.params.id, si no estoy seguro que quiero
  // le hago un console.log
  const pokemonId = usePokemonId();
  return (
    <>
      <span class="text-5xl">Pokemon {pokemonId.value}</span>
      <PokemonImage id={pokemonId.value} />
    </>
  );
});
