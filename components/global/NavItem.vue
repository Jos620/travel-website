<template>
	<li class="nav__item">
		<a :href="link" class="nav__link">
			<slot></slot>
		</a>
	</li>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
	props: ['link']
})
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

/* Medium Screens */
@media screen and (min-width: 768px) {
	.nav__link {
		color: var(--white-color);
		text-transform: initial;
	}

	.nav__link:hover {
		color: var(--white-color);
	}

	.scroll-header .nav__link {
		color: var(--text-color);
	}
}
</style>
