<template>
	<div>
		<HeroSection />
		<MarketData />
		<TopCollections />
		<NFTFeatures />
		<FeedbackHistory />
		<Fractionalize />
		<Campaign />
		<Newsletter />
	</div>
</template>

<script>
import { Component, Vue } from "nuxt-property-decorator";
import {} from "~/utils/utils";
import {} from "../utils/store/namespace.names";
import {} from "../utils/store/action.names";
import {} from "../utils/store/getter.names";
import {} from "../utils/store/mutation.names";

import Newsletter from "../components/index/Newsletter";
import Campaign from "../components/index/Campaign";
import Fractionalize from "../components/index/Fractionalize";
import FeedbackHistory from "../components/index/FeedbackHistory";
import TopCollections from "../components/index/TopCollections";
import MarketData from "../components/index/MarketData";
import NFTFeatures from "../components/index/NFTFeatures";
import HeroSection from "../components/index/HeroSection";

@Component({
	name: "Index",
	components: {
		Newsletter,
		Campaign,
		Fractionalize,
		FeedbackHistory,
		TopCollections,
		MarketData,
		NFTFeatures,
		HeroSection,
	},
})
export default class Index extends Vue {
	HOST = this.$config.HOST;

	// Set page name on browser tab name
	head() {
		return {
			title: "Home",
		};
	}
}
</script>

<style scoped lang="scss"></style>
