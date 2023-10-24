<script setup>
import SectionBadge from "~/components/SectionBadge.vue"
import SectionDescription from "~/components/SectionDescription.vue"
import SectionHeading from "~/components/SectionHeading.vue"
import SectionTitle from "~/components/SectionTitle.vue"
import SectionWrapperRounded from "~/components/SectionWrapperRounded.vue"
import Suggestions from "./SecondaryFeatures/Suggestions.vue"
import Analysis from "./SecondaryFeatures/Analysis.vue"
</script>

<template>
  <SectionWrapperRounded>
    <SectionHeading>
      <SectionBadge>Portfolio</SectionBadge>

      <SectionTitle>
        Ce que j'ai fait
        <br />

        <template #faded>Pour en arriver là aujourd'hui</template>
      </SectionTitle>

      <SectionDescription>
        Get insightful suggestions based on content you provide.
        <br class="hidden lg:block" />
        Extract and calculate key metrics from your reports instantly.
      </SectionDescription>
    </SectionHeading>

    <div class="mt-8 grid gap-4 lg:mt-16 lg:grid-cols-2 lg:gap-8">
      <Suggestions />

      <Analysis />
    </div>
  </SectionWrapperRounded>
</template>
