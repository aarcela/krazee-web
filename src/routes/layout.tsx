import { component$, Slot } from '@builder.io/qwik';
import Header from '../components/header/header';
import Footer from '~/components/footer/footer';

export default component$(() => {
  return (
    <>
      <Header />
      <main class="bg-black w-full">
        <Slot />
      </main>
      <Footer />
    </>
  );
});
