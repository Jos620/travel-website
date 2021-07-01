<template>
	<div class="about__img-overlay">
		<img :src="require(`~/assets/img/${img}.jpg`)" alt="About" :class="`about__img--${size}`" />
	</div>
</template>

<script>
export default {
	props: {
		img: {
			type: String,
			required: true
		},

		size: String
	}
}
</script>

<style scoped>
.about__img-overlay {
	overflow: var(--img-hidden);
}

.about__img--small {
	width: 130px;
}

.about__img--large {
	width: 180px;
}

.about__img--small,
.about__img--large {
	transition: var(--img-transition);
}

.about__img--small:hover,
.about__img--large:hover {
	transform: var(--img-scale);
}


/* Large Screens */
@media screen and (min-width: 1024px) {
	.about__img--small {
		width: 240px;
	}

	.about__img--large {
		width: 290px;
	}
}
</style>
