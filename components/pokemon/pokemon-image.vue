<script setup lang="ts">
const props = defineProps<{
  pokemon: Pokemon
}>()

const image = computed(() => props.pokemon.sprites.front_default)
</script>

<template>
  <NuxtImg class="image" :src="image" :placeholder="[50, 25, 75, 5]" />
</template>

<style scoped>
.image {
  image-rendering: pixelated;
}
</style>
