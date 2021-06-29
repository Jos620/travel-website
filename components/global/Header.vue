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

				<i class="ri-close-line nav__close" id="nav-close" @click="toggleMenu"></i>
			</div>

			<div class="nav__toggle" id="nav__toggle" @click="toggleMenu">
				<i class="ri-function-line"></i>
			</div>
		</nav>
	</header>
</template>

<script>
import useShowMenu from '~/composables/useShowMenu'
import useHandleScroll from '~/composables/useHandleScroll'

export default {
	setup() {
		const { showMenu, toggleMenu } = useShowMenu()

		const { hasScrolled } = useHandleScroll(100)

		return { showMenu, toggleMenu, hasScrolled }
	}
}
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
</style>
