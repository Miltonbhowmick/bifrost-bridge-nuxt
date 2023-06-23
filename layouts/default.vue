<template>
	<div>
		<Header />
		<div class="page-wrapper">
			<Nuxt />
		</div>
		<Footer />
	</div>
</template>

<script>
import { Component, Vue } from "nuxt-property-decorator";

@Component({
	name: "Default",
	components: {},
})
export default class Default extends Vue {}
</script>

<style scoped lang="scss">
.page-wrapper {
	// margin-top: 100px;
}
</style>
