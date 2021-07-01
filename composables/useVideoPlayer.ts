import { computed, ref } from '@vue/composition-api'
import { get, set } from '@vueuse/core'

export default function useVideoPlayer(el: HTMLVideoElement | any) {
	const playing = ref(false)

	const playPause = () => {
		if (!playing.value) {
			get(el).play()
			set(playing, true)
		} else {
			get(el).pause()
			set(playing, false)
		}
	}

	const icon = computed(() => (get(playing) ? 'ri-pause-line' : 'ri-play-line'))

	return { playing, playPause, icon }
}
