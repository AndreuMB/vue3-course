<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import Layout from './components/Layouts/Layout.vue';
import Dashboard from './components/Pages/Dashboard.vue';
import Welcome from './components/Pages/Welcome.vue';
import Workout from './components/Pages/Workout.vue';
import { workoutProgram } from './utils';

const defaultData:any = {}

interface Workout {
    warmup: {
        name: string;
        sets: number;
        reps: number;
    }[];
    workout: {
        name: string;
        sets: number;
        reps: number;
    }[];
};

for (let workoutIndex in workoutProgram) {
  
  const workoutData:Workout = workoutProgram[workoutIndex]
  
  defaultData[workoutIndex] = {}
  for (let e of workoutData.workout) {
    defaultData[workoutIndex][e.name] = ''
  }
}
const selectedDisplay = ref(1)
const data = ref(defaultData)
const selectedWorkout = ref(-1)

const isWorkoutComplete = computed(() => {
  const currentWorkout = data.value?.[selectedWorkout.value]
  if (!currentWorkout) return false
  const isComplete = Object.values(currentWorkout).every(ex => !!ex)
  console.log({isWorkoutComplete});
  
  return isComplete
})

const firstIncompleteWorkoutIndex = computed(()=> {
  const allWorkout:[]|null = data.value
  if (!allWorkout) return -1

  for (const [index, workout] of Object.entries(allWorkout)){
    const isComplete = Object.values(workout).every(ex => !!ex)
    if (!isComplete) return parseInt(index) 
  }

  return -1
})

function handleChangeDisplay(index: number) {
  selectedDisplay.value = index
}

function handleSelectWorkout(index: number) {
  selectedDisplay.value = 3
  selectedWorkout.value = index
}

function handleSaveWorkout() {
  localStorage.setItem('workouts', JSON.stringify(data.value))

  selectedDisplay.value=2

  selectedWorkout.value = -1
}

function handleResetPlan() {
  selectedDisplay.value = 2
  selectedWorkout.value = -1
  data.value = defaultData
  localStorage.removeItem('workouts')
}

onMounted(()=>{
  if (!localStorage) return
  const savedData = localStorage.getItem('workouts')
  if (savedData) {
    data.value = JSON.parse(savedData)
    selectedDisplay.value = 2
  }
})

</script>

<template>
<div>
  <Layout>
    <!-- PAGE 1 -->
    <Welcome  :handleChangeDisplay="handleChangeDisplay" v-if="selectedDisplay == 1" />
    <!-- PAGE 2 -->
    <Dashboard :handleResetPlan="handleResetPlan" :firstIncompleteWorkoutIndex="firstIncompleteWorkoutIndex" :handleSelectWorkout="handleSelectWorkout" v-if="selectedDisplay == 2" />
    <!-- PAGE 3 -->
    <Workout :handleSaveWorkout="handleSaveWorkout" :isWorkoutComplete="isWorkoutComplete"
    :data="data" :selectedWorkout="selectedWorkout" v-if="workoutProgram?.[selectedWorkout]" />
  </Layout>
  
</div>
</template>

<style scoped>

</style>
