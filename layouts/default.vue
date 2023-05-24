<template>
	<div>
		<Header />
		<Nuxt />
		<Footer />
		<div class="go-top" @click="goToPage">
			<img src="/images/go-top-icon.png" />
		</div>
	</div>
</template>

<script>
import { Component, Vue } from "nuxt-property-decorator";

@Component({
	name: "Default",
})
export default class Default extends Vue {
	goToPage() {
		window.scrollTo(0, 0);
	}
}
</script>

<style scoped lang="scss">
.go-top {
	position: fixed;
	bottom: 20px;
	right: 20px;
	background: none;
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 10px;
	border-radius: 8px;
	cursor: pointer;
	@media (max-width: 993px) {
		bottom: 70px;
	}
	img {
		width: 30px;
		height: 30px;
	}
}
</style>
