// store/pokeballStore.ts
import { defineStore } from 'pinia';

type PokeballState = {
  pokeballStore: {
    [key: number]: Pokemon
  }
}

const MAX_POKEMON_COUNT = 6;

export const usePokeballStore = defineStore('pokeball', {
  state: (): PokeballState => ({
    pokeballStore: {}
  }),
  actions: {
    addPokemon(pokemon: Pokemon) {
      if (this.pokeballStore[pokemon.id]) {
        alert("Already added")
        return;
      }

      if (Object.keys(this.pokeballStore).length >= MAX_POKEMON_COUNT) {
        alert('Cannot add more Pokemon. Maximum limit reached.');
        return;
      }

      this.pokeballStore[pokemon.id] = { ...pokemon };
    },
    removePokemon(id: number) {
      const { [id]: _, ...newStore } = this.pokeballStore;
      this.pokeballStore = newStore;
    }
  }
});
