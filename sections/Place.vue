<template>
	<section class="place section" id="place">
		<h2 class="section__title">Choose Your Place</h2>

		<div class="place__container container grid">
			<PlaceCard img="place1" rating="4,8" price="2.499" link="#" title="Bali" subtitle="Indonesia" />
			<PlaceCard img="place2" rating="5,0" price="1.599" link="#" title="Bora Bora" subtitle="Polinesia" />
			<PlaceCard img="place3" rating="4,9" price="3.499" link="#" title="Hawaii" subtitle="EE.UU" />
			<PlaceCard img="place4" rating="4,8" price="2.499" link="#" title="Whitehaven" subtitle="Autralia" />
			<PlaceCard img="place5" rating="4,8" price="1.999" link="#" title="Hvar" subtitle="Croacia" />
		</div>
	</section>
</template>

<style scoped>
.place__container {
	grid-template-columns: repeat(2, max-content);
	justify-content: center;
}

/* Small Screens */
@media screen and (max-width: 340px) {
	.place__container {
		grid-template-columns: max-content;
		justify-content: center;
	}
}

/* Medium Screens */
@media screen and (min-width: 568px) {
	.place__container {
		grid-template-columns: repeat(3, max-content);
		padding-top: 2rem;
	}
}


/* Large Screens */
@media screen and (min-width: 1024px) {
	.place__container {
		gap: 3rem 2rem;
	}
}
</style>
