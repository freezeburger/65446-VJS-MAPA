import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)

  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }

  // return { count:count, doubleCount:doubleCount, increment:increment }

  /*
  const val = new Object();
  val.count = count
  val.doubleCount = doubleCount
  val.increment = increment
  return val;
  */
})
