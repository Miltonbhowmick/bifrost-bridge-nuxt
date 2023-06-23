<template>
	<div class="container">
		<div class="collection-box">
			<h2 class="section-headline">
				Top NFT Collections: Explore the Most Coveted Digital Art and Assets
			</h2>
			<h3 class="section-sub-headline">
				It's important to conduct thorough research and exercise caution when
				making investment decisions in the crypto market.
				<a href="#" class="read-more-link">Read More</a>
			</h3>
			<div class="title-box">
				<h1>Top Collections Over Last 7 days</h1>
				<a href="#" class="read-more-link">View All</a>
			</div>
			<ul class="collection-list">
				<li v-for="(item, index) in collectionItems" :key="index" class="item">
					<h5 class="serial">{{ index + 1 }}</h5>
					<img
						v-if="item.imageSrc"
						:src="item.imageSrc"
						:alt="item.name"
						class="nft-image"
					/>
					<img v-else src="images/dummy.png" :alt="item.name" />
					<div class="info">
						<h6 class="name">{{ item.name }}</h6>
						<h6 class="price">${{ item.price }}</h6>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
import { Component, Vue } from "nuxt-property-decorator";

@Component({
	name: "TopCollections",
})
export default class TopCollections extends Vue {
	collectionItems = [
		{
			name: "Jane Cooper",
			price: "275.43",
			imageSrc: "images/collections/nft1.png",
		},
		{
			name: "Wade Warren",
			price: "300.43",
			imageSrc: "images/collections/nft2.png",
		},
		{
			name: "Esther Howard",
			price: "3435.35",
			imageSrc: "images/collections/nft2.png",
		},
		{
			name: "Albert Flores",
			price: "353.35",
			imageSrc: "images/collections/nft1.png",
		},
		{
			name: "Jane Cooper",
			price: "275.43",
			imageSrc: "images/collections/nft1.png",
		},
		{
			name: "Wade Warren",
			price: "300.43",
			imageSrc: "images/collections/nft2.png",
		},
		{
			name: "Esther Howard",
			price: "3435.35",
			imageSrc: "images/collections/nft2.png",
		},
		{
			name: "Albert Flores",
			price: "353.35",
			imageSrc: "images/collections/nft1.png",
		},
		{
			name: "Brooklyn Simmons",
			price: "353.35",
			imageSrc: "images/collections/nft1.png",
		},
	];
}
</script>

<style scoped lang="scss">
.collection-box {
	margin: 50px 0px;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 8px;
	@media (max-width: 769px) {
		margin: 0;
	}
	.title-box {
		margin: 70px 0px 50px 0px;
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		h1 {
			margin: 0;
			font-weight: 600;
			font-size: 28px;
			color: #ffffff;
			@media (max-width: 769px) {
				font-weight: 500;
				font-size: 22px;
			}
			@media (max-width: 480px) {
				font-size: 14px;
			}
		}
		a {
			font-weight: 400;
			font-size: 18px;
			@media (max-width: 769px) {
				font-size: 15px;
			}
			@media (max-width: 480px) {
				font-size: 10px;
			}
		}
	}
	.collection-list {
		width: 100%;
		height: 300px;
		display: flex;
		flex-direction: column;
		align-content: space-between;
		flex-wrap: wrap;
		@media (max-width: 769px) {
			height: 480px;
		}
		@media (max-width: 480px) {
			height: 400px;
		}
		@media (max-width: 376px) {
			height: 320px;
		}
		.item {
			flex-basis: calc(33.3% - 20px);
			margin-bottom: 20px;
			display: flex;
			flex-direction: row;
			justify-content: flex-start;
			align-items: center;
			gap: 10px;
			@media (max-width: 993px) {
				width: 33.3%;
			}
			@media (max-width: 769px) {
				flex-basis: calc(10% - 10px);
				margin-bottom: 10px;
				width: 50%;
			}
			.serial {
				margin: 0;
				font-weight: 600;
				font-size: 24px;
				color: #ffffff;
				@media (max-width: 480px) {
					font-size: 14px;
					font-family: Inter;
					font-weight: 500;
				}
			}
			.nft-image {
				border-radius: 8px;
				@media (max-width: 480px) {
					width: 30%;
				}
			}
			.info {
				display: flex;
				flex-direction: column;
				justify-content: center;
				gap: 5px;
				.name {
					margin: 0;
					font-weight: 500;
					font-size: 20px;
					color: #ffffff;
					@media (max-width: 480px) {
						font-size: 12px;
					}
				}
				.price {
					margin: 0;
					font-weight: 500;
					font-size: 16px;
					color: rgba(255, 255, 255, 0.8);
					@media (max-width: 480px) {
						font-weight: 400;
						font-size: 10px;
					}
				}
			}
		}
	}
}
</style>
