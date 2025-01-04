<script lang="ts">
    import Video from "$lib/icons/Video.svelte";
    import { fly } from "svelte/transition";
</script>

<div
    transition:fly={{ x: -500, duration: 500 }} 
    class="transition-all duration-500 bg-gradient-to-br from-red-500 via-rose-400 to-red-600 bg-size-200 bg-pos-0 hover:bg-pos-100 hover:cursor-pointer p-[7px] rounded-[7px] w-[2rem] h-[2rem] md:w-[2.25rem] md:h-[2.25rem]"
>
    <Video />
</div>
