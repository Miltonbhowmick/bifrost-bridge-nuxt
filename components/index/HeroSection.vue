<template>
	<div class="hero-section">
		<img src="images/hero-banner-low.png" alt="hero-banner" class="image" />
	</div>
</template>

<script></script>

<style scoped lang="scss">
.hero-section {
	width: 100%;
	position: relative;
	@media (max-width: 769px) {
		margin-top: 65px;
	}
	img {
		width: 100%;
	}
	&::after {
		content: "";
		position: absolute;
		z-index: 1;
		bottom: 0;
		left: 0;
		pointer-events: none;
		background-image: linear-gradient(
			180deg,
			hsla(0, 0%, 100%, 0),
			#031b27 99%
		);
		width: 100%;
		height: 4em;
	}
}
</style>
