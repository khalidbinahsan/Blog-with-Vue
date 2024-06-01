<script setup>
import PostGrid from './PostGrid.vue';
const props = defineProps(['posts'])
</script>

<template>
    <div class="grid grid-cols-3 gap-4">
        <PostGrid v-for="post in posts" :key="post.id" :post="post"/>
    </div>
</template>

<style scoped>

</style>