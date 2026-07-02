// @ts-check
import { defineConfig } from 'astro/config';

// Static output — deployable as-is to Vercel / Cloudflare Pages (no adapter needed).
export default defineConfig({
  output: 'static',
});
