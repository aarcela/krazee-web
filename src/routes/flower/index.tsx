import { component$, useClientEffect$, useStore, useStylesScoped$ } from '@builder.io/qwik';
// import { DocumentHead, useLocation } from '@builder.io/qwik-city';
import styles from './flower.css?inline';

export default component$(() => {
  useStylesScoped$(styles);
  // const loc = useLocation();

  const state = useStore({
    count: 0,
    number: 20,
  });

  useClientEffect$(({ cleanup }) => {
    const timeout = setTimeout(() => (state.count = 1), 500);
    cleanup(() => clearTimeout(timeout));

    const internal = setInterval(() => state.count++, 7000);
    cleanup(() => clearInterval(internal));
  });

  return (
    <>
      <section class="main-container">
        <img src="/public/comingSoon.png" alt="landing" />
      </section>
    </>
  );
});

// export const head: DocumentHead = {
//   title: 'Qwik Flower',
// };
