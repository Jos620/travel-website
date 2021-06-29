<template>
	<li class="nav__item">
		<a :href="link" class="nav__link">
			<slot></slot>
		</a>
	</li>
</template>

<script>
export default {
	props: {
		link: {
			type: String,
			required: true
		}
	}
}
</script>

<style scoped>
.nav__link {
	color: var(--text-color-light);
	font-weight: var(--font-semi-bold);
	text-transform: uppercase;
}

.nav__link:hover {
	color: var(--text-color);
}
</style>
