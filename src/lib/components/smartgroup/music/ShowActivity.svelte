<script lang="ts">
  import { onMount } from "svelte";
  import Spinner from "$lib/components/Spinner.svelte";
  import { blur } from "svelte/transition";

  let socket: WebSocket;

  let fileName = "No file name";
  let languageId = "No language ID";
  let projectFolder = "No project folder";
  let primaryimg = "?";
  let secondaryimg = "?";
  let buttons: { [key: string]: string } = { Actions: "https://0boris.xyz/" };

  onMount(() => {
    socket = new WebSocket("ws://192.168.0.108:8080");

    socket.onopen = () => {
      console.log("WebSocket connection established");
    };

    socket.onmessage = (event) => {
      console.log("Message from server:", event.data);

      try {
        const data = JSON.parse(event.data);

        switch (data.type) {
          case "coding":
            fileName = data.fileName;
            languageId = data.languageId || "No language ID";
            projectFolder = data.projectFolder || "No project folder";
            primaryimg = "https://img.0boris.xyz/vscode.png";
            if (languageId === "css") {
              languageId = "css3";
            } else if (languageId === "html") {
              languageId = "html5";
            }
            secondaryimg = `https://rawcdn.githack.com/devicons/devicon/refs/heads/master/icons/${languageId}/${languageId}-original.svg`;
            buttons = {
              "View Repository": data.repo,
            };
        }
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
    };
  });
</script>

<div
  transition:blur={{ duration: 300 }}
  class="w-full h-1/2 md:h-1/3 rounded-xl bg-black bg-mesh bg-cover relative flex items-center justify-center"
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
            {fileName.substring(fileName.lastIndexOf("\\") + 1)}
          </h1>
          <p class="text-sm opacity-70">
            {languageId.charAt(0).toUpperCase() + languageId.slice(1)}
          </p>
          <p class="text-sm opacity-40">
            {projectFolder.substring(projectFolder.lastIndexOf("\\") + 1)}
          </p>
        </div>
      </div>
      <div
        class="py-3 px-16 bg-black/50 flex items-center justify-center rounded-lg gap-5 mt-[-16px]"
      >
        {#each Object.entries(buttons) as [key, value]}
          <a
            class="py-1 px-2 transition-all duration-200 bg-white/10 hover:bg-white/20 rounded-md"
            href={value as string}
          >
            {key}
          </a>
        {/each}
      </div>
    </div>
  </div>
</div>
