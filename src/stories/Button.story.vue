<template>
  <Story title="Button">
    <Variant title="Primary">
      <JsonicButtonPrimary label="Button" />
    </Variant>
    <Variant title="Secondary">
      <JsonicButtonSecondary label="Button" />
    </Variant>
  </Story>
</template>

<script setup lang="ts">
import { JsonicButtonPrimary, JsonicButtonSecondary } from "../components/button"
</script>
