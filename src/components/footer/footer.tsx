import { component$ } from "@builder.io/qwik";

export default component$(() => {

	return (
    <footer
      class="flex flex-col sm:flex-row justify-around items-center w-full
		bg-gradient-to-r from-[#352B7A] to-[#45AFDD]
		h-36
		"
    >
      <div>
        <h2 class="text-white">+1 (786) 705-3222</h2>
        <h2 class="text-white">+34 625 82 89 09</h2>
      </div>
      <h2 class="text-white">hello@krazeelab.com</h2>
      <h2 class="text-white">Caracas, Madrid, Miami</h2>
    </footer>
  );
})