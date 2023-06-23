<template>
	<div class="faq-wrapper">
		<div class="accordion" id="accordionExample">
			<div
				class="accordion-item"
				v-for="(item, idx) in data.items"
				:key="'accordion_' + idx"
			>
				<h2 class="accordion-header" :id="'heading_' + idx">
					<button
						class="accordion-button"
						type="button"
						data-bs-toggle="collapse"
						:data-bs-target="'#collapse_' + idx"
						aria-expanded="true"
						aria-controls="collapseOne"
					>
						{{ item.question }}
					</button>
				</h2>
				<div
					:id="'collapse_' + idx"
					:class="{
						'accordion-collapse': true,
						collapse: true,
						show: idx == 0,
					}"
					:aria-labelledby="'heading_' + idx"
					data-bs-parent="#accordionExample"
				>
					<div class="accordion-body">
						{{ item.answer }}
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { Component, Vue, Prop } from "nuxt-property-decorator";

@Component({
	name: "FaqBlock",
	components: {},
})
export default class FaqBlock extends Vue {
	@Prop() data;

	mounted() {}
}
</script>

<style lang="scss" scoped>
.faq-wrapper {
	width: 70%;
	margin: 0 auto;
}
.accordion {
	width: 100%;
	.accordion-item {
		border: none;
		.accordion-header {
			.accordion-button {
				border-radius: 0px;
				background-color: #031b27;
				color: #ffffff;
				font-weight: 500;
				font-size: 20px;
				box-shadow: none;
				@media (max-width: 480px) {
					font-size: 14px;
				}
				&:focus {
					box-shadow: none;
					border-color: rgba(0, 0, 0, 0.125);
				}
				&::after {
					background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
				}
			}
		}
		.accordion-collapse {
			border-radius: 0px;
			.accordion-body {
				border: none !important;
				background-color: #031b27;
				color: #ffb401;
				font-weight: 400;
				font-size: 18px;
				@media (max-width: 480px) {
					font-size: 12px;
				}
			}
		}
	}
}
</style>
