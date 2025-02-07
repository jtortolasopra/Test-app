<script setup lang="ts">
import { ref } from "vue";

const count = ref(0);

const increment = () => {
  count.value += 1;
};
</script>

<template>
  <div>
    <h1>Contador: {{ count }}</h1>
    <button type="button" @click="increment">Incrementar</button>
  </div>
</template>

<style scoped lang="css">
button {
  background: blue;
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;
}
</style>
