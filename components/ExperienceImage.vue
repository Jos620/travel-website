<template>
	<div class="experience__overlay">
		<img :src="require(`~/assets/img/${img}.jpg`)" alt="experience" :class="`experience__img-${name}`" />
	</div>
</template>

<script>
export default {
	props: {
		img: {
			type: String,
			required: true
		},

		name: String
	}
}
</script>

<style scoped>
.experience__overlay:nth-child(1) {
	width: 263px;
	margin-right: 2rem;
}

.experience__overlay:nth-child(2) {
	width: 120px;
	position: absolute;
	top: 2rem;
	right: 0;
}

.experience__overlay {
	overflow: var(--img-hidden);
}

.experience__img-one,
.experience__img-two {
	transition: var(--img-transition);
}

.experience__img-one:hover,
.experience__img-two:hover {
	transform: var(--img-scale);
}

/* Small Screens */
@media screen and (max-width: 340px) {
	.experience__overlay:nth-child(1) {
		width: 190px;
	}

	.experience__overlay:nth-child(2) {
		width: 80px;
	}
}

/* Medium Screens */
@media screen and (min-width: 768px) {
	.experience__overlay:nth-child(1) {
		width: 363px;
		margin-right: 4rem;
	}

	.experience__overlay:nth-child(2) {
		width: 160px;
	}
}
</style>
