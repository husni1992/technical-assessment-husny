<script setup lang="ts">

const props = defineProps<{
  name: string
}>();

const { data } = usePokemonData<Pokemon>(`pokemon/${props.name}`);

const { data: aidata } = useOpenaiData("test")

const store = usePokeballStore();
const { pokeballStore } = storeToRefs(store);

const pokemon = computed(() => data.value);

function handleAddingToBasket() {
  if (pokemon.value) {
    const pokemonInStore = pokeballStore.value[pokemon.value.id];

    if (pokemonInStore) {
      store.removePokemon(pokemon.value.id);
    } else {
      store.addPokemon(pokemon.value);
    }
  }
}

const buttonColor = computed(() => {
  return pokemon.value && pokeballStore.value[pokemon.value.id] ? 'white' : 'primary';
}); 
</script>

<template>
  <div v-if="pokemon" class="border-4 border-pink-600 flex flex-col rounded-lg bg-slate-800">
    <header class="p-2 flex items-center bg-pink-950 border-b border-b-4 border-pink-600">
      <Icon name="ph:lightning-fill" class="mr-2 text-xl text-pink-700" />
      <h2 class="font-bold text-lg capitalize text-pink-700">
        <span v-if="!data">...</span>
        <span v-else>
          {{ pokemon.name }}
        </span>
      </h2>
    </header>
    <div class="p-2">
      <p class="text-white">Height: <span v-if="data">{{ pokemon.height }}</span><span v-else>...</span></p>
      <p class="text-white">Weight: <span v-if="data">{{ pokemon.weight }}</span><span v-else>...</span></p>
    </div>
    <div class="h-[23ch]">
      <pokemon-image v-if="data" :pokemon="data" class="w-full" />
    </div>
    <footer class="flex p-2 justify-items-center">
      <nuxt-link :to="{ name: 'pokemon-overview-name', params: { name: data?.name || '' } }">
        <UButton color="blue" variant="solid">
          Overview
        </UButton>
      </nuxt-link>

      <UButton :color="buttonColor" class="ml-auto" :disabled="!data" @click.stop="handleAddingToBasket">
        {{ pokeballStore[pokemon.id] ? "Remove" : "Add" }}
      </UButton>
    </footer>
  </div>
</template>
