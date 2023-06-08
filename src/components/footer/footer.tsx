import { component$ } from "@builder.io/qwik";

export default component$(() => {

	return (
    <footer
      class="flex flex-col sm:flex-row justify-around w-full
      bg-gradient-to-r from-[#352B7A] to-[#45AFDD]
      p-4 h-auto"
    >
      <div class="items-center">
        <img src="/public/images/logo_krazee.svg" alt="logo_krazee" />
        <h2 class="text-white">
          Krazee Lab, LLC / Todos los derechos reservados.
        </h2>
      </div>
      <div>
        <h2 class="text-white font-bold italic">Services</h2>
        <h2 class="text-white">Marketing Digital</h2>
        <h2 class="text-white">Diseño Gráfico</h2>
        <h2 class="text-white">Diseño UI/UX</h2>
        <h2 class="text-white">Desarrollo Web</h2>
      </div>
      <div>
        <h2 class="text-white font-bold italic">Other Services</h2>
        <h2 class="text-white">Portafolio</h2>
        <h2 class="text-white">Blog</h2>
        <h2 class="text-white">Store</h2>
      </div>
      <div>
        <h2 class="text-white font-bold italic">Contactos</h2>
        <div class="flex flex-col justify-around mr-10 text-white sm:items-center">
          <a class="font-ligh" href="mailto:krazeelab@gmail.com">
            Hello@krazeelab.com
          </a>
          <div class="flex flex-row items-center justify-between mr-10 text-white">
            <a href="https://www.tiktok.com/@krazeelab">
              <i class="fa-brands fa-tiktok p-2 mr-2 bg-black rounded-full"></i>
            </a>
            <a href="https://twitter.com/KrazeeLab">
              <i class="fa-brands fa-twitter p-2 mr-2 bg-black rounded-full "></i>
            </a>
            <a href="https://www.instagram.com/krazeelab/">
              <i class="fa-brands fa-instagram p-2 bg-black rounded-full "></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
})