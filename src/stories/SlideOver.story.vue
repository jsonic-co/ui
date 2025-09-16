<template>
  <Story title="Slider Over">
    <JsonicSmartSlideOver :show="show" :title="'Title'" @close="show = false">
      <template #content>
        <h1>Content</h1>
      </template>
    </JsonicSmartSlideOver>
  </Story>
</template>

<script setup lang="ts">
import { JsonicSmartSlideOver } from "../components/smart"
import { ref } from "vue"

const show = ref(true)
</script>
