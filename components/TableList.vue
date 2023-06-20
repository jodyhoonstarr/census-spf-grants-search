<script setup lang="ts">
import type { Table } from './InputEntry.vue'

interface Props {
  tables?: Table[]
}

const props = defineProps<Props>()
const modelValue = defineModel<Table>()
</script>

<template>
  <!-- <ul>
    <li
      v-for="table in tables"
      :key="table.table"
      cursor-pointer
      border="~ rounded gray-200 dark:gray-700"
      :class="{
        'bg-gray-200': modelValue?.table === table.table,
      }"
      @click="modelValue = table"
    >
      {{ table.program }} - {{ table.table }} ({{ table.instances.length }})
    </li>
  </ul> -->

  <ul role="list" class="divide-y divide-gray-100">
    <li v-for="table in tables" :key="table.table" class="flex justify-between gap-x-6 py-5">
      <div class="flex gap-x-4">
        <div i-carbon-data-table class="h-12 w-12" />
        <div class="min-w-0 flex-auto">
          <p class="text-left text-sm font-semibold leading-6 text-gray-900">
            {{ table.table }}
          </p>
          <p class="mt-1 truncate text-left text-xs leading-5 text-gray-500">
            {{ table.program }}
          </p>
        </div>
      </div>
      <div class="hidden sm:inline-flex sm:content-center sm:items-end">
        <div v-if="table.instances.length > 1" class="rounded-full px-2 py-1 text-xs font-medium ring-1 ring-inset">
          {{ table.instances.length }} tables
        </div>
        <div i-carbon-chevron-right class="mx-2 my-1 h-5 w-5" aria-hidden="true" />
      </div>
    </li>
  </ul>
</template>
