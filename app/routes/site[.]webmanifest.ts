import { json } from '@remix-run/node'

export const loader = async () => {
	return json(
		{
			short_name: 'EpicNotesPWA',
			name: 'Epic Notes with Remix PWA',
			start_url: '/',
			theme_color: '#A9ADC1',
			background_color: '#1f2028',
			display: 'standalone',
			shortcuts: [
				{
					name: 'Homepage',
					url: '/',
					icons: [
						{
							src: '/favicons/android-chrome-192x192.png',
							sizes: '192x192',
							type: 'image/png',
						},
					],
				},
			],
			icons: [
				{
					src: '/favicons/android-chrome-192x192.png',
					sizes: '192x192',
					type: 'image/png',
				},
				{
					src: '/favicons/android-chrome-512x512.png',
					sizes: '512x512',
					type: 'image/png',
				},
			],
		},
		{
			headers: {
				'Cache-Control': 'public, max-age=600',
				'Content-Type': 'application/manifest+json',
			},
		},
	)
}

// {
// 	"name": "Epic Notes",
// 	"short_name": "Epic Notes",
// 	"start_url": "/",
// 	"icons": [
// 		{
// 			"src": "/favicons/android-chrome-192x192.png",
// 			"sizes": "192x192",
// 			"type": "image/png"
// 		},
// 		{
// 			"src": "/favicons/android-chrome-512x512.png",
// 			"sizes": "512x512",
// 			"type": "image/png"
// 		}
// 	],
// 	"theme_color": "#A9ADC1",
// 	"background_color": "#1f2028",
// 	"display": "standalone"
// }
