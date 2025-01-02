<script>
  import { onMount } from "svelte";
  /* Import components for the smartbar + overview */
  import Time from "$lib/components-su/Time.svelte";
  import Home from "$lib/icons/Home.svelte"; // Home icon
  import Person from "$lib/icons/Person.svelte"; // About me icon
  import Folder from "$lib/icons/Folder.svelte"; // Projects icon
  import Team from "$lib/icons/Team.svelte"; // Community icon
  import Music from "$lib/icons/Music.svelte"; // Music icon
  import Info from "$lib/icons/Info.svelte"; // About this website icon
  import ArrowUp from "$lib/icons/ArrowUp.svelte"; // Return back to top of the page icon

  import Overview from "$lib/components/Overview.svelte";

  /* Scroll effect for the tooltip */
  import { fly } from "svelte/transition";

  let showScrollText = false;
  let lastScrollTop = 0;

  /* Use onMount function to prevent error { window is not defined } */
  onMount(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        showScrollText = true;
        scrollToOverview();
      } else {
        showScrollText = false;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const scrollToOverview = () => {
    // @ts-ignore
    document?.getElementById("overview").scrollIntoView({
      behavior: "smooth",
    });
  };

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
</script>

<div class="bg-black h-screen flex flex-col justify-center items-center z-50">
  <span id="topmain">a</span>
  {#if !showScrollText}
    <div
      class="text-white text-4xl md:text-6xl font-bold mb-8"
      transition:fly={{ y: 200, duration: 500 }}
    >
      Hi, I'm Boris.
    </div>
    <span
      class="text-white text-lg opacity-50 mb-20"
      transition:fly={{ y: 300, duration: 500 }}
    >
      Scroll down to see more.
    </span>
  {/if}

  <div class="fixed bottom-0 left-0 right-0 flex justify-center items-end z-50">
    <div
      class="bg-[#191919] text-[#DEDEDE] mb-8 px-6 py-4 rounded-xl flex items-center space-x-4 transition-all duration-300 shadow-[0_0_20px_rgba(200,200,200,0.25)] hover:shadow-[0_0_25px_rgba(200,200,200,0.45)]"
    >
      <Time />
      <div class="flex space-x-12 md:space-x-48">
        <div class="flex space-x-2">
          <div
            class="transition-all duration-500 bg-gradient-to-br from-indigo-500 via-purple-700 to-indigo-400 bg-size-200 bg-pos-0 hover:bg-pos-100 hover:cursor-pointer p-[7px] rounded-[7px] w-[2.25rem] h-[2.25rem]"
          >
            <Home />
          </div>

          <div
            class="transition-all duration-500 bg-gradient-to-br from-blue-700 via-cyan-500 to-blue-600 bg-size-200 bg-pos-0 hover:bg-pos-100 hover:cursor-pointer p-[7px] rounded-[7px] w-[2.25rem] h-[2.25rem]"
          >
            <Person />
          </div>

          <div
            class="transition-all duration-500 bg-gradient-to-br from-red-700 via-orange-400 to-red-600 bg-size-200 bg-pos-0 hover:bg-pos-100 hover:cursor-pointer p-[7px] rounded-[7px] w-[2.25rem] h-[2.25rem]"
          >
            <Folder />
          </div>

          <div
            class="transition-all duration-500 bg-gradient-to-br from-emerald-500 via-green-800 to-emerald-500 bg-size-200 bg-pos-0 hover:bg-pos-100 hover:cursor-pointer p-[7px] rounded-[7px] w-[2.25rem] h-[2.25rem]"
          >
            <Team />
          </div>

          <div
            class="transition-all duration-500 bg-gradient-to-br from-red-500 via-rose-400 to-red-600 bg-size-200 bg-pos-0 hover:bg-pos-100 hover:cursor-pointer p-[7px] rounded-[7px] w-[2.25rem] h-[2.25rem]"
          >
            <Music />
          </div>
        </div>

        <div class="flex space-x-2">
          {#if showScrollText}
          <button
            class="transition-all duration-500 bg-gradient-to-br from-yellow-500 via-orange-600 to-yellow-600 bg-size-200 bg-pos-0 hover:bg-pos-100 hover:cursor-pointer p-[7px] rounded-[7px] w-[2.25rem] h-[2.25rem]"
            type="button"
            on:click={scrollToTop}
          >
            <ArrowUp />
          </button>
        {/if}
          <div
            class="transition-all duration-500 bg-gradient-to-br from-zinc-500 via-zinc-700 to-zinc-600 bg-size-200 bg-pos-0 hover:bg-pos-100 hover:cursor-pointer p-[7px] rounded-[7px] w-[2.25rem] h-[2.25rem]"
          >
            <Info />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div id="overview" class="h-screen -z-50">
  <div class="h-screen bg-mainBackground bg-contain -z-50 flex">
    <Overview />
  </div>
</div>
