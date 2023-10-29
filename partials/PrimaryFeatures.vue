<script setup>
import ScrollReveal from "../components/ScrollReveal.vue";
import SectionBadge from "../components/SectionBadge.vue";
import SectionDescription from "../components/SectionDescription.vue";
import SectionHeading from "../components/SectionHeading.vue";
import SectionTitle from "../components/SectionTitle.vue";
import SectionWrapper from "../components/SectionWrapper.vue";
import Documents from "./PrimaryFeatures/Documents.vue";
import Responses from "./PrimaryFeatures/Responses.vue";
import References from "./PrimaryFeatures/References.vue";
</script>

<template>
  <div id="overview" class="scroll-mt-8 py-8 lg:py-16">
    <ScrollReveal v-slot="{ isActive }" once trigger="middle" class="[--duration:500ms]">
      <SectionWrapper>
        <SectionHeading>
          <SectionBadge>Overview</SectionBadge>

          <SectionTitle>
            Revolutionizing the way

            <template #faded>
              you
              <br />
              understand documents
            </template>
          </SectionTitle>

          <SectionDescription>
            Recharger lets you have a conversation with your documents.
            <br class="hidden lg:block" />
            Just ask and retrieve the information you need, all in a simple chat.
          </SectionDescription>
        </SectionHeading>

        <div class="mt-8 grid gap-4 md:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-8">
          <Documents
            class="transition-all delay-150 duration-[--duration]"
            :class="{ 'translate-y-8 opacity-0': !isActive }" />

          <Responses
            class="transition-all delay-300 duration-[--duration]"
            :class="{ 'translate-y-8 opacity-0': !isActive }" />

          <References
            class="transition-all delay-[450ms] duration-[--duration]"
            :class="{ 'translate-y-8 opacity-0': !isActive }" />
        </div>
      </SectionWrapper>
    </ScrollReveal>
  </div>
</template>
