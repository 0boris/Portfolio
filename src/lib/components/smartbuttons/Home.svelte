<script lang="ts">
  import Cross from "$lib/icons/Cross.svelte";
  import Home from "$lib/icons/Home.svelte"; // Home icon

  export let isActive: boolean = false; // Check if the button is active, to display cross icon
</script>

<div
  class="transition-all duration-500 bg-gradient-to-br from-indigo-500 via-purple-700 to-indigo-400 bg-size-200 bg-pos-0 hover:bg-pos-100 hover:cursor-pointer p-[7px] rounded-[7px] w-[2rem] h-[2rem] md:w-[2.25rem] md:h-[2.25rem]"
>
  {#if isActive}
    <Home />
  {:else}
    <Cross />
  {/if}
</div>
