<script setup></script>

<template>
  <h2
    class="mt-4 text-left font-display text-2xl font-light leading-[1.125] text-white md:text-center md:text-4xl lg:text-5xl">
    <slot />

    <span v-if="$slots.faded" class="text-white/50">
      <slot name="faded" />
    </span>
  </h2>
</template>
