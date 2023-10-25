<script setup>
import SecondaryFeatureCard from '~/components/SecondaryFeatureCard.vue';

const metrics = [
  {
    title: 'Recurring revenue',
    progress: 75,
    value: '$165,250',
  },
  {
    title: 'Gross revenue',
    progress: 90,
    value: '$208,600',
  },
  {
    title: 'Operating expenses',
    progress: 30,
    value: '$28,000',
  },
  {
    title: 'Net profit',
    progress: 50,
    value: '$180,600',
  },
];
</script>

<template>
  <SecondaryFeatureCard>
    <div class="px-6 md:px-8">
      <div
        class="flex w-full flex-col items-start gap-2 rounded-b-xl border-white/10 bg-white/5 p-3 lg:gap-3">
        <div v-for="(metric, index) in metrics" :key="index" class="w-full p-1 lg:p-2">
          <div class="flex w-full items-center justify-between gap-3 lg:grid lg:grid-cols-5">
            <div class="text-xs font-light text-white/75 lg:col-span-2">{{ metric.title }}</div>

            <div class="col-span-2 hidden items-center lg:flex">
              <div class="w-full rounded-full bg-white/25">
                <div
                  :style="{ width: `${metric.progress}%` }"
                  class="h-2 rounded-full bg-white/75"></div>
              </div>
            </div>

            <div class="text-right text-xs font-light text-white lg:col-span-1">
              {{ metric.value }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-2 p-6 md:p-8">
      <div class="text-lg text-white">Detailed analysis</div>

      <p class="mt-4 font-light leading-relaxed text-white/75">
        Recharger dives deep into your documents, identifying and pulling crucial metrics,
        especially from complex financial and data reports. Simplify your data processing and grasp
        key insights effectively.
      </p>
    </div>
  </SecondaryFeatureCard>
</template>
