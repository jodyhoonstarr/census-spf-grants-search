<script setup lang="ts">
import type { Table } from './InputEntry.vue'

interface Props {
  tables?: Table[]
}

defineProps<Props>()
const modelValue = defineModel<Table>()
</script>

<template>
  <ul role="list" class="divide-y divide-gray-100">
    <li
      v-for="table in tables" :key="table.table"
      class="flex cursor-pointer justify-between gap-x-6 py-5 hover:bg-gray-100"
      :class="{
        'bg-gray-200 cursor-none pointer-events-none': modelValue?.table === table.table,
      }"
      @click="modelValue = table"
    >
      <div class="flex gap-x-4">
        <div i-carbon-data-table class="h-8 w-8 shrink-0" />
        <div class="min-w-0 flex-auto">
          <p class="text-left text-sm font-semibold leading-6 text-gray-900">
            {{ table.instances[0].description }}
          </p>
          <p class="mt-1 truncate text-left text-xs leading-5 text-gray-500">
            {{ table.table }} - {{ table.program }}
          </p>
        </div>
      </div>
      <div class="hidden sm:inline-flex sm:content-center sm:items-center">
        <span v-if="table.instances.length > 1" class="whitespace-nowrap rounded-full px-2 py-1 text-xs font-medium ring-1 ring-gray-200 ring-inset">
          {{ table.instances.length }} tables
        </span>
        <div
          i-carbon-chevron-right class="h-5 w-5" aria-hidden="true"
          :class="[table === modelValue ? 'rotate-90' : '']"
        />
      </div>
    </li>
  </ul>
</template>
