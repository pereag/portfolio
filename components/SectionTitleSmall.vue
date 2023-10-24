<script setup></script>

<template>
  <h2
    class="mt-4 max-w-xl text-left font-lead text-xl font-light leading-tight tracking-wide text-white md:text-center lg:text-3xl">
    <slot />

    <span v-if="$slots.faded" class="text-white/50">
      <slot name="faded" />
    </span>
  </h2>
</template>
