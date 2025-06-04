<script setup lang="ts">
  import { ref } from 'vue';
  import { firstIncompleteWorkoutIndex, getDefaultData, getWorkoutProgram, workoutProgram, workoutTypes } from '../utils';

  const data = ref(getWorkoutProgram())

  function handleResetPlan() {
  data.value = getDefaultData()
  localStorage.removeItem('workouts')
}

</script>

<template>
  <h1>GRID</h1>
  <section id="grid">
    <button :disabled="workoutIndex > 0 && workoutIndex > firstIncompleteWorkoutIndex(data)" v-for="_workout, workoutIndex in Object.keys(workoutProgram)" :key="workoutIndex" class="card-button plan-card">
      <div v-if="workoutIndex > 0 && workoutIndex > firstIncompleteWorkoutIndex(data)">
        <p>Day {{ workoutIndex < 9 ? '0' + (workoutIndex + 1) : workoutIndex + 1 }}</p>
        <i class="fa-solid fa-dumbbell" v-if="workoutIndex%3===0"></i>
        <i class="fa-solid fa-weight-hanging" v-if="workoutIndex%3===1"></i>
        <i class="fa-solid fa-bolt" v-if="workoutIndex%3===2"></i>
      </div>
      <RouterLink v-else :to="`/workout/${workoutIndex}`" >
        <div>
          <p>Day {{ workoutIndex < 9 ? '0' + (workoutIndex + 1) : workoutIndex + 1 }}</p>
          <i class="fa-solid fa-dumbbell" v-if="workoutIndex%3===0"></i>
          <i class="fa-solid fa-weight-hanging" v-if="workoutIndex%3===1"></i>
          <i class="fa-solid fa-bolt" v-if="workoutIndex%3===2"></i>
        </div>
      </RouterLink>
      <h3>{{ workoutTypes[workoutIndex%3] }}</h3>

    </button>
    <button :disabled="firstIncompleteWorkoutIndex(data) == 0" @click="handleResetPlan()" class="card-button plan-card-reset">
      <p>Reset</p>
      <i class="fa-solid fa-rotate-left"></i>
    </button>
  </section>
</template>

<style scoped>

  #grid {
    display: grid;
    grid-template-columns: repeat(3,minmax(0,1fr));
    gap: 1rem;
  }

  #grid button {
    width: 100%;
  }

  #grid button:disabled {
    box-shadow: none;
    cursor: not-allowed;
  }


  .plan-card {
    display: flex;
    flex-direction: column;
  }

  .plan-card-reset {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
  }

  .plan-card div {
    display: flex;
    justify-content: space-between;
    gap: 0.5rem;
  }

    .plan-card div p {
    text-align: left;
  }

  @media (min-width: 640px) {
    #grid {
      grid-template-columns: repeat(4,minmax(0,1fr));
    }
  }

</style>
