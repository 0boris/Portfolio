<script>
  /* Imports for animations. */
  import { fly, blur } from "svelte/transition";

  import VideoPlayer from "./VideoPlayer.svelte";
  import Intro from "./cards/Intro.svelte";
  import Explained from "./cards/Explained.svelte";
  import Contact from "./cards/Contact.svelte";
  import ContactCards from "./cards/ContactCards.svelte";

  /* Logic to show the div */
  let isDivVisible = false;

  const renderDiv = () => {
    isDivVisible = true;
  };
</script>

<div
  on:pointerenter={renderDiv}
  class="bg-black/10 text-white h-full w-full p-4 rounded-2xl border-2 border-white/10 backdrop-blur-lg bg-mesh bg-cover"
>
  {#if isDivVisible}
  <div class="flex flex-row">
    <div class="w-full lg:w-4/6 p-0 lg:p-5">
      <div
        class="text-white text-md lg:text-2xl font-bold mb-2 lg:mb-4"
        transition:fly={{ y: 200, duration: 500, delay: 300 }}
      >
        hey, welcome to my personal website.
      </div>
      <span
        class="text-white text-xs lg:text-lg opacity-50 mb-8 lg:mb-20"
        transition:fly={{ y: 500, duration: 500, delay: 400 }}
      >
        Here's what's going on here.
      </span>

      <div
        transition:blur={{ duration: 1000, delay: 500 }}
        class="text-white text-sm lg:text-lg mt-6 font-medium grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        <div class="row-span-1 col-span-1">
          <Intro />
        </div>
        <div class="row-span-1 col-span-1 md:row-start-2">
          <Explained />
        </div>
        <div class="row-span-1 col-span-1 md:row-start-1 md:col-start-2">
          <div class="space-y-4">
            <Contact />

          </div>
        </div>
      </div>
    </div>
    <div class="hidden lg:flex fixed right-12 top-6">
      <VideoPlayer />
    </div>
  </div>
  {/if}
</div>