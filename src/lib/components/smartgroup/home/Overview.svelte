<script lang="ts">
  /* Imports for animations. */
  import { fly, scale, blur } from "svelte/transition";

  import Intro from "./cards/Intro.svelte";
  import QuickInfo from "./cards/QuickInfo.svelte";


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
          class="text-white text-md lg:text-3xl font-bold mb-2"
          transition:blur={{ duration: 500, delay: 300 }}
        >
          Hey there, visitor.
        </div>
        <span
          class="text-white text-xs lg:text-lg opacity-50 mb-8 lg:mb-20"
          transition:blur={{ duration: 500, delay: 400 }}
        >
          How are you doing today?
        </span>

        <div class="w-full">
          <div
            class="text-white text-sm lg:text-lg mt-6 font-medium space-y-4"
          >
            <div
                transition:scale={{ start: 1.1, duration: 700, delay: 500 }}
              class="row-span-1 col-span-1"
            >
              <Intro />
            </div>
            <div transition:scale={{ start: 1.05, duration: 500, delay: 600 }} class="row-span-2 col-span-1">
              <QuickInfo />
            </div>
          </div>
        </div>
      </div>
    </div>
  {/if}
</div>
