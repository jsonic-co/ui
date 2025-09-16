<template>
  <Story title="Anchor">
    <div class="text-secondaryLight text-tiny">
      By signing in, you are agreeing to our
      <JsonicSmartAnchor
        class="text-red-800 link"
        to="https://docs.jsonic.ir/support/terms"
        blank
        label="Terms of Service"
      />
      and
      <JsonicSmartAnchor
        class="text-red-600 link"
        to="https://docs.jsonic.ir/support/privacy"
        blank
        label="Privacy Policy"
      />
    </div>
  </Story>
</template>

<script setup lang="ts">
import { JsonicSmartAnchor } from "../components/smart"
</script>
