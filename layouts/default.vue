<template>
	<div id="app-wrapper">
		<Header />
		<Nuxt />
		<Footer />
	</div>
</template>

<style src="~/assets/css/reset.css"></style>
<style src="~/assets/css/variables.css"></style>
<style>
/*
-----------------------
---- Reusable CSS ---- |
---- Classes --------- |
-----------------------
*/

.section {
	padding: 4.5rem 0 2.5rem;
}

.section__title {
	font-size: var(--h2-font-size);
	color: var(--title-color);
	margin-bottom: var(--mb-2);
	text-align: center;
	text-transform: capitalize;
}

.container {
	max-width: 968px;
	margin-inline: var(--mb-1);
}

.grid {
	display: grid;
	gap: 1.5rem;
}

/*
------------------
---- Buttons ---- |
------------------
*/

.button {
	display: inline-block;
	background-color: var(--first-color);
	color: var(--white-color);
	padding: 1rem 2rem;
	font-weight: var(--font-semi-bold);
	transition: 0.3s;
}

.button:hover {
	background-color: var(--first-color-alt);
}

.button--flex {
	display: flex;
	align-items: center;
	column-gap: 0.25rem;
}

.button--link {
	background: none;
	padding: 0;
}

.button--link:hover {
	background: none;
}
</style>
