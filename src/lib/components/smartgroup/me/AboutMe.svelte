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
  function handleDrag(
    event: MouseEvent,
    property: string,
    min: number,
    max: number,
  ) {
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
  function handleTouchDrag(
    event: TouchEvent,
    property: string,
    min: number,
    max: number,
  ) {
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
          class="bg-[#191919] text-[#DEDEDE] mb-32 px-6 py-4 rounded-xl flex flex-col"
          role="region"
          aria-labelledby="character-slider-region"
        >
          <div class="flex flex-row">
            <div class="h-6 w-6 mr-1.5">
              <Person />
            </div>
            <span class="font-[750]" id="character-slider-region"
              >Character</span
            >
          </div>
          <div class="flex flex-row gap-6">
            <div class="space-y-2">
              <!-- PART 1 : Sliders -->
              <span class="text-xs opacity-40"> PLAYER PROPERTIES </span>
              <div class="flex flex-col gap-2">
                <!-- Slider 1: Age -->
                <div
                  class="w-64 rounded-lg bg-gradient-to-b from-[#23593b] to-[#19271f] border border-[#23593b] flex items-center cursor-pointer relative"
                  role="slider"
                  aria-label="Age"
                  aria-valuemin="0"
                  aria-valuemax="18"
                  aria-valuenow={age}
                  tabindex="0"
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
                  <span
                    class="mx-auto opacity-40 absolute right-1 bottom-0 text-xs"
                    >Age</span
                  >
                </div>
                <!-- End of Slider 1: Age -->

                <!-- Slider 2: Languages Spoken -->
                <div
                  class="w-64 rounded-lg bg-gradient-to-b from-[#202d39] to-[#1b232a] border border-[#2a4c69] flex items-center cursor-pointer relative"
                  role="slider"
                  aria-label="Languages Spoken"
                  aria-valuemin="0"
                  aria-valuemax="10"
                  aria-valuenow={languages}
                  tabindex="0"
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
                  <span
                    class="mx-auto opacity-40 absolute right-1 bottom-0 text-xs"
                    >Languages</span
                  >
                </div>
                <!-- End of Slider 2: Languages Spoken -->

                <!-- Slider 3: Hours of CS2 -->
                <div
                  class="w-64 rounded-lg bg-gradient-to-b from-[#331c1c] to-[#271919] border border-[#5e2222] flex items-center cursor-pointer relative"
                  role="slider"
                  aria-label="CS2 Hours"
                  aria-valuemin="0"
                  aria-valuemax="1000"
                  aria-valuenow={hours}
                  tabindex="0"
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
                  <span
                    class="mx-auto opacity-40 absolute right-1 bottom-0 text-xs"
                    >CS2 Hours</span
                  >
                </div>
                <!-- End of Slider 3: Hours of CS2 -->

                <!-- Slider 4: School Hours (tbc) -->
                <div
                  class="w-64 rounded-lg bg-gradient-to-b from-[#3c3823] to-[#2c2a1d] border border-[#706632] flex items-center cursor-pointer relative"
                  role="slider"
                  aria-label="School Hours"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  aria-valuenow={school}
                  tabindex="0"
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
                  <span
                    class="mx-auto opacity-40 absolute right-1 bottom-0 text-xs"
                    >School Hours</span
                  >
                </div>
                <!-- End of Slider 4: School Hours -->
              </div>
            </div>
            <div class="space-y-2">
              <!-- PART 2: Socials -->
              <span class="text-xs opacity-40"> PLAYER ACTIONS </span>
              <div class="flex flex-col gap-2">
                <ul class="flex flex-row gap-2">
                  <li class="flex items-center p-2 rounded-lg border border-[#23272A] bg-[#454FBF]/30 h-10 w-10">
                    <svg
                      viewBox="0 0 64 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M40.575 0C39.9562 1.09866 39.4006 2.2352 38.8954 3.397C34.0967 2.67719 29.2096 2.67719 24.3982 3.397C23.9057 2.2352 23.3374 1.09866 22.7186 0C18.2104 0.770324 13.8157 2.12155 9.64839 4.02841C1.38951 16.2652 -0.845688 28.1863 0.265599 39.9432C5.10222 43.517 10.5197 46.2447 16.2909 47.9874C17.5916 46.2447 18.7407 44.3883 19.7257 42.4562C17.8568 41.7616 16.0509 40.8903 14.3208 39.88C14.7755 39.5517 15.2175 39.2107 15.6468 38.8824C25.7873 43.6559 37.5316 43.6559 47.6847 38.8824C48.1141 39.236 48.5561 39.577 49.0107 39.88C47.2806 40.9029 45.4748 41.7616 43.5931 42.4688C44.5781 44.4009 45.7273 46.2573 47.028 48C52.7991 46.2573 58.2167 43.5422 63.0533 39.9684C64.3666 26.3299 60.8055 14.5099 53.6452 4.04104C49.4905 2.13418 45.0959 0.782952 40.5876 0.0252565L40.575 0ZM21.1401 32.7072C18.0209 32.7072 15.4321 29.8785 15.4321 26.3804C15.4321 22.8824 17.9199 20.041 21.1275 20.041C24.3351 20.041 26.886 22.895 26.8354 26.3804C26.7849 29.8658 24.3224 32.7072 21.1401 32.7072ZM42.1788 32.7072C39.047 32.7072 36.4834 29.8785 36.4834 26.3804C36.4834 22.8824 38.9712 20.041 42.1788 20.041C45.3864 20.041 47.9246 22.895 47.8741 26.3804C47.8236 29.8658 45.3611 32.7072 42.1788 32.7072Z"
                        fill="white"
                      />
                    </svg>
                  </li>
                  <li class="p-2 rounded-lg bg-purple-500/70 h-10 w-10">d</li>
                  <li class="p-2 rounded-lg bg-purple-500/70 h-10 w-10">d</li>
                  <li class="p-2 rounded-lg bg-purple-500/70 h-10 w-10">d</li>
                </ul>
                <ul class="flex flex-row gap-2">
                  <li class="p-2 rounded-lg bg-purple-500/70 h-10 w-10">d</li>
                  <li class="p-2 rounded-lg bg-purple-500/70 h-10 w-10">d</li>
                  <li class="p-2 rounded-lg bg-purple-500/70 h-10 w-10">d</li>
                  <li class="p-2 rounded-lg bg-purple-500/70 h-10 w-10">d</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  {/if}
</div>
