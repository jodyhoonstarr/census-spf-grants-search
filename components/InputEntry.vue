<script setup lang="ts">
const router = useRouter()

const keywords = ref('')
const searchRoot = 'https://data.census.gov/api/search'
const searchPostfix = '&services=search%3Arelated%3Afeaturedresults&size=50'

interface TableInstance {
  dataset: string
  description: string
  id: string
  program: string
  provider: string
  type: string
  vintage: string
}

export interface Table {
  instances: TableInstance[]
  program: string
  table: string
}

interface Response {
  response: {
    profiles: any[]
    query: string
    tables: {
      instacnes: number
      tables: Table[]
      total: number
    }
    trending: any[]
  }
}

const response = ref<Response | null>(null)
const selectedTable = ref<Table | null>(null)

async function go() {
  const query = `?q=${encodeURIComponent(keywords.value)}`
  const url = `${searchRoot}${query}${searchPostfix}`
  const { data } = await useFetch<Response>(url)
  response.value = data.value
  // router.push(`/some/path/${encodeURIComponent(name.value)}`)
}
</script>

<template>
  <div>
    <input
      id="input" v-model="keywords" placeholder="Search..." type="text" autocomplete="off" p="x-4 y-2" m="t-5"
      w="250px" text="center" bg="transparent" border="~ rounded gray-200 dark:gray-700" outline="none active:none"
      @keydown.enter="go"
    >
    <div>
      <button m-3 text-sm btn :disabled="!keywords" @click="go">
        GO
      </button>
    </div>

    <div w-full flex justify-center>
      <div w-full>
        <TableList
          v-model="selectedTable" :tables="response?.response.tables.tables"
        />
      </div>
      <div w-full>
        <ul>
          <li>thing2</li>
          <li>thing2</li>
          <li>thing2</li>
        </ul>
      </div>
    </div>
  </div>
</template>
