<script setup>
import SecondaryFeatureCard from "~/components/SecondaryFeatureCard.vue"

const suggestions = [
  "Extract profit metrics from the financial report",
  "Extract the key findings",
  "Identify the milestones in the project plan",
  "Find the warranty conditions",
]
</script>

<template>
  <SecondaryFeatureCard>
    <div class="p-6 lg:p-8">
      <div class="text-lg text-white">Dynamic suggestions</div>

      <p class="mt-4 font-light leading-relaxed text-white/75">
        Recharger automatically gives you helpful hints and guesses what you might ask next. This makes extracting data
        from your documents more intuitive and efficient.
      </p>
    </div>

    <div class="mt-2 pl-6 md:pl-8">
      <div class="flex w-full flex-col items-start gap-3 rounded-tl-xl border-white/10 bg-white/5 p-3">
        <div
          v-for="(suggestion, index) in suggestions"
          :key="index"
          class="rounded-lg bg-white/10 px-3 py-2 text-xs font-light tracking-wide text-white">
          {{ suggestion }}
        </div>
      </div>
    </div>
  </SecondaryFeatureCard>
</template>
