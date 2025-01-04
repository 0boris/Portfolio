<script lang="ts">
  import { onMount } from "svelte";

  let currentTime = "--:--";

  const updateTime = () => {
    const now = new Date();
    currentTime = now.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
    console.log("updated time")
  };

  onMount(() => {
    updateTime();
    const interval = setInterval(updateTime, 60000); // Update every minute
    return () => clearInterval(interval);
  });
</script>

<span class="font-bold text-lg">{currentTime}</span>
