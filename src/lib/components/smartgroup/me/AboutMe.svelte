<script lang="ts">
  import Time from "$lib/components/Time.svelte";
  import Person from "$lib/icons/Person.svelte";
  /* Imports for animations. */
  import { blur } from "svelte/transition";

  /* Logic to show the div */
  let isDivVisible = false;

  const renderDiv = () => {
    isDivVisible = true;
  };
</script>

<div on:pointerenter={renderDiv} class="text-white h-full w-full">
  {#if isDivVisible}
    <div class="flex flex-row">
      <div class="w-full lg:w-4/6 p-0 lg:p-5">
        <div
          class="text-white text-md lg:text-2xl font-bold mb-2 lg:mb-4"
          transition:blur={{ duration: 500, delay: 300 }}
        >
          a little bit about me
        </div>
        <span
          class="text-white text-xs lg:text-lg opacity-50 mb-8 lg:mb-20"
          transition:blur={{ duration: 500, delay: 400 }}
        >
          learn more about me and who i am
        </span>
      </div>
    </div>
    <div>
      <div
        class="fixed bottom-0 left-0 right-0 flex justify-center items-end z-50"
      >
        <div
          class="bg-[#191919] text-[#DEDEDE] mb-32 px-6 py-4 rounded-xl flex flex-col gap-4"
        >
          <div class="flex flex-row">
            <div class="h-6 w-6 mr-1.5">
              <Person />
            </div>
            <span class="font-extrabold">Character</span>
          </div>
          <div class="flex">
            <div class="space-y-2">
              <!-- LocalPlayer part 1 - sliders -->
              <span class="text-xs opacity-40"> PLAYER PROPERTIES </span>
              <div class="flex flex-col gap-2">
                <div class="w-64 rounded-lg bg-gradient-to-b from-[#1d3327] to-[#19271f] border border-[#225639]">
                  <div class="py-2 px-4 w-52 bg-gradient-to-b from-[#2c985c] to-[#23593b] rounded-lg text-white/50 font-semibold">
                    Age: 13
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  {/if}
</div>
