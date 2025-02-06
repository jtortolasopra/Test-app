<script setup>
import { ref } from "vue";

const count = ref(0);

const increment = () => {
  count.value++;
};
</script>

<template>
  <div>
    <h1>Contador: {{ count }}</h1>
    <button @click="increment">Incrementar</button>
  </div>
</template>

<style scoped>
button {
  background: blue;
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;
}
</style>
