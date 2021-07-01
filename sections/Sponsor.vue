<template>
	<section class="sponsor section" id="sponsor">
		<div class="sponsor__container container grid">
			<SponsorCard img="sponsors1" name="air-bnb" />
			<SponsorCard img="sponsors2" name="amazon" />
			<SponsorCard img="sponsors3" name="shopify" />
			<SponsorCard img="sponsors4" name="paypal" />
			<SponsorCard img="sponsors5" name="slack" />
		</div>
	</section>
</template>

<style scoped>
.sponsor__container {
	grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
	justify-items: center;
	row-gap: 3.5rem;
}
</style>
