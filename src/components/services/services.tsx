import { component$, useStore } from "@builder.io/qwik";
import Button from "../buttons/button";
import ColorBar from "../color-bar/color-bar";

// interface SizeInputProps {
//   value: number;
//   onInput$: PropFunction<(e: Event) => number>;
// }

export default component$(() => {
  const state = useStore({ count: '1' });
	return (
    <>
      <section id="services" class="flex flex-col justify-center	content-center">
        <div
          class="sm:w-3/4 text-center  text-white font-normal text-xl
        sm:mt-20 sm:self-center sm:text-3xl"
        >
          <div class="sm:flex sm:flex-row">
            <div class=" text-left m-5 sm:w-1/2">
              <h1>Podemos ayudarte con</h1>
              <ColorBar />
              <div class="mt-5 p-1 bg-gradient-to-r from-yellow-500 to-red-700 bg-black rounded-full  ">
                <select
                  onChange$={(e) => {
                    state.count = e.target.value;
                  }}
                  class="bg-black rounded-full w-full"
                  name="services"
                >
                  <option selected value={1}>
                    &nbsp; Gestión
                  </option>
                  <option value={2}>&nbsp; Asesoría y Consulta</option>
                  <option value={3}>&nbsp; Publicidad</option>
                </select>
              </div>
            </div>
            <div class="sm:w-2/3 mt-10  font-regular p-5 sm:p-0 sm:border-l-white text-justify">
              {state.count === "1" && (
                <h2>
                  Te ayudamos en como llevar y darle la mano a tus comunidades
                  virtuales, en programar tu contenido y en traducir cada una de
                  las interacciones en tus redes; si quieres
                </h2>
              )}
              {state.count === "2" && (
                <h2>
                  Si tú deseo y proyección es ser viral, aquí estamos para
                  mostrarte la estrategia y montarte en la ola de las
                  tendencias; si quieres mantenerte en el tiempo y ser
                  reconocido, también sabemos cómo.
                </h2>
              )}
              {state.count === "3" && (
                <h2>
                  Que si tienes que invertir en redes sociales? Of course My
                  Dear, aquí te mostramos dónde, cuánto, cómo y porqué.
                  Identidad de marca Tu tienes la idea, nosotros el arsenal
                  cerebral y Krazee para que el público se identifique con tu
                  producto o servicio.
                </h2>
              )}
            </div>
          </div>
        </div>
        <div class="mt-10 text-center">
          <Button
            text="Contratar"
            link=" https://docs.google.com/forms/d/1-dF0xKk66t-qi1nc6iSDFZxIPZri6uuXJkjF0UQLX2I/edit?ts=63f3ed40"
          />
        </div>
      </section>
    </>
  );
});