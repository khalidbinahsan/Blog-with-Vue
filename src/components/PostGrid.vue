<script setup>
const props = defineProps(['post'])
</script>

<template>
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
        <img class="w-full" :src="`https://source.unsplash.com/random/800x500/?img=${post.id}`" alt="Blog Images" />
        <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">{{ post.title }}</div>
            <p class="text-gray-700 text-base">
                {{ post.body }}
            </p>
        </div>
    </div>
</template>

<style scoped></style>