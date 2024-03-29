<template>
	<div class="container">
		<div class="feature-box">
			<h2 class="section-headline">
				Supercharge Your NFT and Crypto Game with These Tools
			</h2>
			<h3 class="section-sub-headline">
				It's important to conduct thorough research and exercise caution when
				making investment decisions in the crypto market
				<a href="#" class="read-more-link text-lowercase">Read More</a>
			</h3>
			<div class="list">
				<div v-for="(item, index) in items" :key="index" class="item">
					<div
						class="details"
						:style="{
							backgroundImage: `url('${item.backgroundImage}')`,
						}"
					>
						<div class="feature-icon">
							<img :src="item.icon" alt="feature-bg" />
						</div>
						<h6 class="name">{{ item.name }}</h6>
						<p class="description">
							{{ item.description }}<br />
							<a
								v-if="item.readMore"
								href="#"
								class="read-more-link text-capitalize"
								>read more</a
							>
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { Component, Vue } from "nuxt-property-decorator";
import img1 from "~/assets/images/features/1.png";
import img2 from "~/assets/images/features/2.png";
import img3 from "~/assets/images/features/3.png";
import img4 from "~/assets/images/features/4.png";
import img5 from "~/assets/images/features/5.png";
import img6 from "~/assets/images/features/6.png";

@Component({
	name: "NFTFeatures",
})
export default class NFTFeatures extends Vue {
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
			name: "NFT Fractionalization",
			description:
				"This feature allows users to divide their NFTs into smaller fractions and tokenize them, allowing for crypto-like trading.",
			readMore: true,
		},
		{
			backgroundImage: img3,
			icon: "images/icons/spin.png",
			name: "Exchange",
			description:
				"Our platform offers a decentralized exchange where you can trade NFTs and crypto",
			readMore: true,
		},
		{
			backgroundImage: img4,
			icon: "images/icons/processor.png",
			name: "Marketing",
			description:
				"We offer comprehensive marketing solution tools for NFT artists to make their work seen",
			readMore: true,
		},
		{
			backgroundImage: img5,
			icon: "images/icons/library.png",
			name: "Crypto Market analysis",
			description:
				"Comprehensive analytical tools to inform your decisions in the crypto world",
			readMore: true,
		},
		{
			backgroundImage: img6,
			icon: "images/icons/guard.png",
			name: "NFT Analysis",
			description:
				"State-of-the-art analysis algorithms that help find the next big NFT before it blows up.",
			readMore: true,
		},
	];
}
</script>

<style scoped lang="scss">
.feature-box {
	margin: 150px 0px;
	height: auto;
	@media (max-width: 769px) {
		margin: 40px 0px;
	}
	.list {
		margin: 70px 0px;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-between;
		gap: 26px 16px;
		@media (max-width: 769px) {
			margin: 40px 0px;
		}

		.item {
			flex-basis: 31.5%;
			@media screen and(max-width: 769px) {
				flex-basis: auto;
			}
			.details {
				padding: 40px 30px;
				height: 240px;
				background-size: cover;
				background-position: center center;
				background-repeat: no-repeat;
				border-radius: 24px;
				display: flex;
				flex-direction: column;
				align-items: flex-start;
				gap: 18px;
				@media (max-width: 480px) {
					padding: 25px 30px;
					height: 230px;
				}
				.feature-icon {
					width: 10%;
				}
				.name {
					margin: 0;
					font-weight: 600;
					font-size: 18px;
					color: #ffffff;
				}
				.description {
					padding: 0;
					font-weight: 400;
					font-size: 14px;
					color: rgba(255, 255, 255, 0.8);
				}
			}
		}
	}
}
</style>
