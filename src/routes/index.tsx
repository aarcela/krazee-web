import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <div class="bg-cover bg-center min-h-screen">
      <video
        autoPlay
        muted
        loop
        id="myVideo"
        class="absolute z-10 w-auto min-w-full min-h-full max-w-none"
      >
        <source id="background-video" src="/bg_video.mp4" type="video/mp4" />
      </video>
      {/* <img src="/public/comingSoon.png" alt="landing" class="object-cover" /> */}
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Krazee Lab',
  meta: [
    {
      name: 'description',
      content: 'Krazee lab web site',
    },
  ],
};


