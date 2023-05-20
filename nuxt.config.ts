// https://nuxt.com/docs/api/configuration/nuxt-config
const nodeEnv = process.env.NUXT_NODE_ENV;

export default defineNuxtConfig({
	css: ['~/assets/css/main.css'],
	app: {
		head: {
			title: 'Özgür Yazar',
			htmlAttrs: {
				lang: 'tr',
			},
		},
	},
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},

	runtimeConfig: {
		FB_API_KEY:
			nodeEnv === 'PROD'
				? process.env.NUXT_FB_API_KEY
				: process.env.NUXT_FB_API_KEY_DEV,
		FB_AUTH_DOMAIN:
			nodeEnv === 'PROD'
				? process.env.NUXT_FB_AUTH_DOMAIN
				: process.env.NUXT_FB_AUTH_DOMAIN_DEV,
		FB_PROJECT_ID:
			nodeEnv === 'PROD'
				? process.env.NUXT_FB_PROJECT_ID
				: process.env.NUXT_FB_PROJECT_ID_DEV,
		FB_STORAGE_BUCKET:
			nodeEnv === 'PROD'
				? process.env.NUXT_FB_STORAGE_BUCKET
				: process.env.NUXT_FB_STORAGE_BUCKET_DEV,
		FB_MESSAGING_SENDER_ID:
			nodeEnv === 'PROD'
				? process.env.NUXT_FB_MESSAGING_SENDER_ID
				: process.env.NUXT_FB_MESSAGING_SENDER_ID_DEV,
		FB_APP_ID:
			nodeEnv === 'PROD'
				? process.env.NUXT_FB_APP_ID
				: process.env.NUXT_FB_APP_ID_DEV,
		FB_MEASUREMENT_ID:
			nodeEnv === 'PROD'
				? process.env.NUXT_FB_MEASUREMENT_ID
				: process.env.NUXT_FB_MEASUREMENT_ID_DEV,
		public: {
			FB_API_KEY:
				nodeEnv === 'PROD'
					? process.env.NUXT_FB_API_KEY
					: process.env.NUXT_FB_API_KEY_DEV,
			FB_AUTH_DOMAIN:
				nodeEnv === 'PROD'
					? process.env.NUXT_FB_AUTH_DOMAIN
					: process.env.NUXT_FB_AUTH_DOMAIN_DEV,
			FB_PROJECT_ID:
				nodeEnv === 'PROD'
					? process.env.NUXT_FB_PROJECT_ID
					: process.env.NUXT_FB_PROJECT_ID_DEV,
			FB_STORAGE_BUCKET:
				nodeEnv === 'PROD'
					? process.env.NUXT_FB_STORAGE_BUCKET
					: process.env.NUXT_FB_STORAGE_BUCKET_DEV,
			FB_MESSAGING_SENDER_ID:
				nodeEnv === 'PROD'
					? process.env.NUXT_FB_MESSAGING_SENDER_ID
					: process.env.NUXT_FB_MESSAGING_SENDER_ID_DEV,
			FB_APP_ID:
				nodeEnv === 'PROD'
					? process.env.NUXT_FB_APP_ID
					: process.env.NUXT_FB_APP_ID_DEV,
			FB_MEASUREMENT_ID:
				nodeEnv === 'PROD'
					? process.env.NUXT_FB_MEASUREMENT_ID
					: process.env.NUXT_FB_MEASUREMENT_ID_DEV,
		},
	},
});
