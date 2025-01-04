<script lang="ts">
    export let type: string
    export let name: string
    export let address: string
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<!-- svelte-ignore a11y_click_events_have_key_events -->
<div
    class="border-2 border-white/20 rounded-lg p-4 !bg-black bg-mesh-blue transition-all duration-500 bg-size-200 bg-pos-50 hover:bg-pos-100 hover:cursor-pointer"
    on:click={() => {
        navigator.clipboard.writeText(address);
    }}
>
    <h1 class="text-3xl font-bold">{type}</h1>
    <p class="opacity-50 text-sm">{name}</p>
</div>
