<script setup lang="ts">
import type { Table } from './InputEntry.vue'

interface Props {
  tables?: Table[]
}

const props = defineProps<Props>()
const modelValue = defineModel()
</script>

<template>
  <ul>
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
  </ul>
</template>
