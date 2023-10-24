<script setup>
import BaseSpotlightCard from "~/components/BaseSpotlightCard.vue"

const features = ["Real-time chat", "Dynamic suggestions", "Detailed analysis", "Chat history"]
</script>

<template>
  <div class="lg:flex lg:items-end lg:pb-5">
    <BaseSpotlightCard
      from="rgba(255,255,255,0.2)"
      class="relative w-full rounded-[--radius] p-8 [--radius:theme(borderRadius.2xl)] lg:rounded-l-[--radius] lg:rounded-r-none lg:[--radius:theme(borderRadius.3xl)]">
      <!-- border gradient -->
      <div
        class="lg:rounded-tb-none absolute inset-x-0 bottom-[--radius] top-0 rounded-[--radius] bg-gradient-to-b from-white/15 to-transparent lg:rounded-r-none lg:rounded-tl-[--radius]"></div>

      <!-- background -->
      <div
        class="absolute inset-px rounded-[calc(var(--radius)-1px)] bg-gradient-to-b from-zinc-950/75 to-zinc-950 lg:right-0 lg:rounded-r-none"></div>

      <div class="relative">
        <div class="font-mono text-white">Starter</div>

        <div class="mt-4 flex items-end">
          <div class="font-lead text-4xl font-bold text-white">$29</div>

          <span class="ml-1 text-sm text-white/50">/ month</span>
        </div>

        <div class="mt-8 divide-y divide-white/10 text-sm font-medium text-white/75">
          <template v-for="(feature, index) in features" :key="index">
            <div v-if="index < 4" class="py-2">{{ feature }}</div>
          </template>
        </div>

        <div class="mt-12">
          <a
            href="#"
            class="inline-block w-full rounded-lg bg-white/5 px-4 py-2 text-center font-medium text-white transition duration-300 hover:bg-white/10">
            Get started
          </a>
        </div>
      </div>
    </BaseSpotlightCard>
  </div>
</template>
