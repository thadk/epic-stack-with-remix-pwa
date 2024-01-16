import { loadServiceWorker } from '@remix-pwa/sw'
import { RemixBrowser } from '@remix-run/react'
import { startTransition } from 'react'
import { hydrateRoot } from 'react-dom/client'

if (ENV.MODE === 'production' && ENV.SENTRY_DSN) {
	import('./utils/monitoring.client.tsx').then(({ init }) => init())
}

loadServiceWorker({
	serviceWorkerUrl: '/entry.worker.js',
})

startTransition(() => {
	hydrateRoot(document, <RemixBrowser />)
})
