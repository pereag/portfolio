<script setup>
import ScrollReveal from "../components/ScrollReveal.vue";
import SectionBadge from "../components/SectionBadge.vue";
import SectionDescription from "../components/SectionDescription.vue";
import SectionHeading from "../components/SectionHeading.vue";
import SectionTitle from "../components/SectionTitle.vue";
import SectionWrapper from "../components/SectionWrapper.vue";
</script>

<template>
  <div id="overview" class="scroll-mt-8 py-8 lg:py-16">
    <ScrollReveal once trigger="middle" class="[--duration:500ms]">
      <SectionWrapper>
        <SectionHeading>
          <SectionBadge>Contact</SectionBadge>

          <SectionTitle>Mes réseaux</SectionTitle>

          <SectionDescription>
            Contactez-moi depuis Linkedin ou regardez mes projets personnel via Github.
          </SectionDescription>
        </SectionHeading>

        <div class="mt-8 grid gap-4 md:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-8"></div>
      </SectionWrapper>
    </ScrollReveal>
  </div>
</template>
