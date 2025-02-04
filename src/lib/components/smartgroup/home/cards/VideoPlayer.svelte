<script>
// @ts-nocheck

  import { onMount } from "svelte";
  import PlayPause from "$lib/icons/PlayPause.svelte";
  import Volume from "$lib/icons/Volume.svelte";
  import { blur, fly } from "svelte/transition";
  import HideVideo from "$lib/components/smartbuttons/HideVideo.svelte";
  import ShowVideo from "$lib/components/smartbuttons/ShowVideo.svelte";
  
  /**
   * @type {HTMLVideoElement}
   */
  let videoElement;
  let isPlaying = true;
  let volume = 1.0;
  let isHovered = false;
  let isVisible = true;
  let showText = false;

  function togglePlayPause() {
    if (isPlaying) {
      videoElement.pause();
    } else {
      videoElement.play();
    }
    isPlaying = !isPlaying;
  }

  /**
     * @param {{ target: { value: number; }; }} event
     */
  function setVolume(event) {
    videoElement.volume = event.target.value;
    volume = event.target.value;
  }

  function hideVideo() {
    isVisible = false;
  }

  function showVideo() {
    isVisible = true;
  }

  onMount(() => {
    videoElement.volume = volume;
  });
</script>

{#if isVisible}
  <div
    class="w-[70vh] rounded-2xl p-2 border-2 border-white/20 text-center bg-black target"
  >
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div
      class="video-container transform-gpu"
      on:mouseenter={() => (isHovered = true)}
      on:mouseleave={() => (isHovered = false)}
      >
      <video bind:this={videoElement} class="rounded-xl" autoplay muted loop>
        <source src="/assets/main/Kurzgesagt.webm" type="video/webm" />
      </video>
      <div
        class="absolute top-0 left-0 right-0 flex justify-between items-center controls bg-blue-500/20 rounded-xl"
        transition:blur={{ duration: 300 }}
      >
        <div class="p-3">
          <PlayPause {isPlaying} {togglePlayPause} />
        </div>
        {#if isHovered}
          <div
            transition:fly={{ y: -50, duration: 750 }}
            class="p-2 text-center"
          >
            <!-- svelte-ignore a11y_click_events_have_key_events -->
            <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
            <h2
              on:click={(this.contentEditable = true)}
              class="text-white opacity-70 text-sm"
            >
              Kurzgesagt - The Brain Eating Amoeba
            </h2>
          </div>
        {/if}
        <div class="p-2">
          <Volume {volume} {setVolume} />
        </div>
      </div>
    </div>
    <div class="flex justify-center items-center w-full">
      <button class="m-2" on:click={hideVideo}>
        <HideVideo />
      </button>
    </div>
  </div>
{:else}
  <div class="fixed top-4 right-4">
    <button
      transition:fly={{ x: 200, duration: 500 }}
      class="show-video-button m-2 hover:cursor-pointer"
      on:click={showVideo}
      on:mouseenter={() => (showText = true)}
      on:mouseleave={() => (showText = false)}
    >
      <div>
        <ShowVideo />
      </div>
      {#if showText}
        <span
          transition:blur={{ duration: 500 }}
          class="show-video-text ml-2 text-white">Kurzgesagt</span
        >
      {/if}
    </button>
  </div>
{/if}

<style>
  .controls {
    opacity: 0;
    transition: opacity 1s;
  }
  .video-container:hover .controls {
    opacity: 1;
  }
  .show-video-button {
    display: flex;
    align-items: center;
    transition: all 0.3s ease;
  }
  .show-video-button:hover .show-video-text {
    opacity: 1;
    transform: translateX(0);
  }
  .show-video-text {
    opacity: 0;
    transform: translateX(-10px);
    transition: all 0.3s ease;
  }
</style>
