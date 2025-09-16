<template>
  <Story title="Tab">
    <Variant title="Single">
      <JsonicSmartTabs id="my-tab" v-model="selectedTab" render-inactive-tabs>
        <JsonicSmartTab id="tab1" label="Tab 1">
          <h1>Tab 1 content</h1>
        </JsonicSmartTab>
        <JsonicSmartTab id="tab2" label="Tab 2">
          <h1>Tab 2 content</h1>
        </JsonicSmartTab>
      </JsonicSmartTabs>
    </Variant>
  </Story>
</template>

<script setup lang="ts">
import { JsonicSmartTabs, JsonicSmartTab } from "../components/smart"
import { ref } from "vue"

const selectedTab = ref("tab1")
</script>
