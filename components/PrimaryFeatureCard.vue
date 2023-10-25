<script setup>
import SpotlightCard from './SpotlightCard.vue';
</script>

<template>
  <SpotlightCard class="p-8">
    <div class="flex items-center justify-center gap-4 py-6">
      <slot name="preview" />
    </div>

    <div class="mt-4">
      <div class="text-lg text-white">
        <slot name="title" />
      </div>

      <p class="mt-4 text-sm font-light leading-relaxed text-white/75">
        <slot />
      </p>
    </div>
  </SpotlightCard>
</template>
