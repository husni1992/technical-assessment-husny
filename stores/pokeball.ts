import { defineStore } from 'pinia'

export const usePokeballStore = defineStore('pokeball', () => {
  function addPokemon(pokemon: Pokemon) {
    console.log('adding pokemon', pokemon)
  }

  return {
    addPokemon,
  }
})
