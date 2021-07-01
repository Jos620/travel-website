<template>
	<div>
		<h3 class="footer__subtitle">{{ title }}</h3>

		<ul>
			<li class="footer__item" v-for="(item, i) in data" :key="i">
				<a :href="item.link" class="footer__link">
					{{ item.text }}
				</a>
			</li>
		</ul>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
	props: ['title', 'data']
})
</script>

<style scoped>
ul {
	margin-bottom: var(--mb-2);
}

.footer__subtitle {
	font-size: var(--h3-font-size);
	margin-bottom: var(--mb-1);
}

.footer__item {
	margin-bottom: var(--mb-0-75);
}

.footer__link {
	color: var(--text-color);
}

.footer__link:hover {
	color: var(--title-color);
}
</style>
