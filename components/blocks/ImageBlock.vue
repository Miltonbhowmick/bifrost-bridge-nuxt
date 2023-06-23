<template>
	<div>
		<div class="image">
			<img
				:src="HOST + data.image.original.src"
				:alt="data.image.original.alt"
			/>
		</div>
	</div>
</template>

<script>
import { Component, Vue, Prop } from "nuxt-property-decorator";

@Component({
	name: "ImageBlock",
	components: {},
})
export default class ImageBlock extends Vue {
	@Prop() data;

	get HOST() {
		return this.$config.HOST;
	}

	mounted() {}
}
</script>

<style lang="scss" scoped>
.image {
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 40px;
	margin-bottom: 40px;
	img {
		flex-shrink: 0;
		-webkit-flex-shrink: 0;
		width: 100%;
		-o-object-fit: cover;
		object-fit: cover;
	}
}
</style>
