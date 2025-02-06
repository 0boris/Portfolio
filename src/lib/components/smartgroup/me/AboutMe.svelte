<script lang="ts">
    import Person from "$lib/icons/Person.svelte";
  /* Imports for animations. */
  import { fly, blur } from "svelte/transition";

  /* Logic to show the div */
  let isDivVisible = false;

  const renderDiv = () => {
    isDivVisible = true;
  };
</script>

<div on:pointerenter={renderDiv} class="text-white h-full w-full">
  {#if isDivVisible}
    <div class="flex flex-row">
      <div class="w-full lg:w-4/6 p-0 lg:p-5">
        <div
          class="text-white text-md lg:text-2xl font-bold mb-2 lg:mb-4"
          transition:fly={{ y: 200, duration: 500, delay: 300 }}
        >
          a little bit about me
        </div>
        <span
          class="text-white text-xs lg:text-lg opacity-50 mb-8 lg:mb-20"
          transition:fly={{ y: 500, duration: 500, delay: 400 }}
        >
          learn more about me and who i am
        </span>
      </div>
    </div>
    <div>
      <div
        class="fixed bottom-0 left-0 right-0 flex justify-center items-end z-50"
      >
        <div
          class="bg-[#191919] text-[#DEDEDE] w-[502px] mb-32 px-5 py-3 rounded-xl flex items-center space-x-4 transition-all duration-300 hover:md:shadow-[0_0_15px_rgba(200,200,200,0.3)]"
        >
          <div class="flex space-x-12 md:space-x-48">
            <div class="flex flex-row font-bold">
              <span class="h-6 w-6 mr-2">
                <Person />
              </span>
                About
            </div>
          </div>
        </div>
      </div>
    </div>
  {/if}
</div>
