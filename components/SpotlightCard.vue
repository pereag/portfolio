<script setup>
import BaseSpotlightCard from "./BaseSpotlightCard.vue"
</script>

<template>
  <BaseSpotlightCard
    from="rgba(255,255,255,0.2)"
    class="relative rounded-[--radius] [--radius:theme(borderRadius.2xl)] lg:[--radius:theme(borderRadius.3xl)]">
    <!-- border gradient -->
    <div
      class="absolute inset-x-0 bottom-[--radius] top-0 rounded-t-[--radius] bg-gradient-to-b from-white/15 to-transparent"></div>

    <!-- top highlight -->
    <div
      class="absolute inset-x-[--radius] top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent"></div>

    <!-- background -->
    <div class="absolute inset-px rounded-[calc(var(--radius)-1px)] bg-zinc-950"></div>

    <!-- inner light -->
    <div
      class="absolute inset-0 bg-[radial-gradient(40%_128px_at_50%_0%,theme(backgroundColor.white/3%),transparent)]"></div>

    <div class="relative flex h-full flex-col">
      <slot />
    </div>
  </BaseSpotlightCard>
</template>
