<script setup lang="ts">
import { storeToRefs } from 'pinia'

const store = await useGrantsStore()
const { keywords, selectedKeyword, data, ids } = storeToRefs(store)
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

      <!-- Table -->
      <div class="mt-8 flow-root">
        <div class="-mx-4 -my-2 lg:-mx-8 sm:-mx-6">
          <div class="inline-block min-w-full py-2 align-middle lg:px-8 sm:px-6">
            <table class="min-w-full table-auto divide-y divide-gray-300">
              <thead class="text-sm font-semibold">
                <tr>
                  <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-gray-900 sm:pl-0">
                    Title
                  </th>
                  <th scope="col" class="px-3 py-3.5 text-left text-gray-900">
                    Source
                  </th>
                  <th scope="col" class="relative py-3.5 pl-3 pr-4 text-sm sm:pr-0">
                    <span class="sr-only">Details</span>
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200">
                <tr v-for="grantId in ids" :key="grantId">
                  <td class="py-4 pr-3 text-left text-sm font-medium text-gray-900 sm:pl-0">
                    {{ data?.opportunitytitle[grantId] }}
                  </td>
                  <td class="px-3 py-4 text-sm text-gray-500">
                    <a :href="data?.grants_url[grantId]" class="text-secondary underline">Link</a>
                  </td>
                  <td class="relative py-4 pl-3 pr-4 text-nowrap text-sm font-medium sm:pr-0">
                    <NuxtLink
                      as="button"
                      class="cursor-pointer rounded bg-secondary px-2 py-0.5 text-xs font-semibold text-white"
                      :to="`/grant/${grantId}`"
                    >
                      details
                    </NuxtLink>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <!-- End Table -->
      </div>
    </div>
  </div>
</template>
