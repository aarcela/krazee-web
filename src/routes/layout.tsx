import { component$, Slot } from '@builder.io/qwik';
import Header from '../components/header/header';

export default component$(() => {
  return (
    <>
      <main>
        <Header />
        <section class="bg-black w-full">
          <Slot />
        </section>
      </main>
      <footer>
      </footer>
    </>
  );
});
