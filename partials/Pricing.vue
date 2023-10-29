<script setup>
import SectionBadge from "../components/SectionBadge.vue";
import SectionDescription from "../components/SectionDescription.vue";
import SectionHeading from "../components/SectionHeading.vue";
import SectionTitle from "../components/SectionTitle.vue";
import SectionWrapper from "../components/SectionWrapper.vue";
import BasicPlan from "./Pricing/BasicPlan.vue";
import StarterPlan from "./Pricing/StarterPlan.vue";
import EnterprisePlan from "./Pricing/EnterprisePlan.vue";
</script>

<template>
  <div id="pricing" class="scroll-mt-8 py-8 lg:py-16">
    <SectionWrapper>
      <SectionHeading>
        <SectionBadge>Pricing</SectionBadge>

        <SectionTitle>
          Choose the plan
          <br />
          that
          <template #faded>fits you best</template>
        </SectionTitle>

        <SectionDescription>
          Get started for free and upgrade once you feel like it. There's a plan for everyone, from
          individual users to large teams.
        </SectionDescription>
      </SectionHeading>

      <div class="mt-8 lg:mt-16">
        <div class="mx-auto grid max-w-5xl gap-4 lg:grid-cols-3 lg:gap-0">
          <StarterPlan />
          <BasicPlan />
          <EnterprisePlan />
        </div>
      </div>
    </SectionWrapper>
  </div>
</template>
