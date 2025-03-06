<template>
  <Modal @close="$emit('close')">
    <template #header>Getting Started</template>
    <template #body>
      <h3>Welcome to Our Platform!</h3>
      <ol>
        <li>Explore our features through the cards on the home page</li>
        <li>Try out the Random User API integration</li>
        <li>Check out our documentation for more details</li>
      </ol>
    </template>
  </Modal>
</template>

<script lang="ts">
import Modal from '../ModalView.vue'

export default {
  name: 'GettingStartedModal',
  components: {
    Modal,
  },
  emits: ['close'],
}
</script>

<style scoped></style>
