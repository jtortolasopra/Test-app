<template>
  <div class="modal-backdrop" @click="$emit('close')">
    <div class="modal" @click.stop>
      <header class="modal-header">
        <slot name="header">Default Header</slot>
        <button class="close-button" @click="$emit('close')">&times;</button>
      </header>
      <div class="modal-body">
        <slot name="body">Default Body</slot>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
}

.modal {
  border-radius: 12px;
  padding: 0;
  max-width: 500px;
  width: 90%;
  box-shadow:
    0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
  transform: translateY(0);
  transition: transform 0.3s ease-out;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%);
  color: white;
  border-radius: 12px 12px 0 0;
}

.close-button {
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: white;
  opacity: 0.8;
  transition: opacity 0.2s ease;
  padding: 0.25rem;
}

.close-button:hover {
  opacity: 1;
}

.modal-body {
  line-height: 1.6;
  padding: 1.5rem;
  background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%);
  border-radius: 0 0 12px 12px;
}
</style>
