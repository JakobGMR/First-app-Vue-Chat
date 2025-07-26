import { ref, computed } from 'vue';

//* Haciendolo de esta forma puedes tener un gestor de estados gloabl
//* Ya que este counter se comparte entre todos los archivos donde se utilice
//* useCounter, compartiendo su valor
const counter = ref(10);

export const useCounter = (value: number) => {
  // const counter = ref(initialValue);

  return {
    counter,

    //* Readonly
    squareCounter: computed(() => counter.value * counter.value),
  };
};
