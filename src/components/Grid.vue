<script setup lang="ts">
  import { workoutProgram } from '../utils';
  defineProps({
    handleSelectWorkout: {type:Function, required: true},
    firstIncompleteWorkoutIndex: {type:Number, required: true},
    handleResetPlan: {type:Function, required: true}
  })
  const workoutTypes = ['Push','Pull','Legs']
</script>

<template>
  <h1>GRID</h1>
  <section id="grid">
    <button :disabled="workoutIndex > 0 && workoutIndex > firstIncompleteWorkoutIndex" @click="handleSelectWorkout(workoutIndex)" v-for="_workout, workoutIndex in Object.keys(workoutProgram)" :key="workoutIndex" class="card-button plan-card">
      <div>
        <p>Day {{ workoutIndex < 9 ? '0' + (workoutIndex + 1) : workoutIndex + 1 }}</p>
        <i class="fa-solid fa-dumbbell" v-if="workoutIndex%3===0"></i>
        <i class="fa-solid fa-weight-hanging" v-if="workoutIndex%3===1"></i>
        <i class="fa-solid fa-bolt" v-if="workoutIndex%3===2"></i>
      </div>
      <h3>{{ workoutTypes[workoutIndex%3] }}</h3>
    </button>
    <button :disabled="firstIncompleteWorkoutIndex != -1" @click="handleResetPlan()" class="card-button plan-card-reset">
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
