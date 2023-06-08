import { component$ } from "@builder.io/qwik";
import ColorBar from "../color-bar/color-bar";

export default component$(() => {
	return (
    <>
      <section class="flex flex-col mt-10 text-white mx-auto w-3/4">
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
        <div class="flex items-start mb-5 sm:justify-center">
          <img
            class="w-1/2 sm:w-1/4 animate-pulse"
            src="/images/numbers/01.svg"
            alt="01"
          />
          <div
            class="w-full text-right text-xl mr-10
						sm:w-1/4"
          >
            Si crees que somos una agencia más de diseño, web y marketing,
            pues... Te demostraremos lo KRAZEE que somos para superar las
            expectativas de tus ideas.
          </div>
        </div>
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
        <div class="flex flex-col self-center text-right sm:text-center mt-10 sm:self-center">
          <p class="text-3xl">Lo convencional está bien,</p>
          <p class="font-gothic text-7xl">aunque</p>
          <p class="font-gothic text-7xl">NOSOTROS</p>
          <p class="font-gothic text-7xl">haremos</p>
          <p class="font-zeyada text-5xl">que tu marca sea</p>
          <p class="font-tourney text-5xl sm:text-6xl">DISRUPTIVA</p>
        </div>
      </section>
    </>
  );
})