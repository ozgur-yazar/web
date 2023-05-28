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
		public: {
			FB_API_KEY: process.env.NUXT_FB_API_KEY,
			FB_AUTH_DOMAIN: process.env.NUXT_FB_AUTH_DOMAIN,
			FB_PROJECT_ID: process.env.NUXT_FB_PROJECT_ID,
			FB_STORAGE_BUCKET: process.env.NUXT_FB_STORAGE_BUCKET,
			FB_MESSAGING_SENDER_ID: process.env.NUXT_FB_MESSAGING_SENDER_ID,
			FB_APP_ID: process.env.NUXT_FB_APP_ID,
			FB_MEASUREMENT_ID: process.env.NUXT_FB_MEASUREMENT_ID,
		},
	},
});
