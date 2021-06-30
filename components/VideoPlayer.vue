<template>
	<div class="video__content">
		<video ref="videoEl" @ended="playing = false">
			<source :src="require(`~/assets/video/${source}.mp4`)" type="video/mp4" />
		</video>

		<button class="button button--flex video__button" id="video-button" @click="playPause">
			<i class="video__button-icon" :class="icon" id="video-icon"></i>
		</button>
	</div>
</template>

<script>
import { ref } from '@vue/composition-api'

import useVideoPlayer from '~/composables/useVideoPlayer'

export default {
	props: {
		source: {
			type: String,
			required: true
		}
	},

	setup() {
		const videoEl = ref(null) // video element

		const { playing, icon, playPause } = useVideoPlayer(videoEl)

		return { videoEl, playing, icon, playPause }
	}
}
</script>

<style scoped>
.video__content {
	position: relative;
}

.video__button {
	position: absolute;
	right: 1rem;
	bottom: -1rem;
	padding: 1rem 1.5rem;
}

.video__button-icon {
	font-size: 1.2rem;
}
</style>
