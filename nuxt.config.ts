// https://nuxt.com/docs/api/configuration/nuxt-config
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
});
