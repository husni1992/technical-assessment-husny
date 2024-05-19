<script setup lang="ts">
const store = usePokeballStore();
const { pokeballStore } = storeToRefs(store);

const itemCountInStore = computed(() => Object.keys(pokeballStore.value).length);
</script>

<template>
  <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <nuxt-link to="/" class="font-semibold text-xl tracking-tight">
        Pokemon
      </nuxt-link>
    </div>
    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div class="ml-auto">
        <nuxt-link to="/pokemon-store">
          <a href="#"
            class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">
            <Icon name="mdi:pokeball" class="mr-2 text-xl" />
            <span>Pokeball Store 
              <span v-if="itemCountInStore" class="font-bold">
                {{ itemCountInStore }}
              </span>
            </span>
          </a>
        </nuxt-link>
      </div>
    </div>
  </nav>
</template>
