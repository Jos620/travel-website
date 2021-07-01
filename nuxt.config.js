// prettier-ignore
export default {
	/**
	 * Headers of the page
	 */
	head: {
		title: 'Travel Website',

		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: 'An awesome travel website' }
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
