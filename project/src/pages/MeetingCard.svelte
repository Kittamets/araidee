<script>
    export let title;
    export let description;
    export let speaker;
  </script>
  
  <div class="bg-white rounded-lg p-4 shadow-md flex flex-col justify-between h-full">
    <div>
      <h3 class="text-lg font-bold mb-2">{title}</h3>
      <p class="text-sm mb-2">{description}</p>
      <p class="text-sm text-gray-600">{speaker}</p>
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
  