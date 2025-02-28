<template>
  <Modal @close="closeModal">
    <template #header>Getting Started</template>
    <template #body>
      <h3>Welcome!</h3>
      <p>Here's how to get started:</p>

      <ol>
        <li>Step 1: Create your first project</li>
        <li>Step 2: Add your team members</li>
        <li>Step 3: Start collaborating</li>
      </ol>

      <div class="dont-show-again">
        <input type="checkbox" id="dontShowAgain" v-model="dontShowAgain" />
        <label for="dontShowAgain">Don't show this again</label>
      </div>
    </template>
    <template #footer>
      <button class="primary-button" @click="closeModal">Get Started</button>
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

  data() {
    return {
      isOpen: true,
      dontShowAgain: false,
    }
  },

  methods: {
    closeModal() {
      if (this.dontShowAgain) {
        localStorage.setItem('hideGettingStarted', 'true')
      }
      this.isOpen = false
      this.$emit('close')
    },
  },

  mounted() {
    const hideModal = localStorage.getItem('hideGettingStarted')
    if (hideModal === 'true') {
      this.isOpen = false
    }
  },
}
</script>

<style scoped></style>
