<template>
  <section>
    <h3>Counter: {{ counter }}</h3>
    <h3>Square: {{ squareCounter }}</h3>

    <div>
      <button class="btn" v-on:click="counter++">+1</button>
      <button class="btn" v-on:click="counter--">-1</button>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { useCounter } from '../composables/useCounter';

// import { computed, ref } from 'vue';

// const props = defineProps<{ value: number }>();

// const counter = ref(props.value);
// const squareCounter = computed(() => counter.value * counter.value);

//* Using the useCounter
const { counter, squareCounter } = useCounter(5);
</script>

<style scoped>
@reference '../styles.css';

.btn {
  @apply p-5 bg-blue-500 rounded mr-2 hover:bg-blue-700;
}
</style>
