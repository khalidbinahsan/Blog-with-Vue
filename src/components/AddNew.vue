<script setup>
import {ref} from 'vue'
import { data, fn } from '../data'
const showPostForm = ref(false)
const spinner = ref(false)
const postForm = ref({
    title: '',
    body: '',
    userId: 1
})
const addNewPost =  () => {
    spinner.value = true;
    const response = fn.fetchPublicApi('/posts', postForm.value, 'POST');
    response.then((newData) => {
        data.posts.unshift({
            ...postForm.value,
            id: newData.id
        })
        postForm.value = {title: '', body: '', userId: 1}
        showPostForm.value = false
        spinner.value = false
    })
}
</script>

<template>
    <div class="flex justify-between items-center mb-6">
        <h1 class="font-bold text-xl mb-2">Simple Blog</h1>
        <button  @click="showPostForm = !showPostForm"
            class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            Add New Post
        </button>
    </div>
    <div v-show="showPostForm" class="flex flex-col justify-between items-center mb-6 gap-6">
        <div class="flex w-full">
            <div class="w-1/5">
                <label class="block text-gray-500 font-bold text-left mb-1 pr-4" for="inline-full-name">
                    Title
                </label>
            </div>
            <div class="w-4/5">
                <input v-model="postForm.title"
                    class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    type="text" />
            </div>
        </div>
        <div class="flex w-full">
            <div class="w-1/5">
                <label class="block text-gray-500 font-bold text-left mb-1 pr-4" for="inline-full-name">Body</label>
            </div>
            <div class="w-4/5">
                <textarea rows="4" name="comment" v-model="postForm.body"
                    class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"></textarea>
            </div>
        </div>
        <button @click="addNewPost()"
            class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            <img v-show="spinner" src="../assets/spinner.svg" alt="spinner">
            <span v-show="!spinner">Submit</span>
        </button>
    </div>
</template>

<style scoped>

</style>