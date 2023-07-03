<template>
  <main h-full flex flex-col>
    <CensusHeader />
    <div class="mx-auto container">
      <slot />
    </div>
    <CensusFooter />
  </main>
</template>
