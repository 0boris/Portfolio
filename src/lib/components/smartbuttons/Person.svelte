<script lang="ts">
  import Cross from "$lib/icons/Cross.svelte";
  import Person from "$lib/icons/Person.svelte"; // Person icon

  export let isActive: boolean = false; // Check if the button is active, to display cross icon
</script>

<div
  class="transition-all duration-500 bg-gradient-to-br from-blue-700 via-cyan-500 to-blue-600 bg-size-200 bg-pos-0 hover:bg-pos-100 hover:cursor-pointer p-[7px] rounded-[7px] w-[2rem] h-[2rem] md:w-[2.25rem] md:h-[2.25rem]"
>
  {#if isActive}
    <Person />
  {:else}
    <Cross />
  {/if}
</div>
