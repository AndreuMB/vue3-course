<script setup lang="ts">
import { onMounted, ref } from 'vue';
import Layout from './components/Layouts/Layout.vue';

import { getWorkoutProgram } from './utils';
import { useRouter } from 'vue-router';



const data = ref(getWorkoutProgram())

onMounted(()=>{
  if (!localStorage) {
    useRouter().push('/welcome')
    return
  }
  
  const savedData = localStorage.getItem('workouts')
  if (!savedData) {
    useRouter().push('/welcome')
    return
  }

  data.value = JSON.parse(savedData)
  
  
})

</script>

<template>
<div>
  <main>
    <RouterView />
  </main>
  <Layout />
</div>
</template>

<style scoped>
main {
    padding: 1rem;
    width: 100%;
    max-width: 700px;
    margin: 0 auto;
  }
</style>
