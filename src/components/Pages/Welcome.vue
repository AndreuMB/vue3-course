<script setup lang="ts">
  defineProps({
    handleChangeDisplay: {type:Function, required: true}
  })
</script>

<template>
  <section id="welcome">
    <div class="benefits">
      <h2>Complete this program <br>if you want...</h2>
      <div>
        <p>✅ Follow a simple program with proven results.</p>
        <p>✅ Thing1.</p>
        <p>✅ Thign2.</p>
      </div>
    </div>
    <div>
      <h3>The Training Plan</h3>
      <p>This training... <strong>Bro Split</strong>.</p>
      <h5><i>Push &rarr; Pull &rarr; Legs &rarr; Repeat</i></h5>
    </div>
    <div class="card challenge">
      <h3>Challenge</h3>
      <p>Complete all the workouts</p>
      <p>Do yo ace</p>
      <button @click="handleChangeDisplay(2)" >Begin &rarr;</button>
    </div>
  </section>
</template>

<style scoped>
  #welcome, .challenge, .benefits {
    display: flex;
    flex-direction: column;
  }

  #welcome {
    gap: 1.5rem;
  }

  .benefits {
    gap: 0.5rem;
  }

  .challenge {
    gap: 0.2rem;
  }

  @media (min-width: 640px) {
    #welcome {
      gap: 2rem;
      padding: 1rem 0;
    }

    .benefits {
      gap: 1rem;
    }
  }

</style>
