import { createEnv } from "@t3-oss/env-nextjs"
import { ZodError, z } from "zod"

export const env = createEnv({
  server: {
    NODE_ENV: z.enum(["development", "production"]),
  },
  // Called when the schema validation fails.
  onValidationError: (error: ZodError) => {
    console.error("❌ Invalid environment variables:", error.flatten().fieldErrors)
    process.exit(1)
  },
  // Called when server variables are accessed on the client.
  onInvalidAccess: () => {
    throw new Error("❌ Attempted to access a server-side environment variable on the client")
  },
  emptyStringAsUndefined: true,
  // eslint-disable-next-line n/no-process-env
  experimental__runtimeEnv: process.env,
  // Tell the library when we're in a server context.
  isServer: typeof window === "undefined",
})
