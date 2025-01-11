<script lang="ts">
  import { onMount } from "svelte";

  /* Import components for the smartbar + overview */
  import Home from "$lib/components/smartbuttons/Home.svelte";
  import Person from "$lib/components/smartbuttons/Person.svelte";
  import Projects from "$lib/components/smartbuttons/Projects.svelte";
  import Team from "$lib/components/smartbuttons/Team.svelte";
  import Music from "$lib/components/smartbuttons/Music.svelte";
  import Cross from "$lib/icons/Cross.svelte";

  import Time from "$lib/components/Time.svelte";
  import Info from "$lib/icons/Info.svelte";

  import Overview from "$lib/components/smartgroup/home/Overview.svelte";
  import AboutMe from "$lib/components/smartgroup/me/AboutMe.svelte";
  import ProjectsPage from "$lib/components/smartgroup/projects/Projects.svelte";
  import TeamPage from "$lib/components/smartgroup/team/Team.svelte";
  import MusicPage from "$lib/components/smartgroup/music/Music.svelte";

  /* Scroll effect for the tooltip */
  import { fly } from "svelte/transition";

  let showScrollText = true;
  let showInput = false;
  let inputValue = "";
  let showPopup = false;
  let activeSmartGroup = "";

  /* Use onMount function to prevent error { window is not defined } */
  onMount(() => {
    setTimeout(() => {
      showScrollText = false;
    }, 500);

    const handleScroll = () => {
      if (window.scrollY > 100) {
        showScrollText = true;
        openSmartGroup("home");
      } else {
        showScrollText = false;
      }
    };

    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === "q" && event.ctrlKey) {
        // Ctrl+K as the shortcut
        showInput = true;
        setTimeout(() => {
          document.getElementById("shortcut-input")?.focus();
        }, 0);
      } else if (event.key === "Escape") {
        showInput = false;
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleKeydown);
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

  const executeCommand = () => {
    if (inputValue.trim().toLowerCase() === "open popup") {
      showPopup = true;
      showInput = false;
    }
  };

  const openSmartGroup = (group: string) => {
    activeSmartGroup = group;
  };

  const closeSmartGroup = () => {
    activeSmartGroup = "";
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

  {#if showInput}
    <div
      class="fixed inset-0 flex items-center justify-center z-50"
      transition:fly={{ y: 200, duration: 500 }}
    >
      <input
        id="shortcut-input"
        type="text"
        placeholder="Type a command here..."
        bind:value={inputValue}
        class="p-3 text-sm rounded-lg bg-black text-white outline-none w-[40rem]"
        on:keydown={(e) => e.key === "Enter" && executeCommand()}
      />
    </div>
  {/if}

  {#if showPopup}
    <div
      class="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-md text-white"
    >
      <div
        class="bg-black border-2 border-white/20 p-6 rounded-lg w-[44rem]"
        transition:fly={{ y: 200, duration: 500 }}
      >
        <h2 class="opacity-80 mb-2">Popup Title</h2>
        <p class="text-md">This is an example popup opened by the command.</p>
        <button
          class="mt-4 rounded-full transition-all duration-300 bg-red-500/50 hover:bg-red-500/30 py-2 px-4 text-sm font-bold"
          on:click={() => (showPopup = false)}>Close</button
        >
      </div>
    </div>
  {/if}

  <div class="fixed bottom-0 left-0 right-0 flex justify-center items-end z-50">
    <div
      class="bg-[#191919] text-[#DEDEDE] mb-8 px-6 py-4 rounded-xl flex items-center space-x-4 transition-all duration-300 hover:md:shadow-[0_0_15px_rgba(200,200,200,0.3)]"
    >
      <Time />
      <div class="flex space-x-12 md:space-x-48">
        <div class="flex space-x-2">
          {#if activeSmartGroup === "home"}
            <button
              type="button"
              on:click={closeSmartGroup}
              aria-label="Close Home Group"
            >
              <Home />
            </button>
          {:else}
            <button
              type="button"
              on:click={() => openSmartGroup("home")}
              aria-label="Open Home Group"
            >
              <Home isActive={true} />
            </button>
          {/if}
          {#if activeSmartGroup === "about"}
            <button
              type="button"
              on:click={closeSmartGroup}
              aria-label="Close About Group"
            >
              <Person />
            </button>
          {:else}
            <button
              type="button"
              on:click={() => openSmartGroup("about")}
              aria-label="Open About Group"
            >
              <Person isActive={true} />
            </button>
          {/if}
          {#if activeSmartGroup === "projects"}
            <button
              type="button"
              on:click={closeSmartGroup}
              aria-label="Close Projects Group"
            >
              <Projects />
            </button>
          {:else}
            <button
              type="button"
              on:click={() => openSmartGroup("projects")}
              aria-label="Open Projects Group"
            >
              <Projects isActive={true} />
            </button>
          {/if}
          {#if activeSmartGroup === "team"}
            <button
              type="button"
              on:click={closeSmartGroup}
              aria-label="Close Team Group"
            >
              <Team />
            </button>
          {:else}
            <button
              type="button"
              on:click={() => openSmartGroup("team")}
              aria-label="Open Team Group"
            >
              <Team isActive={true} />
            </button>
          {/if}
          {#if activeSmartGroup === "music"}
            <button
              type="button"
              on:click={closeSmartGroup}
              aria-label="Close Music Group"
            >
              <Music />
            </button>
          {:else}
            <button
              type="button"
              on:click={() => openSmartGroup("music")}
              aria-label="Open Music Group"
            >
              <Music isActive={true} />
            </button>
          {/if}
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
  <div class="h-screen bg-default bg-cover -z-50 flex p-4">
    <div
      class="bg-black/10 text-white h-full w-full p-4 rounded-2xl border-2 border-white/10 backdrop-blur-xl bg-cover"
    >
      {#if activeSmartGroup === "home"}
        <Overview />
      {:else if activeSmartGroup === "about"}
        <AboutMe />
      {:else if activeSmartGroup === "projects"}
        <ProjectsPage />
      {:else if activeSmartGroup === "team"}
        <TeamPage />
      {:else if activeSmartGroup === "music"}
        <MusicPage />
      {/if}
    </div>
  </div>
</div>
