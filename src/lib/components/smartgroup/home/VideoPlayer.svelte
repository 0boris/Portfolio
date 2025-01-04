<script>
// @ts-nocheck
  import Draggable from "svelte-draggable";


  import { onMount } from "svelte";
  import PlayPause from "$lib/icons/PlayPause.svelte";
  import Volume from "$lib/icons/Volume.svelte";
  import { blur, fly } from 'svelte/transition';
  import ArrowRight from "$lib/icons/ArrowRight.svelte";
  import HideVideo from "$lib/components/smartbuttons/HideVideo.svelte";

    /**
     * @type {HTMLVideoElement}
     */
    let videoElement;
    let isPlaying = true;
    let volume = 1.0;
    let isHovered = false;

    function togglePlayPause() {
        if (isPlaying) {
            videoElement.pause();
        } else {
            videoElement.play();
        }
        isPlaying = !isPlaying;
    }

    function setVolume(event) {
        videoElement.volume = event.target.value;
        volume = event.target.value;
    }

    onMount(() => {
        videoElement.volume = volume;
    });
</script>

<style>
    .controls {
      opacity: 0;
      transition: opacity 1s;
    }
    .video-container:hover .controls {
      opacity: 1;
    }
  </style>
  <div class="h-[90vh] rounded-2xl border-2 border-white/20 text-center bg-black">
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div class="relative video-container m-2" on:mouseenter={() => isHovered = true} on:mouseleave={() => isHovered = false}>
      <video bind:this={videoElement} class="rounded-xl" autoplay muted loop>
        <source src="/assets/main/kurzgesagt.mp4" type="video/mp4" />
      </video>
      <div class="absolute top-0 left-0 right-0 flex justify-between items-center controls bg-blue-500/20 rounded-xl" transition:blur={{ duration: 300 }}>
        <div class="p-3">
          <PlayPause {isPlaying} {togglePlayPause} />
        </div>
        {#if isHovered}
          <div transition:fly={{ y: -50, duration: 750 }} class="p-2 text-center">
            <!-- svelte-ignore a11y_click_events_have_key_events -->
            <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
            <h2 on:click={this.contentEditable=true} class="text-white opacity-70 text-sm">Kurzgesagt - The Brain Eating Amoeba</h2>
          </div>
        {/if}
        <div class="p-2">
          <Volume {volume} {setVolume} />
        </div>
      </div>
    </div>
    <div class="flex justify-center items-center w-full">
      <button class="m-2">
        <HideVideo />
      </button>
    </div>
  </div>