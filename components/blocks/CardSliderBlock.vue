<template>
	<div>
		<div class="slider-box">
			<client-only>
				<carousel-3d
					:display="3"
					:disable3d="true"
					:space="365"
					:clickable="false"
					:controls-visible="true"
				>
					<slide v-for="(item, i) in data.items" :index="i" :key="i">
						<div class="item">
							<div
								class="details"
								:style="{
									backgroundImage: `url('${
										HOST + item.background_image.original.src
									}')`,
								}"
							>
								<div class="feature-icon">
									<img
										:src="HOST + item.image.original.src"
										alt="feature-bg"
										class="feature-icon"
									/>
								</div>
								<h6 class="name">{{ item.title }}</h6>
								<p class="information">
									{{ item.subtitle }}<br />
									<a href="#" class="read-more-link text-capitalize"
										>read more</a
									>
								</p>
							</div>
						</div>
					</slide>
				</carousel-3d>
			</client-only>
		</div>
	</div>
</template>

<script>
import { Component, Vue, Prop } from "nuxt-property-decorator";

import img1 from "~/assets/images/features/1.png";
import img2 from "~/assets/images/features/2.png";
import img3 from "~/assets/images/features/3.png";
import img4 from "~/assets/images/features/4.png";
import img5 from "~/assets/images/features/5.png";
import img6 from "~/assets/images/features/6.png";

@Component({
	name: "CardSliderBlock",
	components: {},
})
export default class CardSliderBlock extends Vue {
	@Prop() data;

	img1 = img1;
	img2 = img2;
	img3 = img3;
	img4 = img4;
	img5 = img5;
	img6 = img6;

	items = [
		{
			backgroundImage: img1,
			icon: "images/icons/menu.png",
			name: "NFT Minting",
			description: "This feature allows users to create their own unique NFTs",
			readMore: true,
		},
		{
			backgroundImage: img2,
			icon: "images/icons/cake.png",
			name: "Fractionalization",
			description:
				"This feature allows users to divide their NFTs into smaller",
			readMore: true,
		},
		{
			backgroundImage: img3,
			icon: "images/icons/spin.png",
			name: "Exchange",
			description: "Our platform offers a decentralized exchange where",
			readMore: true,
		},
		{
			backgroundImage: img4,
			icon: "images/icons/processor.png",
			name: "Marketing",
			description: "We offer a comprehensive marketing solution tools and",
			readMore: true,
		},
		{
			backgroundImage: img5,
			icon: "images/icons/library.png",
			name: "NFT Create",
			description:
				"This feature allows users to create their own unique NFTs easily and",
			readMore: true,
		},
		{
			backgroundImage: img6,
			icon: "images/icons/guard.png",
			name: "NFT Analysis",
			description:
				"This feature allows users to divide their NFTs into smaller fractions",
			readMore: true,
		},
	];

	get HOST() {
		return this.$config.HOST;
	}

	mounted() {}
}
</script>

<style lang="scss" scoped>
.slider-box {
	margin: 100px 0px;
	.item {
		flex-basis: 31.5%;
		.details {
			padding: 40px 30px;
			height: 220px;
			background-size: cover;
			background-position: center center;
			background-repeat: no-repeat;
			border-radius: 24px;
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			justify-content: center;
			gap: 20px;
			.feature-icon {
				width: 35%;
			}
			.name {
				margin: 0;
				font-weight: 600;
				font-size: 18px;
				color: #ffffff;
			}
			.information {
				padding: 0;
				font-weight: 400;
				font-size: 14px;
				color: rgba(255, 255, 255, 0.8);
			}
		}
	}
}
.carousel-3d-container {
	height: 222px !important;
	.carousel-3d-slide {
		background: none;
		height: 222px !important;
	}
}

::v-deep .carousel-3d-controls {
	a {
		color: #ffb401 !important;
	}
}

.carousel-3d-container {
	height: 222px !important;
	.carousel-3d-slide {
		background: none;
		height: 222px !important;
	}
}

::v-deep .carousel-3d-controls {
	a {
		color: #ffb401 !important;
	}
}
</style>
