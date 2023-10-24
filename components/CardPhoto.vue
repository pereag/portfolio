<script setup>
import SpotlightCard from "@/components/SpotlightCard.vue"
import Valentin from "@/assets/images/yourFuturDev.jpg"

const items = [
  {
    image: Valentin,
  },
]
</script>

<template>
  <div class="flex mt-10 w-screen items-center justify-center gap-8">
    <SpotlightCard
      v-for="(item, index) in items"
      :key="index"
      mode="after"
      from="rgba(255,255,255,0.1)"
      class="group w-104 rounded-2xl border border-white/10 bg-white/5 p-2">
      <div class="relative">
        <img
          class="absolute inset-0 h-64 w-64 scale-110 rounded-xl object-cover blur-xl grayscale saturate-200 transition-all duration-300 group-hover:blur-[32px] group-hover:grayscale-0"
          :src="item.image" />

        <img
          class="relative h-64 w-64 rounded-xl object-cover grayscale transition-all duration-300 group-hover:grayscale-0"
          :src="item.image" />
      </div>
    </SpotlightCard>
  </div>
</template>
