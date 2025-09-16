<template>
  <Story title="Checkbox">
    <Variant title="Single">
      <JsonicSmartCheckbox :on="on" />
    </Variant>
  </Story>
</template>

<script setup lang="ts">
import { JsonicSmartCheckbox } from "../components/smart"

import { ref } from "vue"

const on = ref(true)
</script>
