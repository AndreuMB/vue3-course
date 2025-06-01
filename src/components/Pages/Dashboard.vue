<script setup lang="ts">
  import {gymHealthFacts} from '../../utils'
  import Grid from '../Grid.vue';
  const props = defineProps({
    handleSelectWorkout: {type:Function, required: true},
    firstIncompleteWorkoutIndex: {type:Number, required: true},
    handleResetPlan: {type:Function, required: true},
  })
  console.log(gymHealthFacts);
  const randomNumber = Math.floor(Math.random() * gymHealthFacts.length)
  const todayFact = gymHealthFacts[randomNumber]

</script>

<template>
  <section id="dashboard">
    <div class="card tip-container">
      <h2>Welcome volei</h2>
      <div>
        <p class="tip"><strong>Daily tip</strong><br>{{ todayFact }}</p>
        <button @click="()=> handleSelectWorkout(firstIncompleteWorkoutIndex < 0 ? 0 : firstIncompleteWorkoutIndex)">Start workout &rarr;</button>
      </div>
    </div>
    <Grid v-bind="props" />
  </section>
</template>

<style scoped>
  .tip-container, .tip-container div, #dashboard {
    display: flex;
  }

   .tip-container, #dashboard {
      flex-direction: column;
    }

  #dashboard {
    gap: 2rem;
  }
  
  .tip-container {
    gap: 0.5rem;
  }

  @media (min-width: 640px) {
    .tip-container {
      gap: 1rem;
    }
  }

</style>
