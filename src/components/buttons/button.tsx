import { component$, useStylesScoped$ } from "@builder.io/qwik";
// import { Link } from "@builder.io/qwik-city";
import styles from "./button.css?inline";

interface ButtonProps {
  text: string;
}

export default component$((props: ButtonProps) => {
  useStylesScoped$(styles);

  return (
    <div
      class="font-light text-white text-center
		bg-gradient-to-r from-lime-200 to-cyan-500 w-1/3 
		rounded-full
		p-2
		m-auto
		border-solid border-white border-2"
    >
      <a href="https://docs.google.com/forms/d/1-dF0xKk66t-qi1nc6iSDFZxIPZri6uuXJkjF0UQLX2I/edit?ts=63f3ed40">
        <button>{props.text}</button>
      </a>
    </div>
  );
});
