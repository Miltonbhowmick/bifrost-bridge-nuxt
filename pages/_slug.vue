<template>
	<div class="container">
		<div class="content">
			<h1
				:class="{
					headline: true,
					'headline-middle': $route.params.slug == 'faq',
				}"
			>
				{{ getCurrentPage.hero_title }}
			</h1>
			<h2
				:class="{
					subtitle: true,
					'subtitle-middle': $route.params.slug == 'faq',
				}"
			>
				{{ getCurrentPage.hero_subtitle }}
			</h2>
			<div class="content-body">
				<div
					v-for="(comp, idx) in getCurrentPage.body"
					:key="'component' + idx"
				>
					<component
						:key="'pageBody' + idx"
						:is="comp.type"
						:data="comp.value"
					></component>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { Component, Vue } from "nuxt-property-decorator";
import { namespaced } from "~/utils/utils";
import { NS_COMMON } from "~/utils/store/namespace.names";
import { FETCH_CURRENT_PAGE } from "~/utils/store/action.names";
import {} from "~/utils/store/getter.names";
import {} from "~/utils/store/mutation.names";
import DescriptionBlock from "../components/blocks/DescriptionBlock.vue";
import ImageBlock from "../components/blocks/ImageBlock.vue";
import FaqBlock from "../components/blocks/FaqBlock.vue";
import CardSliderBlock from "../components/blocks/CardSliderBlock.vue";

@Component({
	name: "CommonPage",
	components: {
		description_block: DescriptionBlock,
		image_block: ImageBlock,
		faq_block: FaqBlock,
		card_slider_block: CardSliderBlock,
	},
})
export default class CommonPage extends Vue {
	HOST = this.$config.HOST;

	head() {
		return {
			title: this.$route.params.slug,
		};
	}

	async asyncData({ route, $axios, store, error }) {
		var getCurrentPage = {};
		const currentPageData = await store
			.dispatch(namespaced(NS_COMMON, FETCH_CURRENT_PAGE), {
				html_path: route.path,
			})
			.then((data) => {
				console.log(data);
				getCurrentPage = data;
			})
			.catch((e) => {
				console.log(e);
				// if (e.response.status === 404) {
				// 	error({ statusCode: 404 });
				// } else {
				// 	error({ statusCode: 500 });
				// }
			});

		return {
			getCurrentPage,
		};
	}
}
</script>

<style scoped lang="scss">
.content {
	margin-top: 100px;
	.headline {
		margin: 60px 0px;
		font-weight: 600;
		font-size: 30px;
		line-height: 44px;
	}
	.content-body {
	}
	.detail-box {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 30px;
		.detail {
			font-weight: 400;
			font-size: 20px;
			line-height: 44px;
		}
	}
}
.headline-middle {
	text-align: center !important;
}
.subtitle-middle {
	width: 50%;
	margin: 0 auto;
	text-align: center;
	font-size: 15px;
	margin-bottom: 50px;
}
</style>
