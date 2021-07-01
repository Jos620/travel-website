<template>
	<a :href="link" target="_blank" class="home__social-link">
		<i :class="icon"></i>
	</a>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
	props: ['icon', 'link']
})
</script>

<style>
.home__social-link {
	font-size: 1.2rem;
	width: max-content;
}

.home__social-link:hover {
	color: var(--text-color-light);
}
</style>
