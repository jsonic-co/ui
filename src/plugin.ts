import type { Plugin, App } from "vue"

import "./assets/scss/styles.scss"
import "./assets/scss/tailwind.scss"

/**
@constant JSONIC_UI_OPTIONS
A constant representing the key for storing JsonicUI plugin options in the global context.
*/

export const JSONIC_UI_OPTIONS = "JSONIC_UI_OPTIONS"

/**
@typedef {Object} JsonicUIPluginOptions
@property [t] - A function for handling translations for the plugin.
@property [onModalOpen] - A callback function that is called when a modal is opened.
@property [onModalClose] - A callback function that is called when a modal is closed.
*/

export type JsonicUIPluginOptions = {
  t?: (key: string) => string
  onModalOpen?: () => void
  onModalClose?: () => void
}

export const plugin: Plugin = {
  install(app: App, options: JsonicUIPluginOptions = {}) {
    app.provide(JSONIC_UI_OPTIONS, options)
  },
}

export default plugin
