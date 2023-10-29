<script setup>
import { XMarkIcon } from "@heroicons/vue/24/outline";
import DetailsContent from "../components/DetailsContent.vue";
import DetailsGroup from "../components/DetailsGroup.vue";
import DetailsItem from "../components/DetailsItem.vue";
import SectionBadge from "../components/SectionBadge.vue";
import SectionDescription from "../components/SectionDescription.vue";
import SectionHeading from "../components/SectionHeading.vue";
import SectionTitle from "../components/SectionTitle.vue";
import SectionWrapperRounded from "../components/SectionWrapperRounded.vue";

const questions = [
  {
    title: "What is Recharger?",
    content:
      "Recharger is an innovative app that allows you to chat directly with your PDF documents to extract the information you need. It simplifies document understanding and helps you save valuable time.",
  },
  {
    title: "How does Recharger work?",
    content:
      "Recharger uses advanced AI tech to understand the content of your PDFs. Just upload your document, ask the app questions as if you were chatting with a person, and get accurate and instant answers.",
  },
  {
    title: "What types of documents can I use with Recharger?",
    content:
      "Recharger works with any PDF document, making it a versatile tool — whether you're reading complex contracts, lengthy reports, or detailed user manuals.",
  },
  {
    title: "Is there a limit to the number of documents I can upload?",
    content:
      "The number of documents you can upload depends on the type of account you have. For specific details, please refer to our Pricing section.",
  },
];
</script>

<template>
  <SectionWrapperRounded id="faq" class="scroll-mt-8">
    <SectionHeading>
      <SectionBadge>Questions?</SectionBadge>

      <SectionTitle>
        Not so frequently
        <template #faded>
          asked
          <br />
          questions
        </template>
      </SectionTitle>

      <SectionDescription>
        Usually, these are made up as we have no users yet to ask any.
        <br class="hidden lg:block" />
        Anyway, you might learn something important here.
      </SectionDescription>
    </SectionHeading>

    <div class="mt-8 lg:mt-16">
      <DetailsGroup class="mx-auto max-w-3xl">
        <DetailsItem
          v-for="(question, index) in questions"
          :key="index"
          v-slot="{ isActive, toggle }"
          class="group border-b border-white/10">
          <div class="flex cursor-pointer items-center py-6" @click="toggle">
            <div
              :class="[isActive ? 'text-white' : 'text-white/75 hover:text-white']"
              class="transition">
              {{ question.title }}
            </div>

            <div class="relative ml-auto">
              <XMarkIcon
                :class="{ 'rotate-180': isActive, 'rotate-45': !isActive }"
                class="h-6 w-6 text-white/50 transition-transform duration-500" />
            </div>
          </div>

          <DetailsContent class="overflow-hidden transition-all duration-500 will-change-[height]">
            <div class="pb-6 font-light text-white/75">
              {{ question.content }}
            </div>
          </DetailsContent>
        </DetailsItem>
      </DetailsGroup>
    </div>
  </SectionWrapperRounded>
</template>
