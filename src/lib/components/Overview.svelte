<script>
  import { onMount } from "svelte";
    /* Imports for animations. */
    import { fly } from "svelte/transition";

    /* Logic to show the div */
    let isDivVisible = false;

    onMount(() => {
        isDivVisible = true;
    });
</script>

<div class="bg-black/10 w-full h-[88vh] m-5 rounded-2xl border-2 border-white/10 backdrop-blur-xl">
    {#if isDivVisible}
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
</div>