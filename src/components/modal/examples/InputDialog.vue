<template>
  <JsonicModal
    :title="title ?? 'Dialog with Input field'"
    @close="emit('modal-reject')"
  >
    <template #body>
      <JsonicSmartInput
        type="text"
        placeholder="Enter some text..."
        v-model="text"
        @submit="emit('modal-resolve', { text })"
      />
    </template>
    <template #footer>
      <JsonicButtonPrimary
        label="Submit"
        @click="emit('modal-resolve', { text })"
      />
      <JsonicButtonSecondary
        filled
        label="Cancel"
        @click="emit('modal-reject')"
      />
    </template>
  </JsonicModal>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { JsonicModal } from "./../"
import {
  JsonicSmartInput,
  JsonicButtonSecondary,
  JsonicButtonPrimary,
} from "./../../index"

const text = ref<string>("")

defineProps<{
  title: string
}>()

const emit = defineEmits<{
  (e: "modal-reject"): void
  (e: "modal-resolve", value: { text: string }): void
}>()
</script>
