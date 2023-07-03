<template>
  <main h-full flex flex-col>
    <CensusHeader />
    <div class="mx-auto text-center container">
      <slot />
    </div>
    <CensusFooter />
  </main>
</template>
