/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SWAPI_BASE_URL: string
}

interface ImportMeta {
  readonly env: ImportMeta
}
