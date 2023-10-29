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
    description:
      "Traductions des designs en code HTML/CSS/SCSS pour créer des sites web fonctionnels et esthétiques, garantissant ainsi une expérience utilisateur optimale. Mon rôle est de donner vie à la créativité en ligne.",
    icon: CommandLineIcon,
  },
  {
    title: "Javascript",
    description:
      "En utilisant JavaScript, j'ai implémenté des algorithmes pour résoudre divers problèmes et défis informatiques. Mon travail consistait à concevoir des séquences d'instructions logiques et efficaces pour accomplir des tâches telles que le tri de données, la recherche, la manipulation de chaînes de caractères, et bien d'autres.",
    icon: ArrowsPointingInIcon,
  },
  {
    title: "React.js",
    description: "Je code en React.js pour créer des interfaces web dynamiques et interactives.",
    icon: ChatBubbleBottomCenterTextIcon,
  },
  {
    title: "Vue.js",
    description:
      "Avec Vue.js, je développe des interfaces utilisateur réactives pour les applications web, en utilisant des composants modulaires pour simplifier le développement et offrir une expérience utilisateur fluide. Mon rôle est de maximiser l'efficacité de développement tout en garantissant des applications web performantes et réactives.",
    icon: QueueListIcon,
  },
  {
    title: "Swift",
    description:
      "Développement d'applications pour les appareils Apple. Des applications iOS, macOS, watchOS et tvOS.",
    icon: ChartBarIcon,
  },
  {
    title: "Wordpress",
    description:
      "Pendant deux ans, j'ai exercé la fonction de développeur, en créant des thèmes personnalisés pour des sites vitrines avec WordPress.",
    icon: ArrowUpOnSquareIcon,
  },
  {
    title: "Testes unitaires",
    description: "Utilisation de Jest et vitest.",
    icon: DocumentTextIcon,
  },
  {
    title: "Design web",
    description:
      "Conception de sites web attractifs et ergonomiques, tout en veillant à ce qu'ils correspondent aux besoins et aux préférences des clients.",
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
