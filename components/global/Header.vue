<template>
	<header class="header" :class="{ 'scroll-header': hasScrolled }" id="header">
		<nav class="nav container">
			<a href="#" class="nav__logo">Travel</a>

			<!-- Nav Menu -->
			<div class="nav__menu" :class="{ 'show-menu': showMenu }" id="nav__menu">
				<ul class="nav__list">
					<NavItem @click.native="toggleMenu" link="#home">Home</NavItem>
					<NavItem @click.native="toggleMenu" link="#about">About</NavItem>
					<NavItem @click.native="toggleMenu" link="#discover">Discover</NavItem>
					<NavItem @click.native="toggleMenu" link="#place">Place</NavItem>
				</ul>

				<div class="nav__dark">
					<!-- Theme change button -->
					<span class="change-theme-name">{{ isDark ? 'Light' : 'Dark' }} Mode</span>
					<i class="change-theme" :class="isDark ? 'ri-sun-line' : 'ri-moon-line'" @click="toggleTheme"></i>
				</div>

				<i class="ri-close-line nav__close" id="nav-close" @click="toggleMenu"></i>
			</div>

			<div class="nav__toggle" id="nav__toggle" @click="toggleMenu">
				<i class="ri-function-line"></i>
			</div>
		</nav>
	</header>
</template>

<script lang="ts">
import Vue from 'vue'
import { useDark, useToggle } from '@vueuse/core'

import useShowMenu from '~/composables/useShowMenu'
import useHandleScroll from '~/composables/useHandleScroll'

export default Vue.extend({
	setup() {
		const { showMenu, toggleMenu } = useShowMenu()

		const { hasScrolled } = useHandleScroll(100)

		/* Dark Mode */
		const isDark = useDark()
		const toggleTheme = useToggle(isDark)

		return {
			showMenu,
			toggleMenu,
			hasScrolled,
			isDark,
			toggleTheme
		}
	}
})
</script>

<style scoped>
/*
-----------------
---- Header ---- |
-----------------
*/

.header {
	width: 100%;
	position: fixed;
	top: 0;
	left: 0;
	z-index: var(--z-fixed);
	transition: 0.125s;
}

/*
--------------
---- Nav ---- |
--------------
*/

.nav {
	height: var(--header-height);
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.nav__logo,
.nav__toggle {
	color: var(--white-color);
}

.nav__logo {
	font-weight: var(--font-semi-bold);
}

.nav__toggle {
	font-size: 1.2rem;
	cursor: pointer;
}

.nav__menu {
	position: relative;
}

@media screen and (max-width: 767px) {
	.nav__menu {
		position: fixed;
		background-color: var(--body-color);
		top: 0;
		right: -100%;
		width: 70%;
		height: 100%;
		box-shadow: -1px 0 4px hsla(var(--hue-color), 64%, 15%, 0.15);
		padding: 3rem;
		transition: 0.4s;
	}
}

.nav__list {
	display: flex;
	flex-direction: column;
	row-gap: 2.5rem;
}

.nav__close {
	position: absolute;
	top: 0.75rem;
	right: 1rem;
	font-size: 1.5rem;
	color: var(--title-color);
	cursor: pointer;
}

/*
--------------------
---- Show Menu ---- |
--------------------
*/

.show-menu {
	right: 0;
}

/*
----------------------------
---- Change background ---- |
---- color ---------------- |
----------------------------
*/

.scroll-header {
	background-color: var(--body-color);
	box-shadow: 0 0 4px hsla(var(--hue-color), 64%, 15%, 0.15);
}

.scroll-header .nav__logo,
.scroll-header .nav__toggle {
	color: var(--title-color);
}

/*
--------------------
---- Dark Mode ---- |
--------------------
*/

.nav__dark {
	display: flex;
	align-items: center;
	column-gap: 2rem;
	position: absolute;
	left: 3rem;
	bottom: 4rem;
}

.change-theme,
.change-theme-name {
	color: var(--text-color);
}

.change-theme {
	cursor: pointer;
	font-size: 1rem;
}

.change-theme-name {
	font-size: var(--small-font-size);
}

/* Medium Screens */
@media screen and (min-width: 768px) {
	.nav {
		height: calc(var(--header-height) + 1.5rem);
	}

	.nav__dark {
		position: initial;
	}

	.nav__menu {
		display: flex;
		column-gap: 1rem;
	}

	.nav__list {
		flex-direction: row;
		column-gap: 4rem;
		margin-right: 4rem;
	}

	.nav__toggle,
	.nav__close,
	.change-theme-name {
		display: none;
	}

	.change-theme {
		color: var(--white-color);
		position: absolute;
		right: 0.8rem;
		top: 3px;
	}

	.scroll-header .change-theme {
		color: var(--text-color);
	}
}
</style>
