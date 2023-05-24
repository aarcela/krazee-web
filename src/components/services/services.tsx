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
              <div class="sm:hidden mt-5 p-1 bg-gradient-to-r from-yellow-500 to-red-700 bg-black rounded-full  ">
                <select
                  onChange$={(e) => {
                    state.count = e.target.value;
                  }}
                  class="bg-black rounded-full w-full"
                  name="services"
                >
                  <option selected value={1}>
                    &nbsp; Marketing digital
                  </option>
                  <option value={2}>&nbsp; Asesoría/Consultoría</option>
                  <option value={3}>&nbsp; Diseño gráfico</option>
                  <option value={4}>&nbsp; Diseño UX/UI</option>
                  <option value={5}>&nbsp; Desarrollo web/mobile</option>
                </select>
              </div>
              <li class="hidden mt-5 list-none sm:block">
                <ul
                  class={
                    state.count === "1"
                      ? "p-1 bg-gradient-to-r from-yellow-500 to-red-700 rounded-full "
                      : ""
                  }
                  onClick$={() => {
                    state.count = "1";
                  }}
                >
                  &nbsp; Marketing digital
                </ul>
                <ul
                  class={
                    state.count === "2"
                      ? "p-1 bg-gradient-to-r from-yellow-500 to-red-700 rounded-full "
                      : ""
                  }
                  onClick$={() => {
                    state.count = "2";
                  }}
                >
                  &nbsp; Asesoría/Consultoría
                </ul>
                <ul
                  class={
                    state.count === "3"
                      ? "p-1 bg-gradient-to-r from-yellow-500 to-red-700 rounded-full "
                      : ""
                  }
                  onClick$={() => {
                    state.count = "3";
                  }}
                >
                  &nbsp; Diseño gráfico
                </ul>
                <ul
                  class={
                    state.count === "4"
                      ? "p-1 bg-gradient-to-r from-yellow-500 to-red-700 rounded-full "
                      : ""
                  }
                  onClick$={() => {
                    state.count = "4";
                  }}
                >
                  &nbsp; Diseño UX/UI
                </ul>
                <ul
                  class={
                    state.count === "5"
                      ? "p-1 bg-gradient-to-r from-yellow-500 to-red-700 rounded-full "
                      : ""
                  }
                  onClick$={() => {
                    state.count = "5";
                  }}
                >
                  &nbsp; Desarrollo web/mobile
                </ul>
              </li>
            </div>
            <div class="sm:w-2/3 mt-10  font-regular p-5 sm:p-0 sm:border-l-white text-justify">
              {state.count === "1" && (
                <>
                  <h2>
                    Ayudamos a las empresas a aumentar su presencia en línea y a
                    conectarse con su público objetivo a través de plataformas
                    de las redes sociales más populares, como Facebook,
                    Instagram, Twitter, LinkedIn, entre otras. Así mismo,
                    ofrecemos una variedad de servicios para la gestión de redes
                    sociales que incluyen:
                  </h2>
                  <ul class="list-disc p-5 text-2xl">
                    <li>
                      Creación y mantenimiento de perfiles de redes sociales
                    </li>
                    <li>Creación y publicación de contenido</li>
                    <li>Interacción con los seguidores</li>
                    <li>Análisis de datos y métricas</li>
                    <li>Gestión de publicidad en redes sociales</li>
                    <li>Paid media</li>
                  </ul>
                </>
              )}
              {state.count === "2" && (
                <>
                  <h2>
                    Nuestro objetivo es apoyar a las empresas a desarrollar
                    estrategias efectivas que les permitan alcanzar sus
                    objetivos de negocio y aumentar su presencia tanto online
                    como offline. Nuestras asesorías y consultorías incluyen
                    entre otras cosas:
                  </h2>
                  <ul class="list-disc p-5 text-2xl">
                    <li>
                      Análisis y evaluación de la estrategia de marketing actual
                    </li>
                    <li>Desarrollo de estrategias de marketing</li>
                    <li>Diseño y desarrollo de la imagen de marca</li>
                    <li>Desarrollo de campañas de publicidad y promoción</li>
                    <li>Evaluación y análisis de resultados</li>
                  </ul>
                </>
              )}
              {state.count === "3" && (
                <>
                  <h2>
                    Diseños personalizados para ayudar a las empresas a crear
                    una identidad visual única y cohesiva que refleje sus
                    valores y objetivos de negocio.
                  </h2>
                  <ul class="list-disc p-5 text-2xl">
                    <li>Branding</li>
                    <li>Diseño de logotipos</li>
                    <li>Diseño de material impreso</li>
                    <li>Diseño de imagen digital</li>
                    <li>Diseño de packaging</li>
                  </ul>
                </>
              )}
              {state.count === "4" && (
                <>
                  <h2>
                    Ofrecemos servicios de diseño de experiencia de usuario (UX)
                    y diseño de interfaz de usuario (UI) para ayudar a las
                    empresas a crear interfaces digitales efectivas y atractivas
                    que brinden una experiencia de usuario óptima.
                  </h2>
                  <ul class="list-disc p-5 text-2xl">
                    <li>Investigación y análisis de usuario</li>
                    <li>Diseño de experiencia de usuario</li>
                    <li>Diseño de interfaz de usuario</li>
                    <li>Desarrollo de prototipos interactivos</li>
                    <li>Optimización de la interfaz</li>
                  </ul>
                </>
              )}
              {state.count === "5" && (
                <>
                  <h2>
                    Ofrecemos servicios de desarrollo web y móvil para ayudar a
                    las empresas a crear sitios web y aplicaciones móviles
                    atractivas, funcionales y optimizadas para la experiencia
                    del usuario. Nuestros servicios de desarrollo web y móvil
                    incluyen:
                  </h2>
                  <ul class="list-disc p-5 text-2xl">
                    <li>Diseño web</li>
                    <li>Desarrollo web</li>
                    <li>Diseño de aplicaciones móviles</li>
                    <li>Desarrollo de aplicaciones móviles</li>
                    <li>Integración y optimización</li>
                  </ul>
                </>
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