<script setup>
import { ref, onMounted } from 'vue';
import { data, fn } from './data';
import AddNew from './components/AddNew.vue';
import Posts from './components/Posts.vue';
import Pagination from './components/Pagination.vue';
import Loader from './components/Loader.vue';
const posts = ref([]);
const loading = ref(false);
const page = ref(1);
const postsPerPage = 12;
const getPostsFromServer = () => {
  loading.value = true;
  const response = fn.fetchPublicApi('/posts', {}, 'get');
  response.then((fetchedData) => {
    loading.value = false;
    data.posts = fetchedData;
    posts.value = JSON.parse(JSON.stringify(data.posts));
  })
}
getPostsFromServer()
const getPaginatedPosts = () => {
  posts.value = JSON.parse(JSON.stringify(data.posts));
  const start = (page.value - 1) * postsPerPage;
  const end = start + postsPerPage;
  return posts.value.splice(start, end);
};
</script>

<template>
  <section class="container my-10">
    <Loader v-show="loading" />
    <div v-show="!loading">
      <AddNew />
      <Posts :posts="getPaginatedPosts()" />
      <Pagination v-model="page" :postsPerPage="postsPerPage" />
    </div>
  </section>
</template>

<style scoped>
</style>
