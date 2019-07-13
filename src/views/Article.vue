<template>
    <article>
        <h1 v-if="$route.name === 'post'">Post {{ $route.params.id }}</h1>
        <h1 v-else>Page {{ $route.params.slug }}</h1>
    </article>
</template>
