<script>
    import "../app.css"
    import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';

    injectSpeedInsights();
</script>

<svelte:head>
    <title>0Boris.xyz</title>
    <meta name="description" content="My portfolio website, made with SvelteKit." />
</svelte:head>

<slot />