<script lang="ts">
  import { fade } from "svelte/transition";
  import Spinner from "$lib/components/Spinner.svelte";
  let isIframeLoaded = false;

  setTimeout(() => {
    isIframeLoaded = true;
  }, 750);
</script>

<div class="w-full h-1/3 rounded-xl bg-black bg-mesh bg-cover relative flex items-center justify-center">
  {#if !isIframeLoaded}
    <div class="absolute">
      <Spinner />
    </div>
  {/if}
  {#if isIframeLoaded}
    <iframe
      class="w-full h-full rounded-xl"
      title="music"
      src="https://lanyard-visualizer.netlify.app/user/1198339425780899873"
      transition:fade
    ></iframe>
  {/if}
</div>