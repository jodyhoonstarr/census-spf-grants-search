<script setup lang="ts">
</script>

<template>
  <div class="relative min-h-screen flex flex-col justify-center overflow-hidden bg-gray-50 py-8 lg:py-12">
    <!-- Document Container -->
    <div
      class="relative w-full bg-white px-6 py-12 shadow-slate-700/10 shadow-xl ring-1 ring-gray-900/5 md:mx-auto lg:max-w-4xl md:max-w-3xl lg:pb-28 lg:pt-16"
    >
      <!-- Icons -->
      <div class="mx-auto max-w-prose lg:text-lg">
        <div class="flex justify-center">
          <div flex flex-col p-2 children:m-auto>
            <img inline-block w-32 src="/grants.png">
          </div>
          <div text="3xl gray4" m="x-4 y-auto" i-carbon-add />
          <div flex flex-col p-2 children:m-auto>
            <img inline-block w-32 src="/census.png">
          </div>
        </div>
      </div>

      <!-- Content -->
      <div class="lg:prose-lg mx-auto mt-4 prose prose-slate">
        <!-- Overview -->
        <h1 class="text-secondary">
          About this Project
        </h1>
        <p>
          The goals of this project are to allow for easy access to Census Bureau data while
          searching grants opportunities on <a
            href="https://www.grants.gov/"
          >grants.gov</a> .
        </p>
        <p>
          With this work we aim to build a demo workflow and application using DS/ML techniques to lower friction for data users.
        </p>
        <!-- Data -->
        <h2 class="text-secondary">
          Data Sources
        </h2>
        <h3 class="text-primary">
          Grants.gov
        </h3>
        <p>Once a day, the Grants.gov database of grants is exported to an <a href="https://www.grants.gov/web/grants/xml-extract.html">XML File</a>.</p>

        <h3 class="text-primary">
          Data.census.gov
        </h3>
        <p>
          The <a href="https://data.census.gov/api/search">search endpoint</a> on data.census.gov powers the ability to find and route users to the appropriate data tables provided by the Census API.
        </p>

        <h3 class="text-primary">
          Census API
        </h3>
        <p>The set of datasets and tables available on data.census.gov is powered by the public API. The <a href="https://api.census.gov/data/">data endpoint</a> provides the root access location.</p>
        <!-- Project Overview -->
        <h2 class="text-secondary">
          Overview
        </h2>
        <ol>
          <li>Identify, extract, and tag keywords from the Grants.gov data</li>
          <li>Pass tags into the data.census.gov search</li>
          <li>Display related data tables</li>
          <li>Route users to the correct location in data.census.gov</li>
        </ol>
        <!-- Opportunities -->
        <h2 class="text-secondary">
          Opportunities for Improvement
        </h2>
        <ul>
          <li>Identify better grants.gov keywords via ML</li>
          <li>Pull down and parse PDF content from grants.gov opportunities</li>
          <li>Preprocess Census API metadata to improve keyword identification via ML</li>
          <li>Integrate data products not served via the Census API</li>
        </ul>
      </div>
    </div>
  </div>
</template>
