<template>
  <Story title="Link">
    <Variant title="Text Link">
      <JsonicSmartLink :to="link" :blank="true"> Click here </JsonicSmartLink>
    </Variant>
    <Variant title="Button Link">
      <JsonicSmartLink :to="link" :blank="true">
        <JsonicButtonPrimary label="Click here" />
      </JsonicSmartLink>
    </Variant>
  </Story>
</template>

<script setup lang="ts">
import { JsonicSmartLink } from "../components/smart"
import { JsonicButtonPrimary } from "../components/button"
import { ref } from "vue"

const link = ref("/")
</script>
