<template>
	<section class="subscribe section" id="subscribe">
		<div class="subscribe__bg">
			<div class="subscribe__container container">
				<h2 class="section__title subscribe__title">
					Subscribe Our <br />
					Newsletter
				</h2>
				<p class="subscribe__description">Subscribe to our newsletter and get a special 30% discount</p>

				<form class="subscribe__form">
					<input type="text" placeholder="Enter your email" class="subscribe__input" v-model="email" />
					<button class="button" @click.prevent="submitEmail">Subscribe</button>
				</form>
			</div>
		</div>
	</section>
</template>

<script>
import useSubmitEmail from '~/composables/useSubmitEmail'

export default {
	setup() {
		const { email, submitEmail } = useSubmitEmail()

		return { email, submitEmail }
	}
}
</script>

<style scoped>
.subscribe__bg {
	background-color: var(--first-color);
	padding: 2.5rem 0;
}

.subscribe__title,
.subscribe__description {
	color: var(--white-color);
}

.subscribe__description {
	text-align: center;
	margin-bottom: var(--mb-2-5);
}

.subscribe__form {
	background-color: var(--input-color);
	padding: 0.5rem;
	display: flex;
	justify-content: space-between;
}

.subscribe__input {
	width: 70%;
	padding-inline: 0.5rem;
	background-color: var(--input-color);
	color: var(--text-color);
}

.subscribe__input::placeholder {
	color: var(--text-color);
}
</style>
