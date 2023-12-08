import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return <>Hola mundo - client</>;
});
export const head: DocumentHead = {
  title: "Client",
  meta: [
    {
      name: "description",
      content: "client side rendering",
    },
  ],
};
