<script setup lang="ts">
const store = usePokeballStore()
const { pokeballStore } = storeToRefs(store);

const pokemons = computed(() => Object.values(pokeballStore.value));
</script>

<template>
    <ul v-if="pokemons.length" class="flex gap-8 flex-wrap p-4">
        <li v-for="pokemon in pokemons" :key="pokemon.id" class="w-[25ch]">
            <pokemon-info :name="pokemon.name" />
        </li>
    </ul>
    <div v-if="!pokemons.length">
        Nothing here!
    </div>
</template>