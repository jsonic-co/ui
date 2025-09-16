<template>
  <JsonicModal title="Grettings Modal" @close="emit('modal-reject')">
    <template #body>
      <p class="text-secondary">Hello, World!</p>
    </template>
  </JsonicModal>
</template>

<script setup lang="ts">
import { JsonicModal } from "./../"

const emit = defineEmits<{
  (e: "modal-reject"): void
}>()
</script>
