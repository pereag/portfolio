<script setup>
import SectionBadge from "../components/SectionBadge.vue";
import SectionHeading from "../components/SectionHeading.vue";
import SectionTitle from "../components/SectionTitle.vue";
import SectionWrapperRounded from "../components/SectionWrapperRounded.vue";
import Suggestions from "./SecondaryFeatures/Suggestions.vue";
</script>

<template>
  <SectionWrapperRounded>
    <SectionHeading>
      <SectionBadge>Experiences</SectionBadge>

      <SectionTitle>
        Ce que j'ai fait
        <br />

        <template #faded>Pour en arriver là aujourd'hui</template>
      </SectionTitle>
    </SectionHeading>
    <div class="mt-8lg:mt-16 mx-auto lg:grid-cols-2 lg:gap-12">
      <Suggestions />
    </div>
  </SectionWrapperRounded>
</template>
