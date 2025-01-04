<script>
    import Discord from "../src/lib/components/smartgroup/home/cards/icons/Discord.svelte";
    import Email from "../src/lib/components/smartgroup/home/cards/icons/Email.svelte";
</script>

<div
    class="border-2 border-white/20 rounded-lg p-4 !bg-black bg-mesh-yellow transition-all duration-500 bg-size-200 bg-pos-50 hover:bg-pos-100 relative left-28"
>
<div class="flex flex-row items-center justify-center space-x-6 mt-4">
    <div class="group relative fill-white w-12 h-12">
      <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full top-24 flex scale-50 items-center justify-center rounded-lg bg-transparent opacity-0 transition-all duration-300 group-hover:translate-y-2 group-hover:scale-100 group-hover:opacity-100">
        <a href="https://github.com/0boris" class="bg-mesh-red bg-cover px-3 py-2 rounded-lg font-normal border-2 border-white/50">
          boris@0boris.xyz
        </a>
      </div>
      <a href="https://github.com/0boris" class="relative z-10 rounded-full fill-white hover:cursor-pointer">
        <Email />
      </a>
    </div>
    <div class="group relative fill-white w-12 h-12">
        <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full top-24 flex scale-50 items-center justify-center rounded-lg bg-transparent opacity-0 transition-all duration-300 group-hover:translate-y-2 group-hover:scale-100 group-hover:opacity-100">
          <a href="https://discord.com/app" class="bg-mesh-red bg-cover px-3 py-2 rounded-lg font-normal border-2 border-white/50">
            I don't have one.
          </a>
        </div>
        <a href="https://discord.com/app" class="relative z-10 rounded-full fill-white hover:cursor-pointer">
          <Discord />
        </a>
      </div>
  </div>
</div>
