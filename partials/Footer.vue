<script setup>
import SectionWrapper from "~/components/SectionWrapper.vue"
import TikTokIcon from "~/components/Icons/TikTokIcon.vue"
import XIcon from "~/components/Icons/XIcon.vue"
import YouTubeIcon from "~/components/Icons/YouTubeIcon.vue"
import Logo from "~/components/Logo.vue"

const sections = [
  {
    title: "Products",
    items: [
      {
        title: "Getting started",
        url: "#",
      },
      {
        title: "Use cases",
        url: "#",
      },
      {
        title: "API reference",
        url: "#",
      },
      {
        title: "Examples",
        url: "#",
      },
      {
        title: "FAQ",
        url: "#",
      },
    ],
  },
  {
    title: "Tools",
    items: [
      {
        title: "Invoice AI Scanner",
        url: "#",
      },
      {
        title: "Bank statement analyzer",
        url: "#",
      },
      {
        title: "Merge PDFs",
        url: "#",
      },
      {
        title: "PDF to HTML",
        url: "#",
      },
    ],
  },
  {
    title: "Resources",
    items: [
      {
        title: "Affiliate program",
        url: "#",
      },
      {
        title: "Privacy policy",
        url: "#",
      },
      {
        title: "Company",
        url: "#",
      },
      {
        title: "Terms of service",
        url: "#",
      },
    ],
  },
]

const icons = [
  {
    component: YouTubeIcon,
    name: "YouTube",
    url: "#",
  },
  {
    component: XIcon,
    name: "X / Twitter",
    url: "#",
  },
  {
    component: TikTokIcon,
    name: "TikTok",
    url: "#",
  },
]
</script>

<template>
  <div class="pt-8 lg:pt-16">
    <div
      class="relative bg-[radial-gradient(35%_128px_at_50%_0%,theme(backgroundColor.white/5%),transparent)] py-32 lg:px-24 lg:py-32">
      <div class="absolute inset-x-12 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>

      <div class="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-zinc-950 p-1.5">
        <div class="h-1.5 w-8 rounded-lg bg-white"></div>
      </div>

      <SectionWrapper>
        <div class="flex w-full flex-col gap-8 sm:flex-row">
          <div class="grid w-full grid-cols-2 flex-row gap-8 sm:w-1/3 sm:flex-col sm:gap-7 lg:flex">
            <Logo class="text-lg font-semibold" />

            <div class="flex gap-3 lg:items-center">
              <a v-for="(icon, index) in icons" :key="index" :href="icon.url">
                <span class="sr-only">{{ icon.name }}</span>
                <component :is="icon.component" class="h-6 w-6 text-white" />
              </a>
            </div>
          </div>

          <div class="grid w-full grid-cols-2 gap-8 sm:w-2/3 lg:grid-cols-3">
            <div v-for="section in sections" :key="section.title" class="flex flex-col gap-4">
              <p class="text-sm text-white">{{ section.title }}</p>

              <ul class="mt-3 space-y-3">
                <li v-for="item in section.items" :key="item.title">
                  <a class="text-sm font-light text-white/75 transition hover:text-white" :href="item.url">
                    {{ item.title }}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  </div>
</template>
