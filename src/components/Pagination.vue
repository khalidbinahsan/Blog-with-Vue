<script setup>
import { ref, watch } from 'vue';
import { data } from '../data.js';
const props = defineProps(['modelValue', 'postsPerPage', 'postsLength']);
const emit = defineEmits(['update:modelValue']);
const localValue = ref(props.modelValue);
const incrementPage = () => {
  const totalPage = Math.ceil(data.posts.length / props.postsPerPage);
  if(localValue.value < totalPage){
    localValue.value++;
    emit('update:modelValue', localValue.value);
  }
};
const decrementPage = () => {
  if(localValue.value > 1){
    localValue.value--;
    emit('update:modelValue', localValue.value)
  }
}

// Watch for changes in the prop to update the reactive reference
watch(() => props.modelValue, (newValue) => {
  localValue.value = newValue;
});
</script>

<template>
  <div class="flex justify-center items-center m-6">
    <button @click="decrementPage" class="bg-gray-300 mr-1 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
      Prev
    </button>
    <button @click="incrementPage" class="ml-1 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
      Next
    </button>
  </div>
</template>

<style scoped></style>
