import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import About from "~/components/about/about";
import Button from "~/components/buttons/button";
import ColorBar from "~/components/color-bar/color-bar";
import Services from "~/components/services/services";

export default component$(() => {
  return (
    <>
      <section
        class="min-h-screen bg-cover bg-no-repeat bg-center
          bg-mobile-bg
          sm:bg-main-bg"
      ></section>
      <Services />
      <section id="about">
        <img class="object-fill" src="/images/lines_3.svg" alt="01" />
      </section>
      <section class="flex flex-col pt-10 text-white mx-auto sm:w-3/4">
        <div class="flex flex-row ml-5">
          <img
            class="w-5 h-5 self-center animate-pulse"
            src="images/circle.png"
            alt="circle"
          />
          <h2 class="italic mt-10 self-start ml-5 text-2xl mb-10">
            Quienes somos?
            <ColorBar />
          </h2>
        </div>
        <div class="flex sm:flex-row justify-center ">
          <img
            class="self-start w-full sm:w-1/4 animate-pulse"
            src="/images/numbers/01.svg"
            alt="01"
          />
          <div
            class="self-end w-full sm:w text-right text-xl mr-10
          sm:w-1/4"
          >
            Si crees que somos una agencia más de diseño, web y marketing,
            pues... Te demostraremos lo KRAZEE que somos para superar las
            expectativas de tus ideas.
          </div>
        </div>
      </section>
      <section class="flex flex-col bg-black mt-10 text-white  mx-auto sm:w-3/4">
        <div class="flex flex-row ml-5">
          <img
            class="w-5 h-5 self-center animate-pulse"
            src="images/circle.png"
            alt="circle"
          />
          <h2
            class="italic decoration-cyan-500  decoration-dashed decoration-2
				self-start text-2xl ml-5"
          >
            Filosofía
            <ColorBar />
          </h2>
        </div>
        <div class="self-center w-1/2 sm:w-1/4 text-right mr-10 sm:text-center mt-20 sm:self-center">
          <p class="text-3xl">Lo convencional está bien, </p>
          <p class="font-gothic text-7xl">aunque NOSOTROS haremos</p>
          <p class="font-zeyada text-5xl">que tu marca sea</p>
          <p class="font-tourney text-5xl sm:text-6xl">DISRUPTIVA</p>
        </div>
      </section>

      <About
        text="Nuestro nombre KRAZEE surge de la locura que sentimos por lo que nos
          gusta y es ese mismo sentimiento el que transmitiremos a tu marca. Nos
          consideremos un laboratorio por experimentar cosas nuevas sin los
          prejuicios ni el “qué dirán”."
        title="Nosotros"
      />
      <About
        text="Somos vivo ejemplo de la actualización constante del mundo. Contamos
          con presencia física en Madrid y Caracas, sin embargo, estamos lo
          suficientemente krazee para trabajar contigo así estés del otro lado
          del mundo."
        title="Lifestyle"
      />
      <section
        id="job"
        class="flex flex-col bg-black pt-10 text-white  w-full text-center"
      >
        <img
          class="w-full self-center
        sm:w-1/3 animate-pulse"
          src="/images/remoto.svg"
          alt="remoto"
        />
        <img
          class=" w-full bottom-1 sm:hidden"
          src="/images/remoto_lines.png"
          alt="remoto_lines"
        />
        <h2 class=" font-bold self-center text-4xl bottom-0">Work with us</h2>
      </section>
      <section class="flex flex-col bg-black pt-20 text-white text-center w-full">
        <h2 class="self-center text-xl font-light">
          Estamos en constante crecimiento tú.
        </h2>
        <h2 class="self-center text-xl font-light pt-4">
          y por eso buscamos gente KRAZEE como tú.
        </h2>
        <h2 class="self-center text-xl font-light pt-4">
          Si quieres formar parte de Krazee lab, envíanos todos tus datos.
        </h2>
        <div class="mt-10">
          <Button
            text="Here"
            link="https://docs.google.com/forms/d/e/1FAIpQLSdcjo6NOoq2eO23pqSTQAHPoLwKCgn0soKwp5X2oH9IbZ7Fmg/viewform?usp=sf_link"
          />
        </div>
        <img class=" w-full" src="/images/lines_4.svg" alt="remoto_lines" />
      </section>
      <section
        id="contact"
        class="flex flex-col bg-black pt-20 text-white pb-10 justify-center content-center"
      >
        <div class="flex flex-col text-center sm:self-center mr-5 sm:mr-0">
          <h2 class="font-bold self-end text-4xl mb-20">Contacts</h2>
          <div class="self-end text-right">
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
          <div class="self-end text-right">
            <h2 class="text-l font-light pt-4">+1 786 705-3222</h2>
            <h2 class="text-l font-light pt-4">+34 625 82 89 09</h2>
            <h2 class="text-l  font-light pt-4">
              <a href="mailto:krazeelab@gmail.com">Hello@krazeelab.com</a>
            </h2>
          </div>
          <div class="self-end text-right text-l pt-4 sm:w-1/3">
            Si prefieres explicarnos más en detalle, sobre qué servicio
            necesitas que te ayudemos… Dale click al botón y deja volar tu
            imaginación .
          </div>
          <div class="text-right mt-5">
            <Button
              text="Contratar"
              link="https://docs.google.com/forms/d/e/1FAIpQLSdwEGbHBpfasvIxEH3-KtdPrMGsU6cP8wXiUuu4A6SospJFsQ/viewform?usp=sf_link"
            ></Button>
          </div>
        </div>
      </section>
    </>
  );
});

export const head: DocumentHead = {
  title: "Krazee Lab",
  meta: [
    {
      name: "description",
      content: "Krazee lab web site",
    },
  ],
};
