<script setup>
import { ChatBubbleLeftRightIcon, UserIcon, DocumentTextIcon } from "@heroicons/vue/24/outline"
import PrimaryFeatureCard from "~/components/PrimaryFeatureCard.vue"

const dots = new Array(3)
</script>

<template>
  <PrimaryFeatureCard>
    <template #preview>
      <div
        class="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 shadow">
        <UserIcon class="relative h-8 w-8 fill-white/10 stroke-[1] text-white" />
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
        <ChatBubbleLeftRightIcon class="relative h-8 w-8 fill-cyan-400/10 stroke-[1] text-cyan-400" />
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
        <DocumentTextIcon class="relative h-8 w-8 fill-teal-400/10 stroke-[1] text-teal-400" />
      </div>
    </template>

    <template #title> Real-time responses </template>

    <template #default>
      Pop the questions, pull out information, or get a quick summary of your documents using our smart AI. It's all
      instant and tailored for you.
    </template>
  </PrimaryFeatureCard>
</template>
