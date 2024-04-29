import { useInfiniteQuery } from '@tanstack/vue-query'

export default function usePokemonList() {
  return useInfiniteQuery({
    queryKey: ['pokemon-list', 'pokemon'],
    queryFn: ({ pageParam = 1 }) => {
      return $pokemon<{
        count: number
        next: string | null
        previous: string | null
        results: {
          name: string
          url: string
        }[]
      }>(`pokemon?limit=20&offset=${(pageParam - 1) * 20}`)
    },
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined
    },
    initialPageParam: 1,
  })
}
