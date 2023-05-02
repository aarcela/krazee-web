import { component$ } from "@builder.io/qwik";

export default component$(() => {

	return (
    <footer
      class="flex flex-col sm:flex-row justify-around items-center w-full
		bg-gradient-to-r from-[#352B7A] to-[#45AFDD]
		h-36
		"
    >
      <h2 class="text-white">+00123456789</h2>
      <h2 class="text-white">+Hello@krazeelab.com</h2>
      <h2 class="text-white">Miami, Madrid, Caracas</h2>
    </footer>
  );
})