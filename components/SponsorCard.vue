<template>
	<div class="sponsor__content">
		<img
			:src="require(`~/assets/img/${img}.png`)"
			alt="Sponsor"
			class="sponsor__img"
			:class="`sponsor__img-${name}`"
		/>
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
.sponsor__img {
	width: 90px;
	filter: invert(0.7);
	transition: var(--img-transition);
}

.sponsor__content:hover .sponsor__img {
	filter: invert(0.5);
}
</style>
