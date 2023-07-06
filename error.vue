<script setup lang="ts">
const error = useError()
</script>

<template>
  <div>
    <NuxtLayout name="default">
      <div
        mx-auto mt-px max-w-sm py-32 text-left
        sm="max-w-md px-4"
        md="max-w-none text-center"
      >
        <h1
          text="3xl left primary"
          sm="text-4xl"
          md="text-center text-7xl"
          lg="text-8xl"
          font-bold leading-10 tracking-tight
        >
          <span text-secondary>Sorry!</span><br> Something went wrong.
        </h1>

        <div
          mx-auto mt-5 text-gray-400
          md="mt-8 max-w-lg text-center text-xl"
        >
          {{ error?.message || "The app failed unexpectedly. Sorry for the inconvenience. Please start over." }}
        </div>

        <div
          mt-8 items-center justify-center text-center space-y-4
          flex="~ col"
          sm="flex-row space-x-4 space-y-0"
        >
          <span relative w-full inline-flex md="w-auto">

            <NuxtLink
              to="/grant"
              class="w-full inline-flex items-center justify-center border border-transparent rounded-full bg-secondary px-8 py-4 text-base font-medium leading-6 text-white md:w-auto xl:px-10 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary"
              @click="clearError({ redirect: '/grant' })"
            >
              Browse Grants
            </NuxtLink>
          </span>

          <span relative w-full inline-flex md="w-auto">

            <NuxtLink
              to="/"
              class="w-full inline-flex items-center justify-center border border-transparent rounded-full bg-gray-100 px-8 py-4 text-base font-medium leading-6 text-secondary md:w-auto hover:bg-gray-200 xl:px-10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200"
              @click="clearError({ redirect: '/' })"
            >Go Home</NuxtLink>

          </span>
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>
