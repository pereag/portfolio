<script setup>
import {
  ArrowTrendingUpIcon,
  ArrowUpOnSquareIcon,
  ArrowsPointingInIcon,
  ChartBarIcon,
  ChatBubbleBottomCenterTextIcon,
  CommandLineIcon,
  DocumentTextIcon,
  QueueListIcon,
} from "@heroicons/vue/24/outline"
import ScrollReveal from "~/components/ScrollReveal.vue"
import SectionBadge from "~/components/SectionBadge.vue"
import SectionHeadingHighlighted from "~/components/SectionHeadingHighlighted.vue"
import SectionTitleSmall from "~/components/SectionTitleSmall.vue"
import SectionWrapper from "~/components/SectionWrapper.vue"

const features = [
  {
    title: "Intégration",
    description: "Transform complex content into understandable format",
    icon: CommandLineIcon,
  },
  {
    title: "Javascript",
    description: "Rapidly encapsulate main ideas and key points",
    icon: ArrowsPointingInIcon,
  },
  {
    title: "React.js",
    description: "Interact directly and personally with your document",
    icon: ChatBubbleBottomCenterTextIcon,
  },
  {
    title: "Vue.js",
    description: "Get insightful suggestions based on content",
    icon: QueueListIcon,
  },
  {
    title: "Swift",
    description: "Extract and calculate vital statistics instantly",
    icon: ChartBarIcon,
  },
  {
    title: "Wordpress",
    description: "Simply drag and drop your PDFs to start chatting",
    icon: ArrowUpOnSquareIcon,
  },
  {
    title: "Testes unitaires",
    description: "Simplify legal jargon in contracts and official documents",
    icon: DocumentTextIcon,
  },
  {
    title: "Design web",
    description: "Dive deep into documents for comprehensive insights.",
    icon: ArrowTrendingUpIcon,
  },
]
</script>

<template>
  <div id="features" class="scroll-mt-8">
    <ScrollReveal v-slot="{ isActive }" once trigger="bottom" class="[--duration:500ms]">
      <SectionWrapper>
        <div class="mt-8 lg:mb-16 mb-8">
          <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-y-16">
            <div
              v-for="(feature, index) in features"
              :key="index"
              :style="{ '--delay': `${index * 150}ms` }"
              class="transition-all delay-[--delay] duration-[--duration]"
              :class="{ 'translate-y-8 opacity-0': !isActive }">
              <div class="flex items-center">
                <div class="rounded border border-white/5 bg-white/5 p-1">
                  <component :is="feature.icon" class="h-5 w-5 fill-white/10 text-white" />
                </div>

                <div class="ml-4 text-lg">{{ feature.title }}</div>
              </div>

              <div class="ml-11 mt-2 pl-0.5 text-sm font-light leading-relaxed text-white/75">
                {{ feature.description }}
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </ScrollReveal>
  </div>
</template>
