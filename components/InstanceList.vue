<script setup lang="ts">
import type { TableInstance } from './InputEntry.vue'

interface Props {
  instances?: TableInstance[]
}

const props = defineProps<Props>()
const modelValue = defineModel<TableInstance>()
</script>

<template>
  <ul>
    <li
      v-for="instance in instances"
      :key="instance.id"
      cursor-pointer
      border="~ rounded gray-200 dark:gray-700"
      :class="{
        'bg-gray-200': modelValue?.id === instance.id,
      }"
      @click="modelValue = instance"
    >
      {{ instance.program }}: {{ instance.dataset }} ({{ instance.vintage }})
    </li>
  </ul>
</template>
