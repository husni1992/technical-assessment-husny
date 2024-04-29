<template>
  <article>
    <header class="flex align-center justify-center border-b border-b-4 border-slate-500 p-8 bg-slate-950 items-center">
      <h1 class="text-xl">
        Pokemon
      </h1>
      <nuxt-link to="/" class="ml-auto">
        Go back to the home page
      </nuxt-link>
    </header>
    <main>
      <pokemon-list />
    </main>
  </article>
</template>
