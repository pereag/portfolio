<script setup></script>

<template>
  <div>
    <div
      class="flex flex-col bg-[radial-gradient(35%_128px_at_50%_100%,theme(backgroundColor.white/5%),transparent)] pb-8 md:items-center lg:pb-16">
      <slot />
    </div>

    <div class="h-px w-full bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
  </div>
</template>
