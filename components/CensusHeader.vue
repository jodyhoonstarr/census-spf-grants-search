<template>
  <div class="relative h-16 bg-census">
    <div
      class="relative z-20 h-16 flex items-center justify-center align-middle text-white shadow md:justify-between"
    >
      <div class="flex items-center justify-center px-4 py-2 divide-x divide-white">
        <a href="https://www.census.gov/" class="cursor-pointer pr-4">
          <img src="/census-logo-white.svg" class="h-8" alt="United States Census Bureau">
        </a>
      </div>

      <div class="hidden items-center px-2 text-sm md:inline-flex" align-top>
        <NuxtLink
          to="/lookup"
          class="inline-flex cursor-pointer px-2 py-2"
        >
          <div class="i-carbon-data-share pr-6" /> Lookup
        </NuxtLink>

        <NuxtLink
          to="/about"
          class="inline-flex cursor-pointer px-2 py-2"
        >
          <div class="i-carbon-information pr-6" /> About
        </NuxtLink>

        <NuxtLink
          to="/"
          class="inline-flex cursor-pointer px-2 py-2"
        >
          <div class="i-carbon-home pr-6" /> Home
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
