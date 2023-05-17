import { component$, $, PropFunction } from "@builder.io/qwik";

interface MyComponentProps {
  hide$: PropFunction<(value: boolean) => void>;
}

export default component$((props: MyComponentProps) => {
  const hideMenuBar = $(() => {
    props.hide$(false);
  });

  return (
    <>
      <section class="ease-in  sm:hidden w-1/3 bg-mobile-menu-bg fixed h-screen right-0">
        <div
          class="container justify-around flex flex-col items-center text-white h-screen text-xl"
          onClick$={hideMenuBar}
        >
          <button onClick$={() => window.scrollTo(0, 0)}>Home</button>
          <button
            onClick$={() =>
              document
                .getElementById("services")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Services
          </button>
          <button
            onClick$={() =>
              document
                .getElementById("about")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            About us
          </button>
          <button
            onClick$={() =>
              document
                .getElementById("job")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Jobs
          </button>
          <button
            onClick$={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Contacts
          </button>
          <img
            class="self-center w-1/2"
            src="/images/logo_krazee.svg"
            alt="01"
          />
        </div>
      </section>
    </>
  );
});