<template>
	<div>
		<Header />
		<Nuxt />
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

<style scoped lang="scss"></style>
