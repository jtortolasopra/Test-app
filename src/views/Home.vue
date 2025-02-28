<template>
  <div class="home-container">
    <h1>Welcome to Our Platform</h1>

    <div class="feature-cards">
      <FeatureCard
        title="Getting Started"
        description="Learn how to use our platform"
        @click="showFeatureModal = true"
      />
      <FeatureCard
        title="About Us"
        description="Our mission and values"
        @click="showAboutModal = true"
      />
      <FeatureCard
        title="Random User"
        description="Fetch data from API"
        @click="fetchAndShowApiData"
      />
    </div>

    <GettingStartedModal v-if="showFeatureModal" @close="showFeatureModal = false" />

    <AboutUsModal v-if="showAboutModal" @close="showAboutModal = false" />

    <RandomUserModal
      v-if="showApiModal"
      :userData="userData"
      :loading="loading"
      :error="error"
      @close="showApiModal = false"
    />
  </div>
</template>

<script lang="ts">
import FeatureCard from '../components/feature-cards/FeatureCard.vue'
import GettingStartedModal from '../components/modals/GettingStartedModal.vue'
import AboutUsModal from '../components/modals/AboutUsModal.vue'
import RandomUserModal from '../components/modals/RandomUserModal.vue'

export default {
  name: 'HomeView',
  components: {
    FeatureCard,
    GettingStartedModal,
    AboutUsModal,
    RandomUserModal,
  },
  data() {
    return {
      showFeatureModal: false,
      showAboutModal: false,
      showApiModal: false,
      userData: undefined,
      loading: false,
      error: undefined as string | undefined,
    }
  },
  methods: {
    async fetchAndShowApiData() {
      this.showApiModal = true
      this.loading = true
      this.error = 'string'

      try {
        const response = await fetch('https://randomuser.me/api/')
        const data = await response.json()
        this.userData = data.results[0]
      } catch (err) {
        this.error = 'Failed to fetch user data'
        console.error(err)
      } finally {
        this.loading = false
      }
    },
  },
}
</script>

<style scoped>
.home-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.feature-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

/* Add these styles to customize Modal component (assuming it accepts custom classes) */
:deep(.modal-content) {
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  border-radius: 12px;
  border: 1px solid rgba(0, 0, 0, 0.1);
}

:deep(.modal-header) {
  background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%);
  color: white;
  padding: 1rem 1.5rem;
  border-radius: 12px 12px 0 0;
}

:deep(.modal-body) {
  padding: 1.5rem;
}

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
