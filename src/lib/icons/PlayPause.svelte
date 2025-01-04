<script>
  export let isPlaying = true;
  export let togglePlayPause;
</script>

<button on:click={togglePlayPause}>
  {#if isPlaying}
    <!-- Pause Icon -->
    <svg
      class="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      ><path
        d="M5.746 3a1.75 1.75 0 0 0-1.75 1.75v14.5c0 .966.784 1.75 1.75 1.75h3.5a1.75 1.75 0 0 0 1.75-1.75V4.75A1.75 1.75 0 0 0 9.246 3h-3.5ZM14.746 3a1.75 1.75 0 0 0-1.75 1.75v14.5c0 .966.784 1.75 1.75 1.75h3.5a1.75 1.75 0 0 0 1.75-1.75V4.75A1.75 1.75 0 0 0 18.246 3h-3.5Z"
        fill="#ffffff"
      /></svg
    >
  {:else}
    <!-- Play Icon -->
    <svg
      class="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      ><path
        d="M5 5.274c0-1.707 1.826-2.792 3.325-1.977l12.362 6.726c1.566.853 1.566 3.101 0 3.953L8.325 20.702C6.826 21.518 5 20.432 5 18.726V5.274Z"
        fill="#ffffff"
      /></svg
    >
  {/if}
</button>
