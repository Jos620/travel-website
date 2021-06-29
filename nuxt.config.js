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
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },

			// Remix icons
			{ rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css' },
		]
	},

	/**
	 * Plugins
	 */
	plugins: [
		'~/plugins/composition-api'
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
