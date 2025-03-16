<script lang="ts">
  import { onMount } from "svelte";
  import { blur } from "svelte/transition";

  let socket: WebSocket;
  let musicInterval: number;

  let primary = "N/A"; // case coding: filename
  let secondary = "N/A"; // case coding: language
  let tertiary = "N/A"; // case coding: project folder
  let primaryimg = "?";
  let secondaryimg = "?";

  let songName = "Not listening to Spotify";
  let songArtist = "Not listening to Spotify";

  async function fetchMusicStatus() {
    try {
      const response = await fetch("/api/music/getStatus");
      const data = await response.json();
      if (data.success) {
        songName = data.songName;
        songArtist = data.songArtist;

        primary = data.songName;
        secondary = data.songArtist;
        tertiary = "Listening on Spotify"

        primaryimg = data.songImage;
        secondaryimg = "https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Primary_Logo_RGB_Green.png"
      }
    } catch (error) {
      console.error("Error fetching music status:", error);
    }
  }

  onMount(() => {
    socket = new WebSocket("ws://presenceapi.0boris.xyz");

    fetchMusicStatus();
    musicInterval = setInterval(fetchMusicStatus, 5000);

    socket.onopen = () => {
      console.log("WebSocket connection established");
    };

    socket.onmessage = (event) => {
      console.log("Message from server:", event.data);

      try {
        const data = JSON.parse(event.data);

        primary = data.fileName;
        secondary = data.languageId || "No language ID";
        tertiary = data.projectFolder || "No project folder";
        primaryimg = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/1024px-Visual_Studio_Code_1.35_icon.svg.png";
        if (secondary === "css") {
          secondary = "css3";
        } else if (secondary === "html") {
          secondary = "html5";
        }
        secondaryimg = `https://rawcdn.githack.com/devicons/devicon/refs/heads/master/icons/${secondary}/${secondary}-original.svg`;
      } catch (error) {
        console.error("Error parsing JSON data:", error);
      }
    };

    socket.onclose = () => {
      console.log("WebSocket connection closed");
    };

    socket.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    return () => {
      socket.close();
      clearInterval(musicInterval);
    };
  });
</script>

<div
  transition:blur={{ duration: 300 }}
  class="w-full h-full rounded-xl bg-black bg-mesh bg-cover relative flex items-center justify-center"
>
  <div class="w-full h-full rounded-xl bg-mesh bg-cover">
    <div class="flex flex-col gap-6 justify-center items-center w-full h-full">
      <div
        transition:blur={{ duration: 250, delay: 250 }}
        class="flex flex-col justify-center items-center gap-1"
      >
        <h1 class="text-3xl font-bold">My Activity</h1>
        <p class="opacity-50">What am I doing right now?</p>
      </div>
      <div
        class="p-6 bg-black/50 flex items-center justify-center rounded-lg gap-5"
      >
        <div class="relative bg-black/30 rounded-lg">
          <img
            class="rounded-lg h-20 w-20 p-2 border-2 border-white/20"
            src={primaryimg}
            alt="App"
          />
          <div
            class="flex justify-center h-[2.25rem] w-[2.25rem] border-2 bg-black/50 border-white/50 rounded-xl absolute bottom-[-10px] right-[-10px]"
          >
            <img
              class="p-1 border-white/50 rounded-lg"
              src={secondaryimg}
              alt="Tool"
            />
          </div>
        </div>
        <div>
          <h1 class="text-lg font-bold">
            {primary.substring(primary.lastIndexOf("\\") + 1)}
          </h1>
          <p class="text-sm opacity-70">
            {secondary.charAt(0).toUpperCase() + secondary.slice(1)}
          </p>
          <p class="text-sm opacity-40">
            {tertiary.substring(tertiary.lastIndexOf("\\") + 1)}
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
