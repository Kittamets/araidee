<script>
    export let title;
    export let description;
    export let speaker;
    import * as Avatar from "$lib/components/ui/avatar";
  </script>
  
  <div class="bg-white rounded-lg p-4 shadow-md flex flex-col justify-between h-full">
    <div>
      <h3 class="text-lg font-bold mb-2">{title}</h3>
      <p class="text-sm mb-2 font-bold">{description}</p>
      <p class="text-sm mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores fuga eligendi eos soluta labore temporibus debitis odit maiores necessitatibus asperiores.</p>
      <p class="text-sm text-gray-600 font-bold">{speaker}</p>
    </div>
    <div class="flex justify-start mt-2">
        <Avatar.Root class="mx-2">
            <Avatar.Image src="https://github.com/shadcn.png" alt="@shadcn" />
            <Avatar.Fallback>CN</Avatar.Fallback>
          </Avatar.Root>
          <Avatar.Root class="mx-2">
            <Avatar.Image src="https://github.com/shadcn.png" alt="@shadcn" />
            <Avatar.Fallback>CN</Avatar.Fallback>
          </Avatar.Root>
          <Avatar.Root class="mx-2">
            <Avatar.Image src="https://github.com/shadcn.png" alt="@shadcn" />
            <Avatar.Fallback>CN</Avatar.Fallback>
          </Avatar.Root>
    </div>
    <div class="flex justify-end mt-2">
      <button class="bg-blue-500 text-white rounded-full p-2">
        <svg
          class="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 12h14M12 5l7 7-7 7"
          ></path>
        </svg>
      </button>
    </div>
  </div>
  