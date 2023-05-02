import { component$, Slot } from '@builder.io/qwik';
import Header from '../components/header/header';
import Footer from '~/components/footer/footer';

export default component$(() => {
  return (
    <>
      <main>
        <Header />
        <section class="bg-black w-full">
          <Slot />
        </section>
      </main>
      <Footer/>
    </>
  );
});
