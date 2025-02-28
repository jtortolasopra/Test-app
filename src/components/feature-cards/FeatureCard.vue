<template>
  <div class="card" @click="$emit('click')">
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
  </div>
</template>

<script lang="ts">
export default {
  name: 'FeatureCard',
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped>
.card {
  padding: 1.5rem;
  border-radius: 8px;
  background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%);
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(99, 102, 241, 0.3);
}

.card h3 {
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.card p {
  opacity: 0.9;
}
</style>
