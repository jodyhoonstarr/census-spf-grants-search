<script setup lang="ts">
import { storeToRefs } from 'pinia'

const route = useRoute()
// @ts-expect-error make ts shut up
const grantId = route.params.id
const store = await useGrantsStore()
const { selectedKeyword, data } = storeToRefs(store)

const title = computed(() => data.value?.opportunitytitle[grantId])
const description = computed(() => data.value?.description[grantId])
const url = computed(() => data.value?.grants_url[grantId])

// TODO add guard to check for valid route param id/grantId
// TODO add 404 redir page
// TODO get table list from data.census.gov
</script>

<template>
  <div>
    <p>
      keyword: {{ selectedKeyword }}
    </p>
    <p>
      id: {{ grantId }}
    </p>
    <p>
      title:{{ title }}
    </p>
    <p>
      desc: {{ description }}
    </p>
    <p>
      url: {{ url }}
    </p>
    <div>
      <NuxtLink
        class="m-3 text-sm btn"
        to="/grant"
      >
        Back
      </NuxtLink>
    </div>
  </div>
</template>
