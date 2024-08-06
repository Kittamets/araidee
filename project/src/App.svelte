<script>
  import MeetingCard from './pages/MeetingCard.svelte';
</script>

<main class="p-4 bg-gray-100 min-h-screen">
  <div class="relative mb-4">
    <input
      type="text"
      placeholder="Search"
      class="w-full max-w-xs px-4 py-2 text-sm text-gray-900 bg-white border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
    />
    <button
      class="absolute inset-y-0 right-0 flex items-center pr-3 focus:outline-none"
    >
      <svg
        class="w-4 h-4 text-gray-500"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"
        ></path>
      </svg>
    </button>
  </div>

  <section class="bg-blue-800 p-4 rounded-lg h-3/6">
    <h2 class="text-white text-xl mb-4">Meeting Soon</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8 h-auto">
      <MeetingCard title="Meeting 1" description="Description" speaker="Speaker" />
      <MeetingCard title="Meeting 2" description="Description" speaker="Speaker" />
      <MeetingCard title="Meeting 3" description="Description" speaker="Speaker" />
      <MeetingCard title="Meeting 4" description="Description" speaker="Speaker" />
      <MeetingCard title="Meeting 5" description="Description" speaker="Speaker" />
      <MeetingCard title="Meeting 6" description="Description" speaker="Speaker" />

    </div>
    <h2 class="text-white text-xl mb-4">Earlier Meeting</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 h-full">
      <MeetingCard title="Meeting 7" description="Description" speaker="Speaker" />
      <MeetingCard title="Meeting 8" description="Description" speaker="Speaker" />
      <MeetingCard title="Meeting 9" description="Description" speaker="Speaker" />
    </div>
  </section>

  <button class="fixed bottom-4 right-4 bg-red-500 text-white rounded-full p-4 shadow-lg">
    <svg
      class="w-6 h-6"
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
</main>
