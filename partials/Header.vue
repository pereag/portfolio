<script setup>
import { ref } from "vue"
import { Bars2Icon, XMarkIcon } from "@heroicons/vue/24/outline"
import SectionWrapper from "~/components/SectionWrapper.vue"

const showMenu = ref(false)

const links = [
  {
    title: "A propos de moi",
    url: "#about",
  },
  {
    title: "Portfolio",
    url: "#portfolio",
  },
  {
    title: "Contact",
    url: "#contact",
  },
]
</script>

<template>
  <div class="fixed inset-x-0 top-0 z-50 bg-zinc-950/30 backdrop-blur-lg">
    <SectionWrapper>
      <header>
        <nav class="flex items-center justify-between py-4">
          <!-- logo -->
          <div>
            <a href="#" class=" text-xl inline-flex items-center gap-2">
              Valentin<span class="font-bold -ml-2">Perello.fr</span>
            </a>
          </div>

          <div class="ml-auto hidden items-center gap-8 lg:flex">
            <a
              v-for="(link, index) in links"
              :key="index"
              :href="link.url"
              class="inline-block text-sm text-white/75 transition hover:text-white">
              {{ link.title }}
            </a>
          </div>

          <button @click="showMenu = !showMenu" type="button" class="relative ml-auto inline-flex lg:hidden">
            <Bars2Icon
              :class="{
                'rotate-180 opacity-0': showMenu,
              }"
              class="h-6 w-6 transition duration-500" />
            <XMarkIcon
              :class="{
                '-rotate-180 opacity-0': !showMenu,
              }"
              class="absolute inset-0 h-6 w-6 transition duration-500" />
          </button>
        </nav>
      </header>

      <div v-show="showMenu" class="py-4">
        <ul class="flex flex-col items-center space-y-4">
          <li v-for="(link, index) in links" :key="index">
            <a :href="link.url" class="inline-block text-base font-medium text-white/75 transition hover:text-white">
              {{ link.title }}
            </a>
          </li>
        </ul>
      </div>
    </SectionWrapper>
  </div>
</template>
