<script lang="ts">
  import { tweened } from "svelte/motion";
  import { cubicInOut } from "svelte/easing";
  import Person from "$lib/icons/Person.svelte";
  import { blur, scale } from "svelte/transition";
  import NumberFlow from '@number-flow/svelte'

  let isDivVisible = false;

  let age = 13;
  let languages = 4;
  let hours = 531;
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
    max: number
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
    max: number
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
                      >
                      <NumberFlow value={age} />
                      </span
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
                      ><NumberFlow value={languages} /></span
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
                      > <NumberFlow value={hours} /> </span
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
                      > <NumberFlow value={school} /> </span
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
              <span class="text-xs opacity-40"> PLAYER SOCIALS </span>
              <div class="flex flex-col gap-2">
                <ul class="flex flex-row gap-2">
                  <button
                    aria-label="Discord"
                    on:click={() =>
                      (window.location.href =
                        "https://discord.com/users/991742998025089106")}
                    class="p-2 rounded-lg transition-all border border-[#454FBF] bg-[#454FBF]/20 focus:bg-[#454FBF] h-10 w-10"
                  >
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
                  </button>
                  <button
                    aria-label="Telegram"
                    on:click={() =>
                      (window.location.href =
                        "https://t.me/thebosmanov")}
                    class="p-2 rounded-lg transition-all border border-white/70 bg-white/20 focus:bg-white h-10 w-10"
                  >
                    <svg
                      class="h-full"
                      viewBox="0 0 1000 1000"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                    >
                      <defs>
                        <linearGradient
                          x1="50%"
                          y1="0%"
                          x2="50%"
                          y2="99.2583404%"
                          id="linearGradient-1"
                        >
                          <stop stop-color="#2AABEE" offset="0%"></stop>
                          <stop stop-color="#229ED9" offset="100%"></stop>
                        </linearGradient>
                      </defs>
                      <g
                        id="Artboard"
                        stroke="none"
                        stroke-width="1"
                        fill="none"
                        fill-rule="evenodd"
                      >
                        <circle
                          id="Oval"
                          fill="url(#linearGradient-1)"
                          cx="500"
                          cy="500"
                          r="500"
                        ></circle>
                        <path
                          d="M226.328419,494.722069 C372.088573,431.216685 469.284839,389.350049 517.917216,369.122161 C656.772535,311.36743 685.625481,301.334815 704.431427,301.003532 C708.567621,300.93067 717.815839,301.955743 723.806446,306.816707 C728.864797,310.92121 730.256552,316.46581 730.922551,320.357329 C731.588551,324.248848 732.417879,333.113828 731.758626,340.040666 C724.234007,419.102486 691.675104,610.964674 675.110982,699.515267 C668.10208,736.984342 654.301336,749.547532 640.940618,750.777006 C611.904684,753.448938 589.856115,731.588035 561.733393,713.153237 C517.726886,684.306416 492.866009,666.349181 450.150074,638.200013 C400.78442,605.66878 432.786119,587.789048 460.919462,558.568563 C468.282091,550.921423 596.21508,434.556479 598.691227,424.000355 C599.00091,422.680135 599.288312,417.758981 596.36474,415.160431 C593.441168,412.561881 589.126229,413.450484 586.012448,414.157198 C581.598758,415.158943 511.297793,461.625274 375.109553,553.556189 C355.154858,567.258623 337.080515,573.934908 320.886524,573.585046 C303.033948,573.199351 268.692754,563.490928 243.163606,555.192408 C211.851067,545.013936 186.964484,539.632504 189.131547,522.346309 C190.260287,513.342589 202.659244,504.134509 226.328419,494.722069 Z"
                          id="Path-3"
                          fill="#fff"
                        ></path>
                      </g>
                    </svg>
                  </button>
                  <button aria-label="Email" on:click={() => window.location.href = "mailto:boris@0boris.xyz"} class="p-2 rounded-lg transition-all border border-green-500/70 bg-green-500/20 focus:bg-green-500 h-10 w-10"
                    ><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                      ><path
                        d="M22 8.608v8.142a3.25 3.25 0 0 1-3.066 3.245L18.75 20H5.25a3.25 3.25 0 0 1-3.245-3.066L2 16.75V8.608l9.652 5.056a.75.75 0 0 0 .696 0L22 8.608ZM5.25 4h13.5a3.25 3.25 0 0 1 3.234 2.924L12 12.154l-9.984-5.23a3.25 3.25 0 0 1 3.048-2.919L5.25 4h13.5-13.5Z"
                        fill="#fff"
                      /></svg
                    ></button
                  >
                  <button aria-label="X" on:click={() => window.location.href = "https://x.com/0boris_"} class="p-2 rounded-lg border border-black/70 bg-black/20 focus:bg-black h-10 w-10"
                    ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-full fill-white"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"
                    />
                  </svg>
                  </button
                  >
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  {/if}
</div>
