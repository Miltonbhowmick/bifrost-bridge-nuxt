<template>
	<div></div>
</template>

<script>
import {
	Component,
	Vue,
	Action,
	Watch,
	Getter,
	Mutation,
} from "nuxt-property-decorator";
import {} from "~/utils/utils";
import {} from "../utils/store/namespace.names";
import {} from "../utils/store/action.names";
import {} from "../utils/store/getter.names";
import {} from "../utils/store/mutation.names";

@Component({
	name: "Index",
	components: {},
})
export default class Index extends Vue {
	mounted() {
		console.log("======", this.$config.HOST);
	}
}
</script>

<style scoped lang="scss"></style>
