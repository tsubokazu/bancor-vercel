import { NuxtModule } from '@nuxt/schema'
declare module '@nuxt/schema' {
  interface NuxtConfig {
    ["pinia"]?: typeof import("@pinia/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
  }
  interface RuntimeConfig {
   app: {
      baseURL: string,

      buildAssetsDir: string,

      cdnURL: string,
   },
  }
  interface PublicRuntimeConfig {
   kurocoApiUrl: string,

   kurocoHeader: string,

   kurocoFooter: string,

   kurocoTopEndpoint: string,

   kurocoJournal: string,

   kurocoNews: string,

   kurocoTopFirstview: string,

   kurocoTopNews: string,

   kurocoTopWelfare: string,

   kurocoTopService: string,

   kurocoTopJournal: string,

   kurocoTopVision: string,

   kurocoTopRecruit: string,

   kurocoEditor: string,

   kurocoPagesService: string,

   kurocoPagesCompanyInfo: string,

   kurocoPagesMoreAbourBancor: string,

   kurocoPagesCompanyProfile: string,

   kurocoPagesMessage: string,

   kurocoPagesVision: string,

   kurocoPagesSystemDev: string,

   kurocoPagesWelfare: string,

   kurocoPagesSolutions: string,

   googleMapApiKey: string,
  }
}