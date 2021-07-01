<template>
	<section class="discover section" id="discover">
		<h2 class="section__title">
			Discover the most <br />
			attractive places
		</h2>

		<div class="discover__container container">
			<Swiper :options="swiperOptions">
				<DiscoverCard img="discover1" title="Bali">24 tours available</DiscoverCard>
				<DiscoverCard img="discover2" title="Hawaii">15 tours available</DiscoverCard>
				<DiscoverCard img="discover3" title="Hvar">18 tours available</DiscoverCard>
				<DiscoverCard img="discover4" title="Whitehaven">32 tours available</DiscoverCard>
			</Swiper>
		</div>
	</section>
</template>

<script>
import { Swiper } from 'vue-awesome-swiper'

export default {
	components: {
		Swiper
	},

	setup() {
		const swiperOptions = {
			effect: 'coverflow',
			centeredSlides: true,
			slidesPerView: 'auto',
			loop: true,
			spaceBetween: 32,
			coverflowEffect: {
				rotate: 0
			}
		}

		return { swiperOptions }
	}
}
</script>

<style scoped>
@media screen and (min-width: 768px) {
	.discover__container {
		width: 610px;
		margin-inline: auto;
		padding-top: 2rem;
	}
}
</style>

<style>
/* Remove the shadow that SwiperJS add */
.swiper-container-3d .swiper-slide-shadow-left,
.swiper-container-3d .swiper-slide-shadow-right {
	background-image: none;
}
</style>
