<template>
  <section>
    <h3>Counter: {{ counter }}</h3>
    <h3>Square: {{ squareCounter }}</h3>

    <div>
      <button v-on:click="counter++">+1</button>
      <button v-on:click="counter--">-1</button>
    </div>
  </section>
</template>

<script lang="ts">
//* Forma sin el setup o Options API
import { defineComponent } from 'vue';
import { useCounter } from '../composables/useCounter';

export default defineComponent({
  props: {
    value: { type: Number, required: true },
  },
  setup(props) {
    // const counter = ref(props.value);
    // const squareCounter = computed(() => counter.value * counter.value);

    const { counter, squareCounter } = useCounter(props.value);

    return {
      counter,
      squareCounter,
    };
  },
});
</script>

<style scoped>
h1 {
  color: green;
}
</style>
