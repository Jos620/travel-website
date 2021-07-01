<template>
	<SwiperSlide class="discover__card">
		<img :src="require(`~/assets/img/${img}.jpg`)" alt="discover" class="discover__img" />
		<div class="discover__data">
			<h2 class="discover__title">{{ title }}</h2>
			<span class="discover__description">
				<slot></slot>
			</span>
		</div>
	</SwiperSlide>
</template>

<script lang="ts">
import Vue from 'vue'

import { SwiperSlide } from 'vue-awesome-swiper'

export default Vue.extend({
	props: ['img', 'title'],

	components: {
		SwiperSlide
	}
})
</script>

<style scoped>
.discover__card {
	position: relative;
	width: 200px;
	overflow: var(--img-hidden);
}

.discover__data {
	position: absolute;
	bottom: 1.5rem;
	left: 1rem;
}

.discover__title,
.discover__description {
	color: var(--white-color);
}

.discover__title {
	font-size: var(--h3-font-size);
	margin-bottom: var(--mb-0-25);
}

.discover__description {
	display: block;
	font-size: var(--smaller-font-size);
}

.discover__img {
	transition: var(--img-transition);
}

.discover__img:hover {
	transform: var(--img-scale);
}

/* Large Screens */
@media screen and (min-width: 1024px) {
	.discover__card {
		width: 237px;
	}

	.discover__data {
		left: 1.5rem;
		bottom: 2rem;
	}

	.discover__title {
		font-size: var(--h2-font-size);
	}
}
</style>
