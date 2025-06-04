<script setup lang="ts">
  import {firstIncompleteWorkoutIndex, getWorkoutProgram, gymHealthFacts} from '../../utils'
  import Grid from '../Grid.vue';

  const randomNumber = Math.floor(Math.random() * gymHealthFacts.length)
  const todayFact = gymHealthFacts[randomNumber]


</script>

<template>
  <section id="dashboard">
    <div class="card tip-container">
      <h2>El raskes</h2>
      <div>
        <p class="tip"><strong>Daily tip</strong><br>{{ todayFact }}</p>
        <RouterLink :to="`/workout/${firstIncompleteWorkoutIndex(getWorkoutProgram())}`">Si el pika &rarr;</RouterLink>
      </div>
    </div>
    <Grid />
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
