<script>
    // svelte-ignore export_let_unused
    export let volume = 1.0;
    // svelte-ignore export_let_unused
    export let setVolume;
</script>

<div class="group relative">
    <div
        class="absolute -left-20 top-9 flex -translate-x-1/2 -translate-y-1/2 scale-50 items-center justify-center rounded-lg bg-transparent opacity-0 transition-all duration-300 group-hover:-translate-y-full group-hover:scale-100 group-hover:opacity-100"
    >
        <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            class="mx-2 py-2 accent-white"
        />
    </div>
    <div class="relative z-10 rounded-full text-black hover:cursor-pointer"></div>
        <svg
            class="p-2"
            width="41"
            height="41"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            ><path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
            ></path></svg
        >
</div>
