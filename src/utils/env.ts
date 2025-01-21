import { EnvironmentError } from "@errors"
import { z } from "zod"

const envSchema = z.object({
  VITE_APP_URL: z.string(),
  VITE_API_URL: z.string(),
  VITE_ENVIRONMENT: z.enum(["development", "production"]).default("development"),
  VITE_SESSION_TOKEN: z.string(),
})

const _env = envSchema.safeParse(import.meta.env)

if (!_env.success) {
  console.error(`Invalid environment variables ${_env.error.format()}`)
  throw new EnvironmentError()
}

export const env = {
  APP_URL: _env.data.VITE_APP_URL,
  API_URL: _env.data.VITE_API_URL,
  ENVIRONMENT: _env.data.VITE_ENVIRONMENT,
  SESSION_TOKEN: window.btoa(_env.data.VITE_SESSION_TOKEN),
}
