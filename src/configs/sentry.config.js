import * as Sentry from "@sentry/node"
import { nodeProfilingIntegration } from "@sentry/profiling-node"
import dotenv from 'dotenv'

dotenv.config()

export const initSentry = () => {
  Sentry.init({
    dsn: process.env.SENTRY_DSN,
    integrations: [
      nodeProfilingIntegration(),
    ],
  });

  Sentry.profiler.startProfiler()

  // custom in here (optional)

  Sentry.profiler.stopProfiler()
  
  return Sentry
}