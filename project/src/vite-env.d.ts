/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_MAPBOX_KEY: string;
  readonly VITE_POWERBI_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
