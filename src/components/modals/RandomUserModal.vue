<template>
  <Modal @close="$emit('close')">
    <template #header>API Data Example</template>
    <template #body>
      <div v-if="loading">Loading...</div>
      <div v-else-if="error">Error: {{ error }}</div>
      <div v-else-if="userData">
        <h4>Random User Data:</h4>
        <div class="user-info">
          <img :src="userData.picture.medium" alt="User avatar" class="user-avatar" />
          <p><strong>Name:</strong> {{ userData.name.first }} {{ userData.name.last }}</p>
          <p><strong>Email:</strong> {{ userData.email }}</p>
          <p>
            <strong>Location:</strong> {{ userData.location.city }},
            {{ userData.location.country }}
          </p>
        </div>
        <p class="api-note">Data fetched from the Random User API</p>
      </div>
    </template>
  </Modal>
</template>

<script lang="ts">
import Modal from '../ModalView.vue'

export default {
  name: 'RandomUserModal',
  components: { Modal },
  props: {
    userData: Object,
    loading: Boolean,
    error: String,
  },
  emits: ['close'],
}
</script>

<style scoped>
.user-info {
  background: rgba(99, 102, 241, 0.1);
  padding: 1rem;
  border-radius: 8px;
  margin: 1rem 0;
}

.user-avatar {
  border-radius: 50%;
  margin-bottom: 1rem;
}

.api-note {
  font-size: 0.875rem;
  color: #666;
  margin-top: 1rem;
}
</style>
