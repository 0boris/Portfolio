<script lang="ts">
  import { tweened } from "svelte/motion";
  import { cubicInOut } from "svelte/easing";
  import Person from "$lib/icons/Person.svelte";
  import { blur, scale } from "svelte/transition";

  let isDivVisible = false;
  let cs2Hours

  const ageWidth = tweened(0, { duration: 1000, easing: cubicInOut });
  const languagesWidth = tweened(0, { duration: 1000, easing: cubicInOut });
  const hoursWidth = tweened(0, { duration: 1000, easing: cubicInOut });

  const renderDiv = () => {
    isDivVisible = true;
  };

  const fetchHours = () => {
    const response = fetch("https://api-web.0boris.xyz/getHours", { mode: "no-cors" })
    response.then(res => res.json()).then(data => {
      cs2Hours = data.hoursPlayed;
    }).catch(error => {
      console.error('Error fetching hours:', error);
    });
  }

  $: if (isDivVisible) {
    ageWidth.set(77);
    languagesWidth.set(40);
    hoursWidth.set(52.8)
  }
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
        transition:scale={{ start: 0.5, duration: 400, delay: 200 }}
      >
        <div
          class="bg-[#191919] text-[#DEDEDE] mb-32 px-6 py-4 rounded-xl flex flex-col gap-4"
        >
          <div class="flex flex-row">
            <div class="h-6 w-6 mr-1.5">
              <Person />
            </div>
            <span class="font-[750]">Character</span>
          </div>
          <div class="flex">
            <div class="space-y-2">
              <!-- PART 1 : Sliders -->
              <span class="text-xs opacity-40"> PLAYER PROPERTIES </span>
              <div class="flex flex-col gap-2">
                <!-- Slider 1: Age -->
                <div
                  class="w-64 rounded-lg bg-gradient-to-b from-[#23593b] to-[#19271f] border border-[#23593b] flex items-center"
                >
                  <div
                    class="py-2 h-[40px] px-4 rounded-lg bg-gradient-to-b from-[#2c985d] to-[#236540] text-white/70 font-semibold"
                    style="width: {$ageWidth}%"
                  >
                    <span transition:blur={{ duration: 300, delay: 400 }}
                      >13</span
                    >
                    <span
                      transition:blur={{ duration: 300, delay: 475 }}
                      class="opacity-30">/ 18</span
                    >
                  </div>
                  <span class="mx-auto opacity-40">Age</span>
                </div>
                <!-- End of Slider 1: Age -->

                <!-- Slider 2: Languages Spoken -->
                <div
                  class="w-64 rounded-lg bg-gradient-to-b from-[#202d39] to-[#1b232a] border border-[#2a4c69] flex items-center"
                >
                  <div
                    class="py-2 px-4 h-[40px] rounded-lg bg-gradient-to-b from-[#3b7eb7] to-[#2c5478] text-white/50 font-semibold"
                    style="width: {$languagesWidth}%"
                  >
                    <span transition:blur={{ duration: 300, delay: 400 }}
                      >4</span
                    >
                    <span
                      transition:blur={{ duration: 300, delay: 475 }}
                      class="opacity-30">/ 10</span
                    >
                  </div>
                  <span class="mx-auto opacity-40">Languages</span>
                </div>
                <!-- End of Slider 2: Languages Spoken -->

                <!-- Slider 3: Hours of CS2 -->
                <div
                class="w-64 rounded-lg bg-gradient-to-b from-[#202d39] to-[#1b232a] border border-[#2a4c69] flex items-center"
              >
                <div
                  class="py-2 px-4 h-[40px] rounded-lg bg-gradient-to-b from-[#3b7eb7] to-[#2c5478] text-white/50 font-semibold"
                  style="width: {$hoursWidth}%"
                >
                  <span transition:blur={{ duration: 300, delay: 400 }}
                    >4</span
                  >
                  <span
                    transition:blur={{ duration: 300, delay: 475 }}
                    class="opacity-30">/ 10</span
                  >
                </div>
                <span class="mx-auto opacity-40">Languages</span>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  {/if}
</div>
