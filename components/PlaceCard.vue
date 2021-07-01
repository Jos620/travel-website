<template>
	<div class="place__card">
		<img :src="require(`~/assets/img/${img}.jpg`)" alt="place" class="place__img" />

		<div class="place__content">
			<span class="place__rating">
				<i class="ri-star-line place__rating-icon"></i>
				<span class="place__rating-number">{{ rating }}</span>
			</span>

			<div class="place__data">
				<h3 class="place__title">{{ title }}</h3>
				<span class="place__subtitle">{{ subtitle }}</span>
				<span class="place__price">${{ price }}</span>
			</div>
		</div>

		<a :href="link" class="button button--flex place__button">
			<i class="ri-arrow-right-line"></i>
		</a>
	</div>
</template>

<script>
export default {
	props: {
		img: {
			type: String,
			required: true
		},

		link: {
			type: String,
			required: true
		},

		rating: {
			type: String,
			required: true
		},

		title: {
			type: String,
			required: true
		},

		subtitle: {
			type: String,
			required: true
		},

		price: {
			type: String,
			required: true
		}
	}
}
</script>

<style>
.place__card,
.place__img {
	height: 230px;
}

.place__card {
	position: relative;
	overflow: var(--img-hidden);
}

.place__content,
.place__title {
	color: var(--white-color);
}

.place__content {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 0.75rem 0.75rem 1rem;
}

.place__rating {
	align-self: flex-end;
	display: flex;
	align-items: center;
}

.place__rating-icon {
	font-size: 0.75rem;
	margin-right: var(--mb-0-25);
}

.place__rating-number {
	font-size: var(--small-font-size);
}

.place__subtitle,
.place__price {
	display: block;
}

.place__title {
	font-size: var(--h3-font-size);
	margin-bottom: var(--mb-0-25);
}

.place__subtitle {
	font-size: var(--smaller-font-size);
	margin-bottom: var(--mb-1-25);
}

.place__button {
	position: absolute;
	right: 0;
	bottom: 0;
	padding: 0.75rem 1rem;
}

.place__img {
	transition: var(--img-transition);
}

.place__card:hover .place__img {
	transform: var(--img-scale);
}

/* Large Screens */
@media screen and (min-width: 1024px) {
	.place__card,
	.place__img {
		height: 263px;
	}
}
</style>
