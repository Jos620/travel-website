<template>
	<section class="home" id="home">
		<img src="~/assets/img/home1.jpg" alt="Home" class="home__img" />

		<div class="home__container container grid">
			<div class="home__data">
				<!-- Home - Data -->
				<span class="home__data-subtitle">Discover your place</span>
				<h1 class="home__data-title">
					Explore The <br />
					Best
					<b>
						Beautiful <br />
						Beaches
					</b>
				</h1>
				<a href="#" class="button">Explore</a>
			</div>

			<!-- Home - Social -->
			<div class="home__social">
				<SocialLink link="https://facebook.com" icon="ri-facebook-box-fill" />
				<SocialLink link="https://instagram.com" icon="ri-instagram-fill" />
				<SocialLink link="https://twitter.com" icon="ri-twitter-fill" />
			</div>

			<!-- Home - Info -->
			<div class="home__info">
				<div>
					<span class="home__info-title">5 best places to visit</span>
					<a href="#" class="button button--flex button--link home__info-button">
						More <i class="ri-arrow-right-line"></i>
					</a>
				</div>

				<div class="home__info-overlay">
					<img src="~/assets/img/home2.jpg" alt="Home" class="home__info-img" />
				</div>
			</div>
		</div>
	</section>
</template>

<style scoped>
/*
---------------------------
---- Background Image ---- |
---------------------------
*/

.home__img {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	object-fit: cover;
	object-position: 83%;
}

/*
------------------
---- Content ---- |
------------------
*/

.home__container {
	position: relative;
	height: calc(100vh - var(--header-height));
	align-content: center;
	row-gap: 3rem;
}

.home__data-subtitle,
.home__data-title,
.home__social-link,
.home__info {
	color: var(--white-color);
}

.home__data-subtitle {
	display: block;
	font-weight: var(--font-semi-bold);
	margin-bottom: var(--mb-0-75);
}

.home__data-title {
	font-size: var(--biggest-font-size);
	font-weight: var(--font-medium);
	margin-bottom: var(--mb-2-5);
}

/*
------------------------
---- Social Medias ---- |
------------------------
*/

.home__social {
	display: flex;
	flex-direction: column;
	row-gap: 1.5rem;
}

/*
---------------------
---- Right Card ---- |
---------------------
*/

.home__info {
	background-color: var(--first-color);
	display: flex;
	align-items: center;
	padding: 1.5rem 1rem;
	column-gap: 0.5rem;
	position: absolute;
	right: 0;
	bottom: 1rem;
	width: 228px;
}

.home__info-title {
	display: block;
	font-size: var(--small-font-size);
	font-weight: var(--font-semi-bold);
	margin-bottom: var(--mb-0-75);
}

.home__info-button {
	font-size: var(--smaller-font-size);
}

.home__info-overlay {
	overflow: var(--img-hidden);
}

.home__info-img {
	width: 145px;
	transition: var(--img-transition);
}

.home__info-img:hover {
	transform: var(--img-scale);
}

/* Small Screens */
@media screen and (max-width: 340px) {
	.home__info {
		width: 190px;
		padding: 1rem;
	}
}

/* Medium Screens */
@media screen and (min-width: 768px) {
	.home__container {
		height: 100vh;
		grid-template-rows: 1.8fr .5fr;
	}

	.home__data {
		align-self: flex-end;
	}

	.home__social {
		flex-direction: row;
		align-self: flex-end;
		margin-bottom: 3rem;
		column-gap: 2.2rem;
	}

	.home__info {
		bottom: 3rem;
	}
}

/* Large Screens */
@media screen and (min-width: 1024px) {
	.home__container {
		grid-template-rows: 2fr .5fr;
	}

	.home__info {
		width: 328px;
		grid-template-columns: 1fr 2fr;
		column-gap: 2rem;
	}

	.home__info-title {
		font-size: var(--normal-font-size);
	}

	.home__info-img {
		width: 240px;
	}
}

/* Tall Screens */
@media screen and (min-height: 721px) {
	.home__container,
	.home__img {
		height: 720px;
	}
}
</style>
