<script setup>
import { DocumentIcon, ChatBubbleLeftRightIcon } from '@heroicons/vue/24/outline';
import PrimaryFeatureCard from '~/components/PrimaryFeatureCard.vue';

const dots = new Array(9);
</script>

<template>
  <PrimaryFeatureCard>
    <template #preview>
      <div
        class="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 shadow">
        <DocumentIcon class="relative h-8 w-8 fill-white/10 stroke-[1] text-white" />
      </div>

      <div class="w-[6.5rem] overflow-hidden">
        <div
          class="flex w-max animate-marquee justify-end [animation-direction:reverse] [animation-duration:6s]">
          <div v-for="(dot, index) in [...dots, ...dots]" :key="index" class="px-1">
            <div class="h-1 w-1 shrink-0 rounded-full bg-white/40"></div>
          </div>
        </div>
      </div>

      <div
        class="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 shadow">
        <ChatBubbleLeftRightIcon
          class="relative h-8 w-8 fill-cyan-400/10 stroke-[1] text-cyan-400" />
      </div>
    </template>

    <template #title> Upload documents </template>

    <template #default>
      Effortlessly upload the PDFs you want to chat with. Get things started with just a few clicks
      and your documents are ready for a chat.
    </template>
  </PrimaryFeatureCard>
</template>
