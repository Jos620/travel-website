<template>
	<section class="experience section" id="experience">
		<h2 class="section__title">
			With our experience <br />
			We will serve you
		</h2>

		<div class="experience__container container grid">
			<div class="experience__content grid">
				<ExperienceCard number="20">
					Years <br />
					Experience
				</ExperienceCard>

				<ExperienceCard number="75">
					Complete <br />
					Tours
				</ExperienceCard>

				<ExperienceCard number="650+">
					Tourist <br />
					Destination
				</ExperienceCard>
			</div>

			<div class="experience__img grid">
				<ExperienceImage img="experience1" name="one" />
				<ExperienceImage img="experience2" name="two" />
			</div>
		</div>
	</section>
</template>

<style scoped>
.experience__container {
	row-gap: 2.5rem;
	justify-content: center;
	justify-items: center;
}

.experience__content {
	grid-template-columns: repeat(3, 1fr);
	column-gap: 1rem;
	justify-items: center;
	padding: 0 2rem;
}

.experience__img {
	position: relative;
	padding-bottom: 2rem;
}

/* Small Screens */
@media screen and (max-width: 340px) {
	.experience__content {
		padding: 0;
	}

	.experience__img {
		padding: 0;
	}
}
</style>
