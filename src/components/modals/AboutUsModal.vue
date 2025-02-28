<template>
  <Modal @close="$emit('close')">
    <template #header>About Us</template>
    <template #body>
      <p>We are dedicated to creating innovative solutions that help our users succeed.</p>
      <p>Our team brings together expertise from diverse backgrounds to deliver excellence.</p>
    </template>
  </Modal>
</template>

<script lang="ts">
import Modal from '../ModalView.vue'

export default {
  name: 'AboutUsModal',
  components: {
    Modal,
  },
  emits: ['close'],
}
</script>
