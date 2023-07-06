<script setup lang="ts">
import { storeToRefs } from 'pinia'

const route = useRoute()
const grantId = route.params.id
const store = await useGrantsStore()

// validate that the current route param id is a valid grant id
if (!store.grantExists(grantId))
  throw createError({ statusCode: 404, statusMessage: `Grant ID #${grantId} not found`, fatal: true })

const { selectedKeyword, data } = storeToRefs(store)

const title = computed(() => data.value?.opportunitytitle[grantId])
const description = computed(() => data.value?.description[grantId])
const url = computed(() => data.value?.grants_url[grantId])

// TODO add 404 redir page
// TODO get table list from data.census.gov
</script>

<template>
  <section class="w-full bg-white">
    <div class="mx-auto max-w-7xl">
      <div class="flex flex-col lg:flex-row">
        <div class="relative w-full from-white via-white to-gray-100 bg-gradient-to-r bg-cover lg:w-6/12 xl:w-7/12">
          <div class="relative my-20 h-full w-full flex flex-col items-center justify-center px-10 py-10 lg:my-0 lg:px-16 lg:py-16 xl:py-24">
            <div class="flex flex-col items-start tracking-tight lg:max-w-3xl space-y-8">
              <div class="relative">
                <h2 class="text-xl font-bold text-gray-900 xl:text-2xl">
                  {{ title }}
                </h2>
                <a :href="url" target="_blank" class="mb-2 font-medium text-secondary underline">
                  {{ url }}
                </a>
              </div>
              <p class="text-gray-700">
                {{ description }}
              </p>

              <NuxtLink
                to="/grant"
                class="w-full inline-flex items-center justify-center border border-transparent rounded-full bg-secondary px-8 py-4 text-base font-medium leading-6 text-white md:w-auto xl:px-10 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary"
              >
                Back
              </NuxtLink>
            </div>
          </div>
        </div>

        <div class="w-full bg-white lg:w-6/12 xl:w-5/12">
          <div class="h-full w-full flex flex-col items-start justify-start p-10 lg:p-16 xl:p-24">
            <h4 class="w-full text-3xl font-bold">
              Census Data Products
            </h4>
            <p class="text-lg text-gray-500">
              as sourced from <a href="https://data.census.gov" class="text-secondary underline">data.census.gov
              </a>
            </p>
            <div class="relative mt-10 w-full space-y-8">
              <div class="relative">
                <p class="font-medium text-gray-900">
                  Product #1
                </p>
                <p class="font-medium text-gray-900">
                  Stuff about
                </p>
              </div>
              <div class="relative">
                <p class="font-medium text-gray-900">
                  Product #2
                </p>
                <p class="font-medium text-gray-900">
                  Stuff about
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
