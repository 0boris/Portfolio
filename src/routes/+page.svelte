<script>
  import { onMount } from "svelte";
  import { redirect } from "@sveltejs/kit";

  /* Import components for the smartbar + overview */
  import Home from "$lib/components/smartbuttons/Home.svelte";
  import Person from "$lib/components/smartbuttons/Person.svelte";
  import Projects from "$lib/components/smartbuttons/Projects.svelte";
  import Team from "$lib/components/smartbuttons/Team.svelte";
  import Music from "$lib/components/smartbuttons/Music.svelte";

  import Time from "$lib/components/Time.svelte";
  import Info from "$lib/icons/Info.svelte"; // About this website icon
  import Delete from "$lib/icons/Delete.svelte"; // Close current Smart group icon

  import Overview from "$lib/components/smartgroup/home/Overview.svelte";

  /* Scroll effect for the tooltip */
  import { fly } from "svelte/transition";

  let showScrollText = true;

  /* Use onMount function to prevent error { window is not defined } */
  onMount(() => {
    setTimeout(() => {
      showScrollText = false;
    }, 500);

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
      class="bg-[#191919] text-[#DEDEDE] mb-8 px-6 py-4 rounded-xl flex items-center space-x-4 transition-all duration-300 hover:md:shadow-[0_0_15px_rgba(200,200,200,0.3)]"
    >
      <Time />
      <div class="flex space-x-12 md:space-x-48">
        <div class="flex space-x-2">
          <Home />
          <Person />
          <Projects />
          <Team />
          <Music />
        </div>

        <div class="flex space-x-2">
          <div
            class="transition-all duration-500 bg-gradient-to-br from-zinc-500 via-zinc-700 to-zinc-600 bg-size-200 bg-pos-0 hover:bg-pos-100 hover:cursor-pointer p-[7px] rounded-[7px] w-[2rem] h-[2rem] md:w-[2.25rem] md:h-[2.25rem]"
          >
            <Info />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div id="overview" class="h-screen bg-black -z-50">
  <div
    class="h-screen bg-default bg-cover -z-50 flex p-4"
  >
    <Overview />
  </div>
</div>

