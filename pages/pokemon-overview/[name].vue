<script setup lang="ts">
const route = useRoute();
const { data } = usePokemonData<Pokemon>(`pokemon/${route.params.name}`);
</script>
<template>
    <article class="w-full mx-auto p-5 bg-gradient-to-br from-gray-900 to-gray-800 min-h-screen">
        <header class="flex items-center justify-between pb-4 mb-4">
            <h1 class="text-4xl font-bold capitalize text-white">{{ data.name }}</h1>
            <nuxt-link to="/" class="ml-auto text-pink-500 hover:text-pink-400 transition duration-300 ease-in-out">Go
                back to the home page</nuxt-link>
        </header>
        <main v-if="data"
            class="flex flex-col md:flex-row bg-gray-900 p-6 rounded-lg shadow-lg border-2 border-pink-600">
            <div class="w-full flex-1 ml-0 text-white">
                <header class="w-full p-4 flex items-center bg-pink-900 rounded-t-lg">
                    <Icon name="ph:lightning-fill" class="mr-2 text-2xl text-pink-500" />
                    <h2 class="font-bold text-xl capitalize text-white">
                        <span v-if="!data">...</span>
                        <span v-else>{{ data.name }}</span>
                    </h2>
                </header>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
                    <div>
                        <p class="mb-2"><strong class="text-pink-500">Height:</strong> {{ (data.height / 10).toFixed(1)
                            }} m</p>
                        <p class="mb-2"><strong class="text-pink-500">Weight:</strong> {{ (data.weight / 10).toFixed(1)
                            }} kg</p>
                        <p class="mb-2"><strong class="text-pink-500">Types:</strong>
                            <span v-for="(type, index) in data.types" :key="type.type.name" class="capitalize">
                                {{ type.type.name }}{{ index < data.types.length - 1 ? ', ' : '' }} </span>
                        </p>
                        <p class="mb-4"><strong class="text-pink-500">Abilities:</strong>
                        <ul class="list-disc list-inside ml-4">
                            <li v-for="item in data.abilities.slice(0, 10)" :key="item.ability.url" class="capitalize">
                                {{ item.ability.name }}</li>
                        </ul>
                        </p>
                        <p><strong class="text-pink-500">Moves:</strong>
                        <ul class="list-disc list-inside ml-4">
                            <li v-for="item in data.moves.slice(0, 10)" :key="item.move.url" class="capitalize">{{
                                item.move.name }}</li>
                        </ul>
                        </p>
                        <strong class="text-pink-500">Stats:</strong>
                        <ul class="list-disc list-inside ml-4">
                            <li v-for="stat in data.stats" :key="stat.stat.name">
                                <strong class="capitalize">{{ stat.stat.name.replace('-', ' ') }}:</strong> {{
                                    stat.base_stat }}
                            </li>
                        </ul>
                    </div>
                    <div class="flex items-center">
                        <pokemon-image v-if="data" :pokemon="data" class="w-96" />
                    </div>
                </div>
            </div>
        </main>
        <p v-else class="text-center text-white">Loading...</p>
    </article>
</template>