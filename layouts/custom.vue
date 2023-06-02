<template>
	<div>
		<Nuxt />
	</div>
</template>

<script>
import { Component, Vue } from "nuxt-property-decorator";

@Component({
	name: "Custom",
})
export default class Custom extends Vue {}
</script>

<style></style>
