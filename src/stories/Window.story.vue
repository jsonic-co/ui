<template>
  <Story title="Window">
    <Variant title="Single">
      <JsonicSmartWindows
        :id="'my-window'"
        v-model="selectedWindow"
        @add-tab="openNewTab"
        @remove-tab="removeTab"
        @sort="sortTabs"
      >
        <JsonicSmartWindow
          v-for="window in tabs"
          :id="window.id"
          :key="'tab_' + window.id"
          :label="window.name"
          :is-removable="window.removable"
        >
        </JsonicSmartWindow>
      </JsonicSmartWindows>
    </Variant>
    <Variant title="Custom Tab Heads">
      <JsonicSmartWindows
        v-model="selectedWindow"
        @add-tab="openNewTab"
        @remove-tab="removeTab"
        @sort="sortTabs"
      >
        <JsonicSmartWindow
          v-for="window in tabs"
          :id="window.id"
          :key="'tab_' + window.id"
          :label="window.name"
          :is-removable="window.removable"
        >
          <template #tabhead>
            <icon-lucide-train class="svg-icons" />
            <span class="w-2 truncate"> - Lorem ipsum dolor sit amet</span>
          </template>
        </JsonicSmartWindow>
      </JsonicSmartWindows>
    </Variant>
  </Story>
</template>

<script setup lang="ts">
import { JsonicSmartWindows, JsonicSmartWindow } from "../components/smart"
import IconLucideTrain from "~icons/lucide/train"
import { ref } from "vue"

const selectedWindow = ref("window1")

type Tab = {
  id: string
  name: string
  removable: boolean
}

const tabs = ref<Tab[]>([
  {
    id: "1",
    name: "window1",
    removable: false,
  },
  {
    id: "2",
    name: "window2",
    removable: true,
  },
  {
    id: "3",
    name: "window3",
    removable: true,
  },
])

const openNewTab = () => {
  const newTab = {
    id: Date.now().toString(),
    name: "New Window",
    removable: true,
  }
  tabs.value = [...tabs.value, { ...newTab }]
  selectedWindow.value = newTab.id
}

const removeTab = (tabID: string) => {
  tabs.value = tabs.value.filter((tab) => tab.id !== tabID)
}

const sortTabs = (e: { oldIndex: number; newIndex: number }) => {
  const newTabs = [...tabs.value]
  newTabs.splice(e.newIndex, 0, newTabs.splice(e.oldIndex, 1)[0])
  tabs.value = newTabs
}
</script>
