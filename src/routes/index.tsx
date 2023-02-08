import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <div
      class="bg-cover bg-center min-h-screen"
      style={"background-image: url(/comingSoon.png)"}
    >
      {/* <img src="/public/comingSoon.png" alt="landing" class="object-cover" /> */}
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Krazee Lab',
  meta: [
    {
      name: 'description',
      content: 'Krazee lab web site',
    },
  ],
};


