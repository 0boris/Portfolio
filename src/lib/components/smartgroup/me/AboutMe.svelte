<script lang="ts">
  import { tweened } from "svelte/motion";
  import { cubicInOut } from "svelte/easing";
  import Person from "$lib/icons/Person.svelte";
  import { blur, scale } from "svelte/transition";
  import { onMount } from "svelte";

  let isDivVisible = false;

  let age = 13;
  let languages = 4;
  let hours = 528;
  let school = 75; // New variable for the slider
  const ageWidth = tweened(0, { duration: 1000, easing: cubicInOut });
  const languagesWidth = tweened(0, { duration: 1000, easing: cubicInOut });
  const hoursWidth = tweened(0, { duration: 1000, easing: cubicInOut });
  const schoolWidth = tweened(0, { duration: 1000, easing: cubicInOut }); // New tweened variable

  const renderDiv = () => {
    isDivVisible = true;
  };

  $: if (isDivVisible) {
    ageWidth.set((age / 18) * 100);
    languagesWidth.set((languages / 10) * 100);
    hoursWidth.set((hours / 1000) * 100);
    schoolWidth.set((school / 100) * 100);
  }

  $: {
    ageWidth.set((age / 18) * 100);
    languagesWidth.set((languages / 10) * 100);
    hoursWidth.set((hours / 1000) * 100);
    schoolWidth.set((school / 100) * 100);
  }

  // dragging (took me a while to figure this out)
  function handleDrag(event: MouseEvent, property: string, min: number, max: number) {
    const progressBar = event.target as HTMLElement;
    const rect = progressBar.getBoundingClientRect();
    const offsetX = event.clientX - rect.left;
    const percentage = Math.max(0, Math.min(offsetX / rect.width, 1)); 

    let newValue = Math.round(percentage * (max - min) + min);
    if (property === "age") {
      age = newValue;
    } else if (property === "languages") {
      languages = newValue;
    } else if (property === "hours") {
      hours = newValue;
    } else if (property === "school") {
      school = newValue;
    }
  }

  // mobile support (why so hard)
  function handleTouchDrag(event: TouchEvent, property: string, min: number, max: number) {
    const progressBar = event.target as HTMLElement;
    const rect = progressBar.getBoundingClientRect();
    const offsetX = event.touches[0].clientX - rect.left;
    const percentage = Math.max(0, Math.min(offsetX / rect.width, 1));

    let newValue = Math.round(percentage * (max - min) + min);
    if (property === "age") {
      age = newValue;
    } else if (property === "languages") {
      languages = newValue;
    } else if (property === "hours") {
      hours = newValue;
    } else if (property === "school") {
      school = newValue;
    }
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
          role="region" aria-labelledby="character-slider-region"
        >
          <div class="flex flex-row">
            <div class="h-6 w-6 mr-1.5">
              <Person />
            </div>
            <span class="font-[750]" id="character-slider-region">Character</span>
          </div>
          <div class="flex">
            <div class="space-y-2">
              <!-- PART 1 : Sliders -->
              <span class="text-xs opacity-40"> PLAYER PROPERTIES </span>
              <div class="flex flex-col gap-2">
                <!-- Slider 1: Age -->
                <div
                  class="w-64 rounded-lg bg-gradient-to-b from-[#23593b] to-[#19271f] border border-[#23593b] flex items-center cursor-pointer relative"
                  role="slider" aria-label="Age" aria-valuemin="0" aria-valuemax="18" aria-valuenow={age} tabindex="0"
                  on:mousedown={(e) => handleDrag(e, "age", 0, 18)}
                  on:touchstart={(e) => handleTouchDrag(e, "age", 0, 18)}
                >
                  <div
                    class="py-2 h-[40px] px-4 rounded-lg bg-gradient-to-b from-[#2c985d] to-[#236540] text-white/70 font-semibold"
                    style="width: {$ageWidth}%"
                  >
                    <span transition:blur={{ duration: 300, delay: 400 }}
                      >{age}</span
                    >
                    <span
                      transition:blur={{ duration: 300, delay: 475 }}
                      class="opacity-30">/ 18</span
                    >
                  </div>
                  <span class="mx-auto opacity-40 absolute right-1 bottom-0 text-xs">Age</span>
                </div>
                <!-- End of Slider 1: Age -->

                <!-- Slider 2: Languages Spoken -->
                <div
                  class="w-64 rounded-lg bg-gradient-to-b from-[#202d39] to-[#1b232a] border border-[#2a4c69] flex items-center cursor-pointer relative"
                  role="slider" aria-label="Languages Spoken" aria-valuemin="0" aria-valuemax="10" aria-valuenow={languages} tabindex="0"
                  on:mousedown={(e) => handleDrag(e, "languages", 0, 10)}
                  on:touchstart={(e) => handleTouchDrag(e, "languages", 0, 10)}
                >
                  <div
                    class="py-2 px-4 h-[40px] rounded-lg bg-gradient-to-b from-[#3b7eb7] to-[#2c5478] text-white/50 font-semibold"
                    style="width: {$languagesWidth}%"
                  >
                    <span transition:blur={{ duration: 300, delay: 400 }}
                      >{languages}</span
                    >
                    <span
                      transition:blur={{ duration: 300, delay: 475 }}
                      class="opacity-30">/ 10</span
                    >
                  </div>
                  <span class="mx-auto opacity-40 absolute right-1 bottom-0 text-xs">Languages</span>
                </div>
                <!-- End of Slider 2: Languages Spoken -->

                <!-- Slider 3: Hours of CS2 -->
                <div
                  class="w-64 rounded-lg bg-gradient-to-b from-[#331c1c] to-[#271919] border border-[#5e2222] flex items-center cursor-pointer relative"
                  role="slider" aria-label="CS2 Hours" aria-valuemin="0" aria-valuemax="1000" aria-valuenow={hours} tabindex="0"
                  on:mousedown={(e) => handleDrag(e, "hours", 0, 1000)}
                  on:touchstart={(e) => handleTouchDrag(e, "hours", 0, 1000)}
                >
                  <div
                    class="py-2 px-4 h-[40px] rounded-lg bg-gradient-to-b from-[#b02d2d] to-[#732323] text-white/50 font-semibold"
                    style="width: {$hoursWidth}%"
                  >
                    <span transition:blur={{ duration: 300, delay: 400 }}
                      >{hours}</span
                    >
                    <span
                      transition:blur={{ duration: 300, delay: 475 }}
                      class="opacity-30">/ 1000</span
                    >
                  </div>
                  <span class="mx-auto opacity-40 absolute right-1 bottom-0 text-xs">CS2 Hours</span>
                </div>
                <!-- End of Slider 3: Hours of CS2 -->

                <!-- Slider 4: School Hours (tbc) -->
                <div
                  class="w-64 rounded-lg bg-gradient-to-b from-[#3c3823] to-[#2c2a1d] border border-[#706632] flex items-center cursor-pointer relative"
                  role="slider" aria-label="School Hours" aria-valuemin="0" aria-valuemax="100" aria-valuenow={school} tabindex="0"
                  on:mousedown={(e) => handleDrag(e, "school", 0, 100)}
                  on:touchstart={(e) => handleTouchDrag(e, "school", 0, 100)}
                >
                  <div
                    class="py-2 px-4 h-[40px] rounded-lg bg-gradient-to-b from-[#c6b24b] to-[#807435] text-white/50 font-semibold"
                    style="width: {$schoolWidth}%"
                  >
                    <span transition:blur={{ duration: 300, delay: 400 }}
                      >{school}</span
                    >
                    <span
                      transition:blur={{ duration: 300, delay: 475 }}
                      class="opacity-30">/ 100</span
                    >
                  </div>
                  <span class="mx-auto opacity-40 absolute right-1 bottom-0 text-xs">School Hours</span>
                </div>
                <!-- End of Slider 4: School Hours -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  {/if}
</div>
