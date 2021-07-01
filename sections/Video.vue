<template>
	<section class="video section" id="video">
		<h2 class="section__title">Video Tour</h2>

		<div class="video__container container">
			<p class="video__description">
				Find out more with our video of the most beautiful and pleasant places for you and your family.
			</p>

			<VideoPlayer source="video-tour" />
		</div>
	</section>
</template>

<style scoped>
.video__container {
	padding-bottom: 1rem;
}

.video__description {
	text-align: center;
	margin-bottom: var(--mb-2-5);
}

/* Small Screens */
@media screen and (max-width: 340px) {
	.video__container {
		padding: 0;
	}
}

/* Medium Screens */
@media screen and (min-width: 568px) {
	.video__container {
		display: grid;
		grid-template-columns: 0.6fr;
		justify-content: center;
	}
}


/* Large Screens */
@media screen and (min-width: 1024px) {
	.video__container {
		grid-template-columns: 0.7fr;
	}

	.video__description {
		padding: 0 8rem;
	}
}
</style>
