<script setup lang="ts">
const { data, fetchNextPage, hasNextPage } = usePokemonList()

const store = usePokeballStore()

const { pokeballStore } = storeToRefs(store);
</script>

<template>
  <div>
    <ul v-if="pokeballStore">
      <li v-for="key in Object.keys(pokeballStore)" :key="pokeballStore[Number(key)]['id']">
        <span>{{ pokeballStore[Number(key)]['name'] }}</span>
      </li>
    </ul>
  </div>
  <div v-if="data">
    <ul v-for="page in data.pages" :key="page.next" class="flex gap-8 flex-wrap p-4">
      <li v-for="pokemon in page.results" :key="pokemon.name" class="w-[25ch]">
        <pokemon-info :name="pokemon.name" />
      </li>
    </ul>
    <div class="flex items-center justify-center p-20">
      <UButton :disabled="!hasNextPage" size="xl" @click="fetchNextPage">
        Load more
      </UButton>
    </div>
  </div>
</template>
