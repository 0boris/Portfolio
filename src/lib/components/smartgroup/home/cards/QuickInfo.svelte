<script lang="ts">
    import { blur } from "svelte/transition";
</script>

<div class="w-[32rem] rounded-lg p-0.5 bg-gradient-to-l from-[#467685] to-black">
    <div
        class="bg-mesh-blue bg-size-200 flex flex-row gap-3 px-4 py-6 rounded-lg"
    >
    <div class="rounded-lg">
        <img class="h-12 w-12 rounded-full border-2 border-white/70" src="https://avatars.githubusercontent.com/u/145894897?v=4" alt="profile" />
    </div>
    <div class="flex flex-col">
        <span transition:blur={{ duration: 300, delay: 800 }} class="text-2xl font-bold">Boris O.</span>
        <span transition:blur={{ duration: 350, delay: 950 }} class="text-sm text-white/70">0Boris</span>
    </div>
    </div>
</div>
