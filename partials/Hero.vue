<script setup>
import SectionWrapper from "~/components/SectionWrapper.vue";
</script>

<template>
  <div class="relative pt-32" id="about">
    <CardPhoto></CardPhoto>
    <div
      class="pointer-events-none absolute inset-0 bg-center bg-grid-white/10 bg-grid-16 [mask-image:radial-gradient(white,transparent_85%)]"></div>

    <SectionWrapper class="py-8 lg:py-16">
      <div class="flex flex-col items-center justify-center">
        <!-- title -->
        <h1 class="text-center font-display text-3xl font-light leading-tight lg:text-5xl">
          Développeur Frontend

          <br />

          <span class="bg-gradient-to-br from-white/90 to-white/30 bg-clip-text text-transparent"
            >Vue.js + React.js</span
          >
        </h1>

        <!-- subtitle -->
        <h2 class="mt-8 max-w-xl text-center text-lg text-white/60 lg:text-xl">
          L'informatique a toujours été ma passion, aujourd'hui c'est devenu mon travail.
        </h2>

        <!-- cta -->
        <div class="mt-8 flex flex-col items-center justify-center gap-4 lg:flex-row">
          <SpotlightButton>
            <span
              class="font-mona relative mt-px bg-gradient-to-b from-white/25 to-white bg-clip-text text-lg font-medium text-transparent transition-all duration-200">
              Mon experiences
            </span>
          </SpotlightButton>
        </div>
      </div>
    </SectionWrapper>
  </div>
</template>
