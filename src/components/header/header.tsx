import { component$, useStylesScoped$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
// import { QwikLogo } from '../icons/qwik';
import styles from './header.css?inline';

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <header class="container flex sm w-screen justify-end fixed">
      <Link class="p-6" href='/'>
        <img src="/images/mobile/botton_menu_mobile.png" alt="mini_logo" />
      </Link>
    </header>
  );
});

