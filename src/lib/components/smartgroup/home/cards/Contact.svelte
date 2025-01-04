<script lang="ts">
  import Delete from "$lib/icons/Delete.svelte";
  import ContactCards from "./ContactCards.svelte";
  import { blur, fly } from "svelte/transition";

  let showPopup = false;
  let popupAddress = "";
  let copied = false;
  let success = false;
  let showtitle = false;

  const togglePopup = (address: string) => {
    popupAddress = address;
    showPopup = !showPopup;
    copied = false; // Reset copied state when popup is toggled
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(popupAddress).then(() => {
      copied = true;
      setTimeout(function () {
        copied = false;
      }, 1000);
    });
  };

  const openInNewTab = () => {
    window.open(`https://${popupAddress}`, "_blank");
  };
</script>

<div
  class="border-2 border-white/20 rounded-lg p-4 space-y-1 !bg-black bg-mesh transition-all duration-500 bg-size-200 bg-pos-50 hover:bg-pos-100 relative left-28"
>
  <h1 class="text-2xl font-bold mb-2">Get in touch</h1>
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div
    on:click={() =>
      navigator.clipboard
        .writeText("boris@0boris.xyz")
        .then(() => (success = true))
        .then(() => (showtitle = true))
        .then(() => setTimeout(() => (showtitle = false), 2200))
        .then(() => setTimeout(() => (success = false), 5000))}
  >
    <ContactCards type="Email" name="@0boris.xyz" address="boris@0boris.xyz" />
  </div>
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div on:click={() => togglePopup("github.com/0boris")}>
    <ContactCards type="Github" name="@0boris" address="github.com/0boris" />
  </div>
</div>

{#if showPopup}
  <div
    class="fixed inset-0 flex items-center backdrop-blur-md justify-center z-50"
  >
    <div class="fixed top-0">
      <div
        class="bg-black border-2 border-white/20 p-6 rounded-lg w-[44rem]"
        transition:fly={{ y: -1000, duration: 500 }}
      >
        <h2 class="opacity-80 mb-2">0Boris.xyz</h2>
        <p class="text-md">
          A component on this website requires your interaction:
        </p>
        <span class="text-sm opacity-40">{popupAddress}</span>

        <div class="flex justify-between mt-4">
          <button
            class="rounded-full transition-all duration-300 bg-red-500/50 hover:bg-red-500/30 py-2 px-4 text-sm font-bold"
            on:click={() => togglePopup("")}>Dismiss</button
          >
          <div class="flex space-x-2">
            <button
              class="rounded-full transition-all duration-300 bg-white/20 hover:bg-white/30 py-2 px-4 text-sm"
              on:click={copyToClipboard}
            >
              {#if copied}Copied{:else}Copy to clipboard{/if}
            </button>
            <button
              class="rounded-full transition-all duration-300 bg-white/20 hover:bg-white/30 py-2 px-4 text-sm"
              on:click={openInNewTab}>Open in a new tab</button
            >
          </div>
        </div>
      </div>
    </div>
  </div>
{/if}

{#if success}
  <div class="fixed right-12 bottom-12 p-4 bg-white/10 text-white border border-white/30 rounded-lg" transition:fly={{ y:200, duration: 500}}>
    <div
    transition:blur={{ duration: 500, delay: 50 }}
  >
    {#if showtitle}
      <h1
        transition:blur={{ duration: 500, delay: 100 }}
        class="text-lg font-semibold"
      >
        Action completed.
      </h1>
    {/if}
    <p transition:blur={{ duration: 500, delay: 200 }} class="text-sm font-light">
      The text was copied to the clipboard successfully.
    </p>
  </div>
  </div>
{/if}
