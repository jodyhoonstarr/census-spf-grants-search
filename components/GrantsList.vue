<script setup lang="ts">
interface GrantJSON {
  opportunitytitle: Map<string, string>
  opportunitynumber: Map<string, string>
  description: Map<string, string>
  grants_url: Map<string, string>
}

const keywords = ['business', 'community', 'county', 'demographics', 'education', 'employment', 'population', 'race', 'sex', 'tract', 'tribal'] as const
const selectedKeyword = ref<typeof keywords[number] | 'data'>('data')
const url = computed(() => `/json/grants_${selectedKeyword.value}.json`)
const { data, status } = await useFetch<GrantJSON>(url)

const grantIds = computed(() => {
  // take the opportunitynumber keys, convert them to numbers, sort them, and return them
  return Object.keys(data.value?.opportunitynumber || {}).map(k => Number.parseInt(k)).sort((a, b) => a - b)
})
</script>

<template>
  <div>
    <div class="mx-auto max-w-7xl px-10 py-16 lg:px-8 sm:px-6 sm:py-24 sm:text-center">
      <h2 class="text-base font-semibold tracking-wide uppercase text-secondary">
        Grants by Keyword
      </h2>
      <p class="mt-1 text-4xl font-extrabold text-primary lg:text-6xl sm:text-5xl sm:tracking-tight">
        Grants.gov Opportunities
      </p>
      <p class="mx-auto mt-5 max-w-3xl pb-4 text-xl text-gray-500">
        Browse the grants data below or filter by a set of preselected keywords.
      </p>
      <div flex="~ wrap" pb-6 sm:justify-center>
        <button
          v-for="keyword in keywords"
          :key="keyword"
          class="m-1 cursor-pointer rounded-full px-2.5 py-0.5 text-xs font-semibold text-white"
          :class="keyword === selectedKeyword ? 'bg-primary' : 'bg-secondary'"
          @click="selectedKeyword = keyword"
        >
          {{ keyword }}
        </button>
      </div>
      <p>
        selectedKeyword: {{ selectedKeyword }}
      </p>
      <p>
        status: {{ status }}
      </p>
      <p>
        data: {{ grantIds }}
      </p>
    </div>
  </div>
</template>
