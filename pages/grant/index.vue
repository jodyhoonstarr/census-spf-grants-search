<script setup lang="ts">

</script>

<template>
  <Suspense>
    <!-- component with nested async dependencies -->
    <GrantsList />

    <!-- loading state via #fallback slot -->
    <template #fallback>
      Loading...
    </template>
  </Suspense>
</template>
