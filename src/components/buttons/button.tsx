import { component$, useStylesScoped$ } from "@builder.io/qwik";
// import { Link } from "@builder.io/qwik-city";
import styles from "./button.css?inline";

interface ButtonProps {
  text: string;
  link: string;
}

export default component$((props: ButtonProps) => {
  useStylesScoped$(styles);

  return (
    <div
      class="font-light text-white text-center
		bg-gradient-to-r from-lime-200 to-cyan-500 w-1/4 
		rounded-full
		p-2
		m-auto
		border-solid border-white border-2"
    >
      <a href={props.link}>
        <button>{props.text}</button>
      </a>
    </div>
  );
});
