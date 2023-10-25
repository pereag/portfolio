<script setup>
import BaseSpotlightCard from './BaseSpotlightCard.vue';
</script>

<template>
  <div class="lg:rounded-3xl lg:border lg:border-white/10 lg:bg-white/2.5 lg:p-2">
    <BaseSpotlightCard
      :size="640"
      from="rgba(255,255,255,0.10)"
      class="overflow-hidden rounded-2xl border border-white/10 bg-white/2.5 shadow-md shadow-zinc-950/50">
      <slot />
    </BaseSpotlightCard>
  </div>
</template>
