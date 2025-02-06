<script lang="ts">
  /* Imports for animations. */
  import { fly, blur } from "svelte/transition";

  import VideoPlayer from "./cards/VideoPlayer.svelte";
  import Intro from "./cards/Intro.svelte";
  import Explained from "./cards/Explained.svelte";
  import Contact from "./cards/Contact.svelte";

  /* Logic to show the div */
  let isDivVisible = false;

  const renderDiv = () => {
    isDivVisible = true;
  };
</script>

<div on:pointerenter={renderDiv} class="text-white h-full w-full">
  {#if isDivVisible}
    <div class="flex flex-row">
      <div class="w-full p-0 lg:p-5">
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

        <div class="w-full">
          <div
            class="text-white text-sm lg:text-lg mt-6 font-medium grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            <div
              transition:blur={{ duration: 700, delay: 500 }}
              class="row-span-1 col-span-1"
            >
              <Intro />
            </div>
            <div
              transition:fly={{ x: -400, duration: 800, delay: 800 }}
              class="row-span-1 col-span-1 md:row-start-2"
            >
              <Explained />
            </div>
            <div class="row-span-2 col-span-1" transition:fly={{ x: 250, duration: 500, delay: 1250 }}>
              <VideoPlayer />
            </div>
          </div>
        </div>
      </div>
    </div>
  {/if}
</div>
