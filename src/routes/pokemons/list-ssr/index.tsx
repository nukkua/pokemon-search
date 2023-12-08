import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return <>Hola Mundo - ssr </>;
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
