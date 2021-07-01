// prettier-ignore
export default {
	target: 'static',
	
	/**
	 * Headers of the page
	 */
	head: {
		title: 'Travel Website',

		meta: [
			/**
			 * SEO
			*/
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: 'An awesome travel website' },
			{ name: 'robots', content: 'all' },
			{ name: 'author', content: 'Mateus Ito Silva <mateusito10@gmail.com>' },
			{ name: 'keywords', content: 'travel, website, vue, nuxt' },
		],

		link: [
			// Favicon
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },

			// Remix icons
			{ rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css' },

			// Swiper CSS
			{ rel: 'stylesheet', href: 'https://unpkg.com/swiper/swiper-bundle.min.css' }
		]
	},

	/**
	 * Plugins
	 */
	plugins: [
		'~/plugins/composition-api',
		{ src: '~/plugins/vue-awesome-swiper', mode: 'client' }
	],

	/** 
	 * Build Modules
	*/
	buildModules: [
		'@nuxt/typescript-build',
	],

	/**
	 * Auto import components
	 */
	components: {
		dirs: [
			'~/components',
			'~/components/global',
			'~/sections'
		]
	}
}
