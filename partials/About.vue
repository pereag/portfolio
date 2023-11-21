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
} from "@heroicons/vue/24/outline";
import ScrollReveal from "../components/ScrollReveal.vue";
import SectionWrapper from "../components/SectionWrapper.vue";

const features = [
  {
    title: "Intégration",
    icon: CommandLineIcon,
  },
  {
    title: "Javascript",
    icon: ArrowsPointingInIcon,
  },
  {
    title: "React.js",
    icon: ChatBubbleBottomCenterTextIcon,
  },
  {
    title: "Vue.js",
    icon: QueueListIcon,
  },
  {
    title: "Swift",
    icon: ChartBarIcon,
  },
  {
    title: "Wordpress",
    icon: ArrowUpOnSquareIcon,
  },
  {
    title: "Testes unitaires",
    icon: DocumentTextIcon,
  },
  {
    title: "Design web",
    icon: ArrowTrendingUpIcon,
  },
];
</script>

<template>
  <div id="features" class="scroll-mt-8">
    <ScrollReveal v-slot="{ isActive }" once class="[--duration:500ms]">
      <SectionWrapper>
        <div class="mb-8 mt-8 lg:mb-16">
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
