<script lang="ts">
    import Info from "$lib/icons/Info.svelte";
    import { enhance } from "$app/forms";
    export let form;
</script>

<div class="h-screen w-full bg-black flex justify-center items-center">
    <div
        class="flex flex-col w-80 gap-4 bg-gradient-to-br from-[#e45050] via-[#782828] to-black rounded-xl p-6 border border-red-400"
    >
        <div class="flex flex-row gap-2">
            <div class="h-6 w-6">
                <Info />
            </div>
            <h1 class="text-white font-bold">Feedback</h1>
        </div>
        <div class="flex flex-col gap-2 text-center">
            <form
                action="?/upload"
                method="POST"
                use:enhance
                enctype="multipart/form-data"
                class="flex flex-col gap-2"
            >
                <input
                    name="name"
                    placeholder="Your Name"
                    class="rounded-full bg-black/50 text-white px-3 py-2 outline-none text-sm"
                    required
                />
                <textarea
                    name="likes"
                    class="rounded-2xl bg-black/50 text-white px-3 py-3 outline-none text-sm"
                    placeholder="What do you like?"
                    required
                ></textarea>
                <textarea
                    name="improvements"
                    class="rounded-2xl bg-black/50 text-white px-3 py-3 outline-none text-sm"
                    placeholder="What could be better?"
                    required
                ></textarea>
                <button
                    type="submit"
                    class="py-2 px-6 transition-all duration-300 bg-black/50 hover:bg-black/30 rounded-xl text-white font-bold border border-white/40 hover:border-white/30"
                    >Submit</button
                >
            </form>
            {#if form}
                <p class="text-white/90 font-semibold">
                    Uploaded: {form.uploaded}
                </p>
            {/if}
        </div>
    </div>
</div>
