import { ref } from '@vue/composition-api'
import { get } from '@vueuse/core'

import useValidateEmail from '~/composables/useValidateEmail'

export default function useSubmitEmail() {
	const email = ref('')

	const { isEmailValid } = useValidateEmail()

	const submitEmail = () => {
		if (isEmailValid(get(email))) {
			// send email to backend
			console.log(get(email))
		} else {
			// handle invalid email input
			console.log('Invalid Email')
		}
	}

	return { email, submitEmail }
}
