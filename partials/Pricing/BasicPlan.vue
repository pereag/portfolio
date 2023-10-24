<script setup>
import SpotlightCard from "~/components/SpotlightCard.vue"

const features = [
  "Real-time chat",
  "Dynamic suggestions",
  "Detailed analysis",
  "Chat history",
  "Intelligent summarization",
  "Key metric identification",
]
</script>

<template>
  <SpotlightCard class="p-8">
    <div class="font-mono text-white">Basic</div>

    <div class="mt-4 flex items-end">
      <div class="font-lead text-4xl font-bold text-white">$49</div>

      <span class="ml-1 text-sm text-white/50">/ month</span>
    </div>

    <div class="mt-8 divide-y divide-white/10 text-sm font-medium text-white/75">
      <template v-for="(feature, index) in features" :key="index">
        <div class="py-2">{{ feature }}</div>
      </template>
    </div>

    <div class="mt-12">
      <a
        href="#"
        class="inline-block w-full rounded-lg bg-white px-4 py-2 text-center font-medium text-zinc-950 transition duration-300 hover:bg-white/80">
        Get started for free
      </a>
    </div>
  </SpotlightCard>
</template>
