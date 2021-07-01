<template>
	<div class="experience__data">
		<h2 class="experience__number">{{ number }}</h2>
		<span class="experience__description">
			<slot></slot>
		</span>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
	props: ['number']
})
</script>

<style scoped>
.experience__number {
	font-size: var(--h2-font-size);
	font-weight: var(--font-semi-bold);
	margin-bottom: var(--mb-0-5);
}

.experience__description {
	font-size: var(--small-font-size);
}
</style>
