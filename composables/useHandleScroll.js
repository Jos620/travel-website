import { onMounted, onUnmounted, ref } from '@vue/composition-api'
import { set } from '@vueuse/core'

export default function useHandleScroll(amount) {
	const hasScrolled = ref(false)

	const handleScroll = () => {
		if (window.scrollY >= amount) set(hasScrolled, true)
		else set(handleScroll, false)
	}

	onMounted(() => {
		window.addEventListener('scroll', handleScroll)
	})
	onUnmounted(() => {
		window.removeEventListener('scroll', handleScroll)
	})

	return { hasScrolled }
}
