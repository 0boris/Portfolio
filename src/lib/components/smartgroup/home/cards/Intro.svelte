<script lang="ts">
    import { onMount } from 'svelte';
    import { blur } from "svelte/transition"

    let ukTime = '';

    function updateUKTime() {
        const now = new Date();
        const options = { hour: "2-digit" as "2-digit", minute: "2-digit" as "2-digit", hour12: true };
        ukTime = now.toLocaleTimeString('en-GB', options);
    }

    onMount(() => {
        updateUKTime();
        const interval = setInterval(updateUKTime, 60000);
        return () => clearInterval(interval);
    });
</script>

<div
    class="w-[36rem] p-0.5 bg-gradient-to-b from-[#328e71] to-[#012117] rounded-lg"
>
    <div class={`rounded-lg p-4 bg-mesh-green h-full`}>
        <div class="flex flex-col gap-[-4px] mb-2">
            <h1 class="text-xl font-bold">Intro</h1>
            <span class="opacity-50 text-sm">Some quick facts about me.</span>
        </div>
        <div class="grid grid-cols-5 grid-rows-3 gap-2">
            <div
                transition:blur={{ duration: 300, delay: 600 }}
                class="px-4 py-3 bg-white/10 rounded-lg flex flex-col col-span-3 row-span-1 justify-center"
            >
                <span class="font-bold text-sm">I'm Boris.</span>
                <span class="text-xs opacity-80">
                    I'm a passionate web developer with a love for creating
                    clean designs.
                </span>
            </div>
            <div
                transition:blur={{ duration: 300, delay: 700 }}
                class="px-4 py-3 bg-white/10 rounded-lg flex flex-col text-sm col-span-2 row-span-1 justify-center"
            >
                <span class="font-bold text-sm">What I like.</span>
                <span class="text-xs opacity-80">
                    I enjoy playing video games, basketball, and coding.
                </span>
            </div>
            <div
                transition:blur={{ duration: 300, delay: 750 }}
                class="px-4 py-3 bg-white/10 rounded-lg flex flex-col text-sm col-span-1 row-span-1 justify-center"
            >
                <span class="font-bold text-sm">My Time</span>
                <span class="text-xs opacity-80">
                    <span class="text-xs opacity-80">
                        {ukTime}
                    </span>
                </span>
            </div>
            <div
                transition:blur={{ duration: 300, delay: 800 }}
                class="px-4 py-3 bg-white/10 rounded-lg flex flex-col text-sm col-span-4 row-span-1 justify-center"
            >
                <span class="font-bold text-sm">What I'm studying.</span>
                <span class="text-xs opacity-80">
                    I study Computer Science, Geography, Spanish, and Religious Studies. I like to attend extra-curricular clubs to extend my learning.
                </span>
            </div>
            <div
            transition:blur={{ duration: 300, delay: 800 }}
            class="px-4 py-3 bg-emerald-300/20 rounded-lg flex flex-col text-sm col-span-4 row-span-1 justify-center"
        >
            <span class="font-bold text-sm">What about you?</span>
            <span class="text-xs opacity-80">
                I want to hear from you. Tell me what you think about my website! <a class="font-semibold" href="/feedback">Complete the form here.</a>
            </span>
        </div>
        </div>
    </div>
</div>