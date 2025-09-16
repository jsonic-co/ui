<template>
  <Story title="Toggle">
    <JsonicSmartToggle :on="on" @change="change"> Turn on </JsonicSmartToggle>
  </Story>
</template>

<script setup lang="ts">
import { JsonicSmartToggle } from "../components/smart"
import { ref } from "vue"

const on = ref(true)

const change = () => {
  alert("changed to: " + on.value)
}
</script>
