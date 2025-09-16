<template>
  <Story title="Item">
    <Variant title="Single">
      <JsonicSmartItem :label="'Item'" :active-info-icon="false" />
    </Variant>
  </Story>
</template>

<script setup lang="ts">
import { JsonicSmartItem } from "../components/smart"
</script>
