<script setup>
import SectionWrapper from "./SectionWrapper.vue";
</script>

<template>
  <div class="py-8 lg:py-16">
    <div class="relative bg-white/2.5 py-16 md:rounded-3xl lg:rounded-[3rem] xl:px-24 xl:py-32">
      <div
        class="absolute inset-x-12 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>

      <div
        class="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-zinc-950 p-1.5">
        <div class="h-1.5 w-8 rounded-lg bg-white"></div>
      </div>

      <div
        class="absolute inset-x-12 bottom-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>

      <div
        class="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 rounded-full bg-zinc-950 p-1.5">
        <div class="h-1.5 w-8 rounded-lg bg-white"></div>
      </div>

      <SectionWrapper>
        <slot />
      </SectionWrapper>
    </div>
  </div>
</template>
