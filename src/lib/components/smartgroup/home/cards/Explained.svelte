<script lang="ts">
    import Folder from "$lib/components/smartbuttons/Projects.svelte";
    import Home from "$lib/components/smartbuttons/Home.svelte";
    import Music from "$lib/components/smartbuttons/Music.svelte";
    import Person from "$lib/components/smartbuttons/Person.svelte";
    import Team from "$lib/components/smartbuttons/Team.svelte";
    import { blur } from "svelte/transition";
</script>

<div
    class="border-2 border-white/20 rounded-lg p-4 w-[42rem] !bg-black bg-mesh-red transition-all duration-500 bg-size-200 bg-pos-50 hover:bg-pos-100"
>
    <h1
        transition:blur={{ duration: 1000, delay: 650 }}
        class="text-2xl font-bold mb-2"
    >
        Smart Bar Functions
    </h1>

    <span transition:blur={{ duration: 1000, delay: 1000 }}>
        <ul class="mt-4 space-y-2 text-xs lg:text-lg">
            <li class="flex items-center text-white bg-white/20 rounded-md p-2">
              <div class="h-9 w-9">
                <Home />
              </div>
              <div class="ml-3 font-bold">
                You're here.
              </div>
            </li>
            <li class="flex items-center text-white bg-white/20 rounded-md p-2">
              <div class="h-9 w-9">
                <Person />
              </div>
              <div class="ml-3">
                Find out more about me.
              </div>
            </li>
            <li class="flex items-center text-white bg-white/20 rounded-md p-2">
              <div class="h-9 w-9">
                <Folder />
              </div>
              <div class="ml-3">
                A collection of my previous work.
              </div>
            </li>
            <li class="flex items-center text-white bg-white/20 rounded-md p-2">
              <div class="h-9 w-9">
                <Team />
              </div>
              <div class="ml-3">
                Find out about people who have helped me along my journey.
              </div>
            </li>
            <li class="flex items-center text-white bg-white/20 rounded-md p-2">
              <div class="h-9 w-9">
                <Music />
              </div>
              <div class="ml-3">
                My activity. The icon changes depending on what I'm doing.
              </div>
            </li>
          </ul>
    </span>
</div>
