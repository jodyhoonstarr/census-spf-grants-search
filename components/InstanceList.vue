<script setup lang="ts">
import type { TableInstance } from './InputEntry.vue'

interface Props {
  instances?: TableInstance[]
  keywords: string
}

const props = defineProps<Props>()

const rootUrl = 'https://data.census.gov/table'
</script>

<template>
  <ul role="list" class="divide-y divide-gray-100">
    <li
      v-for="instance in instances" :key="instance.id"
    >
      <a
        class="flex cursor-pointer justify-between gap-x-6 py-5 hover:bg-gray-100"
        :href="`${rootUrl}?q=${encodeURIComponent(keywords)}&tid=${instance.id}`" target="_blank"
      >
        <div class="flex gap-x-4">
          <div class="min-w-0 flex-auto">
            <p class="text-left text-sm font-semibold leading-6 text-gray-900">
              {{ instance.dataset }}
            </p>
            <p class="mt-1 truncate text-left text-xs leading-5 text-gray-500">
              {{ instance.vintage }}
            </p>
          </div>
        </div>
        <div class="hidden sm:inline-flex sm:content-center sm:items-center">
          <div i-carbon-link class="h-5 w-5 shrink-0" aria-hidden="true" />
        </div>
      </a>
    </li>
  </ul>
</template>
