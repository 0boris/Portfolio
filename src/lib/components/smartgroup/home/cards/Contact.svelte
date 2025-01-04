<script>
    import ContactCards from "./ContactCards.svelte";
</script>

<div
    class="border-2 border-white/20 rounded-lg p-4 space-y-1 !bg-black bg-mesh-yellow transition-all duration-500 bg-size-200 bg-pos-50 hover:bg-pos-100 relative left-28"
>
    <h1 class="text-2xl font-bold mb-2">Get in touch</h1>
    <ContactCards type="Email" address="boris@0boris.xyz" />
    <ContactCards type="Discord" address="I DON'T HAVE DISCORD" />
    <ContactCards type="Github" address="github.com/0boris" />
</div>
