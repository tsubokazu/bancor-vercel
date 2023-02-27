import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "/Users/kazusa/Develop/Bancor/bancor-hp/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}