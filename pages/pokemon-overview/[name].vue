<script setup lang="ts">
const route = useRoute();

const { data } = usePokemonData<Pokemon>(`pokemon/${route.params.name}`);
</script>

<template>
    <article class="w-full mx-auto p-5">
        <header class="flex items-center justify-between border-b border-gray-300 pb-4 mb-4">
            <h1 class="text-3xl font-bold capitalize">Pokemon Overview of {{ data.name }}</h1>
            <nuxt-link to="/" class="ml-auto text-blue-500 hover:underline">Go back to the home page</nuxt-link>
        </header>
        <main v-if="data" class="flex flex-col md:flex-row bg-slate-800 p-6 rounded-lg border-4 border-pink-600">

            <div class="w-full flex-1 ml-0 text-white">
                <header class="w-full p-2 flex items-center bg-pink-950 border-b border-b-4 border-pink-600">
                    <Icon name="ph:lightning-fill" class="mr-2 text-xl text-pink-700" />
                    <h2 class="font-bold text-lg capitalize text-pink-700">
                        <span v-if="!data">...</span>
                        <span v-else>
                            {{ data.name }}
                        </span>
                    </h2>
                </header>
                <div class="p-4">
                    <p><strong>Height:</strong> {{ (data.height / 10).toFixed(1) }} m</p>
                    <p><strong>Weight:</strong> {{ (data.weight / 10).toFixed(1) }} kg</p>
                    <p><strong>Types:</strong>
                    <ul class="list-disc list-inside ml-4">
                        <li v-for="item in data.types.slice(0, 10)" :key="item.type.url">{{ item.type.name }}
                        </li>
                    </ul>
                    </p>
                    <p><strong>Abilities:</strong>
                    <ul class="list-disc list-inside ml-4">
                        <li v-for="item in data.abilities.slice(0, 10)" :key="item.ability.url">{{ item.ability.name }}
                        </li>
                    </ul>
                    </p>
                    <p><strong>Moves:</strong>
                    <ul class="list-disc list-inside ml-4">
                        <li v-for="item in data.moves.slice(0, 10)" :key="item.move.url">{{ item.move.name }}</li>
                    </ul>
                    </p>
                </div>
                <div class="flex-1 flex flex-col items-center mb-6 md:mb-0">
                    <pokemon-image v-if="data" :pokemon="data" class="w-80" />
                </div>
            </div>

        </main>
        <p v-else class="text-center text-white">Loading...</p>
    </article>
</template>