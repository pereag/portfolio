<script setup></script>

<template>
  <ScrollReveal v-slot="{ isActive }" once class="[--duration:700ms]">
    <SectionWrapper>
      <div
        once
        class="p-6 transition-all duration-[--duration] lg:p-8"
        :class="{ 'translate-y-8 opacity-0': !isActive }">
        <p class="mt-4 font-light leading-relaxed text-white/75">
          Aujourd'hui, je suis ingénieur étude et développement chez smile depuis plus d’un an.
        </p>
        <p class="mt-4 font-light leading-relaxed text-white/75">
          Mes objectifs actuels sont de monter en compétences sur le développement backend et de
          devenir lead developer dans les 3/4 prochaines années.
        </p>
        <p class="mt-4 font-light leading-relaxed text-white/75">
          Chez Smile, j'ai pu améliorer mes compétences en ayant la chance de travailler pour le
          ministère de la transition écologique pendant plus de 7 mois en tant que développeur front
          vue.js. Aussi, je suis actuellement sur le développement d'une application open source de
          composant réutilisable en React.js.
        </p>
        <p class="mt-4 font-light leading-relaxed text-white/75">
          Avant ça, j’étais Développeur / Designer web et mobile à l’agence 33 degrés depuis plus de
          2 ans et demi. Lors de ces 2 années, j'ai pu designer et développer de nombreux sites
          vitrine, Landing page, e-commerce et sur-mesure. Aussi, je me suis occupé de la refonte et
          de l'évolution du thème sur mesure WordPress de l'agence. Côté frontend j'ai aussi
          participé en recherche et développement, pour intégrer les technologies du moment comme
          locomotive.js, vue.js, bodymovin ...
        </p>
        <p class="mt-4 font-light leading-relaxed text-white/75">
          Ma formation de développeur Swift en alternance m’a aussi permis d'acquérir l'expérience
          nécessaire pour créer des applications professionnelles et accessibles sur IOS.
        </p>
      </div>
    </SectionWrapper>
  </ScrollReveal>
</template>
