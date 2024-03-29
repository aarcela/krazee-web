import { component$} from "@builder.io/qwik";
import ColorBar from "../color-bar/color-bar";

interface AboutProps {
  text: string;
  title: string;
}

export default component$((props: AboutProps) => {

  return (
    <section class="justify-center flex flex-col bg-black mt-10 text-white  content-center mx-auto sm:w-3/4">
      <div class="flex flex-row align-middle w-1/4 ml-5 sm:ml-10">
        <img
          class="w-5 h-5 self-center animate-pulse"
          src="images/circle.png"
          alt="circle"
        />
        <h2
          class="italic decoration-cyan-500  decoration-dashed decoration-2
				self-start text-2xl ml-5"
        >
          {props.title}
          <ColorBar />
        </h2>
      </div>
      <div class="self-end w-1/2 sm:w-1/4 text-right text-xl mr-10 sm:text-center mt-20 sm:self-center">
        {props.text}
      </div>
    </section>
  );
});
