import { acceptHMRUpdate, defineStore } from 'pinia'

interface GrantJSON {
  opportunitytitle: { [key: string]: string }
  opportunitynumber: { [key: string]: string }
  description: { [key: string]: string }
  grants_url: { [key: string]: string }
}

const KEYWORDS = ['data', 'business', 'community', 'county', 'demographics', 'education', 'employment', 'population', 'race', 'sex', 'tract', 'tribal'] as const
type Keyword = typeof KEYWORDS[number]

export const useGrantsStore = defineStore('grants', () => {
  const keywords = ref(KEYWORDS)
  const selectedKeyword = ref<Keyword>('data')
  const data = ref<GrantJSON | undefined>(undefined)

  // Automatically fetch grants when the selected keyword changes.
  const fetchGrants = async () => {
    const { data: grantsData } = await useFetch<GrantJSON>(`/json/grants_${selectedKeyword.value}.json`)
    if (grantsData.value)
      data.value = grantsData.value
  }
  onMounted(() => fetchGrants())
  watch(selectedKeyword, () => fetchGrants())

  const ids = computed(() => {
    return Object.keys(data.value?.opportunitynumber || {})
  })

  function grantExists(id: string): boolean {
    return ids.value.includes(id)
  }

  return {
    keywords,
    selectedKeyword,
    data,
    ids,
    grantExists,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useGrantsStore, import.meta.hot))
