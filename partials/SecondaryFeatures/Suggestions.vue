<script setup>
import SecondaryFeatureCard from "~/components/SecondaryFeatureCard.vue";

const suggestions = [
  "Bac+3 Développeur en application",
  "Bac+2 Designer web",
  "Bac+2 Développeur intégrateur web",
];
</script>

<template>
  <SecondaryFeatureCard>
    <div class="p-6 lg:p-8">
      <div class="text-lg text-white">Formations</div>

      <p class="mt-4 font-light leading-relaxed text-white/75">
        Du design au Développement, les formations que j'ai fait ces 10 dernères années mon permis
        d'accerire une base solide pour mon poste actuel.
      </p>
    </div>

    <div class="mt-2 pl-6 pr-6 md:pl-8 md:pr-8">
      <div
        class="flex w-full flex-col items-start gap-3 rounded-tl-xl rounded-tr-xl border-white/10 bg-white/5 p-3">
        <div
          v-for="(suggestion, index) in suggestions"
          :key="index"
          class="rounded-lg bg-white/10 px-3 py-2 text-xs font-light tracking-wide text-white">
          {{ suggestion }}
        </div>
      </div>
    </div>
  </SecondaryFeatureCard>
</template>
