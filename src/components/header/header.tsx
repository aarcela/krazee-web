import { component$, useClientEffect$, useStylesScoped$, $, useSignal } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
// import { QwikLogo } from '../icons/qwik';
import styles from './header.css?inline';
import Mobile_menu from '../mobile_menu';

export default component$(() => {

  useStylesScoped$(styles);
  const showMenuBar = useSignal(false);
  const clickShowMenuBar = $(() => {
    showMenuBar.value = !showMenuBar.value;
  });

  useClientEffect$(() => {

    let prevScrollpos = window.pageYOffset;
    const header = document.getElementById("header")!;
    window.onscroll = function () {
      const currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        header.style.visibility = "visible";
      } else {
        header.style.visibility = "hidden";
      }
      prevScrollpos = currentScrollPos;
    };
  });
    
  return (
    <>
      <header
        id="header"
        class="hidden w-screen sm:flex justify-evenly fixed items-center bg-gradient-to-b from-[#352B7A]/50 to-[#46AFDA]/50"
      >
        <Link class="p-12" href="/">
          <img src="/images/logo_krazee.svg" alt="mini_logo" />
        </Link>
        <div class="container justify-evenly flex items-center text-white">
          <button onClick$={() => window.scrollTo(0, 0)}>Home</button>
          <button
            onClick$={() =>
              document
                .getElementById("services")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Services
          </button>
          <button
            onClick$={() =>
              document
                .getElementById("about")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            About us
          </button>
          <button
            onClick$={() =>
              document
                .getElementById("job")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Jobs
          </button>
          <button
            onClick$={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Contacts
          </button>
        </div>
        <div class="flex items-center justify-around mr-10 text-white">
          <a href="https://www.tiktok.com/@krazeelab">
            <i class="fa-brands fa-tiktok p-4 border-white rounded"></i>
          </a>
          <a href="https://twitter.com/KrazeeLab">
            <i class="fa-brands fa-twitter p-4 "></i>
          </a>
          <a href="https://www.instagram.com/krazeelab/">
            <i class="fa-brands fa-instagram p-4 "></i>
          </a>
        </div>
      </header>
      <header class="flex fixed w-full justify-end sm:hidden">
          <img
            class="m-3"
            src="/images/mobile/botton_menu_mobile.png"
            alt="mini_logo"
            onClick$={clickShowMenuBar}
          />
      </header>
      {showMenuBar.value && <Mobile_menu  hide$={clickShowMenuBar}/>}
    </>
  );
});

