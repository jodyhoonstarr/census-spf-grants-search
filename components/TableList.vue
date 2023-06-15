<script setup lang="ts">
import type { Table } from './InputEntry.vue'

interface Props {
  tables?: Table[]
}

const props = defineProps<Props>()
</script>

<template>
  <ul>
    <li v-for="table in tables" :key="table.table">
      {{ table.program }} - {{ table.table }} ({{ table.instances.length }})
    </li>
  </ul>
</template>
