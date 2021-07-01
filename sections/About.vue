<template>
	<section class="about section" id="about">
		<div class="about__container container grid">
			<!-- About - Data -->
			<div class="about__data">
				<h2 class="section__title about__title">
					More Information <br />
					About The Best Beaches
				</h2>
				<p class="about__description">
					You can find the most beautiful and pleasant places at the best prices with special discounts, you
					choose the place we will guide you all the way to wait, get your place now.
				</p>
				<a href="#" class="button">Reserve a place</a>
			</div>

			<!-- About - Images -->
			<div class="about__img">
				<AboutImage img="about1" size="small" />
				<AboutImage img="about2" size="large" />
			</div>
		</div>
	</section>
</template>

<style scoped>
.about__data {
	text-align: center;
}

.about__container {
	row-gap: 2.5rem;
}

.about__description {
	margin-bottom: var(--mb-2);
}

/*
-----------------
---- Images ---- |
-----------------
*/

.about__img {
	display: flex;
	column-gap: 1rem;
	align-items: center;
	justify-content: center;
}

/* Medium Screens */
@media screen and (min-width: 768px) {
	.about__container {
		grid-template-columns: repeat(2, 1fr);
		align-items: center;
	}

	.about__data,
	.about__title {
		text-align: initial;
	}

	.about__title {
		margin-bottom: var(--mb-1-5);
	}

	.about__description {
		margin-bottom: var(--mb-2);
	}
}
</style>
