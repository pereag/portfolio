<script setup>
import { DocumentTextIcon, ClipboardDocumentCheckIcon, DocumentIcon } from "@heroicons/vue/24/outline"
import PrimaryFeatureCard from "~/components/PrimaryFeatureCard.vue"

const dots = new Array(3)
</script>

<template>
  <PrimaryFeatureCard>
    <template #preview>
      <div
        class="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 shadow">
        <DocumentIcon class="relative h-8 w-8 fill-white/10 stroke-[1] text-white" />
      </div>

      <div class="w-9 overflow-hidden">
        <div class="flex w-max animate-marquee justify-end [animation-direction:reverse] [animation-duration:2s]">
          <div v-for="(dot, index) in [...dots, ...dots]" :key="index" class="px-1">
            <div class="h-1 w-1 shrink-0 rounded-full bg-white/40"></div>
          </div>
        </div>
      </div>

      <div
        class="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
        <DocumentTextIcon class="relative h-8 w-8 fill-green-400/10 stroke-[1] text-green-400" />
      </div>

      <div class="w-9 overflow-hidden">
        <div class="flex w-max animate-marquee justify-end [animation-direction:reverse] [animation-duration:2s]">
          <div v-for="(dot, index) in [...dots, ...dots]" :key="index" class="px-1">
            <div class="h-1 w-1 shrink-0 rounded-full bg-white/40"></div>
          </div>
        </div>
      </div>

      <div
        class="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 shadow">
        <ClipboardDocumentCheckIcon class="relative h-8 w-8 fill-violet-400/10 stroke-[1] text-violet-400" />
      </div>
    </template>

    <template #title> References included </template>

    <template #default>
      Every answer you receive comes directly from your uploaded documents – we always include the source for full
      transparency.
    </template>
  </PrimaryFeatureCard>
</template>
