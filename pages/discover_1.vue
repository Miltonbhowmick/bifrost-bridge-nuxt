<template>
	<div class="container">
		<div class="discover below-header-gap">
			<h1 class="headline">
				Unlocking Digital Creativity: A Guide to NFT Minting and Tokenizing
				Unique Assets
			</h1>
			<div class="banner">
				<img src="images/discover-banner.png" alt="discover-banner" />
			</div>
			<div class="description">
				<p>
					NFT minting refers to the process of creating and issuing non-fungible
					tokens (NFTs) on a blockchain network. NFTs are unique digital assets
					that represent ownership or proof of authenticity for a specific item
					or piece of content, such as artwork, collectibles, music, videos, or
					virtual real estate.
				</p>
				<p>
					The minting and tokenization process on Bifrost involves the following
					steps:
				</p>
			</div>
			<ol type="1" class="detail-box">
				<li>
					<p class="detail">
						Create an account: Sign up for an account on Bifrost. Provide the
						necessary details and complete the registration process.
					</p>
				</li>
				<li>
					<p class="detail">
						Prepare your unique asset: Ensure that your unique asset, whether
						it's digital artwork, music, or any other digital content, meets our
						specifications. Check the required file format, size, and quality
						guidelines. Prepare a high-resolution version of your asset for
						optimal presentation.
					</p>
				</li>
				<li>
					<p class="detail">
						Upload your unique asset: Once your account is set up, navigate to
						the NFT minting section. Locate the option to upload your unique
						asset and follow the instructions provided. Select the appropriate
						file from your computer or cloud storage.
					</p>
				</li>
				<li>
					<p class="detail">
						Add metadata: Provide relevant metadata for your NFT. This includes
						a title, description, tags, and any additional information that adds
						value or context to your unique asset. Consider adding details about
						the creation process, inspiration, or any special features
						associated with your artwork.
					</p>
				</li>
				<li>
					<p class="detail">
						Set royalties and pricing: Determine the royalty percentage you'd
						like to receive for secondary sales of your NFT. Additionally, set
						the initial price for your NFT. Consider factors such as market
						demand, scarcity, and the perceived value of your unique asset.
					</p>
				</li>
				<li>
					<p class="detail">
						Review and mint: Take a final look at the information you provided,
						including the asset, metadata, and pricing details. Ensure
						everything is accurate and as desired. Once you're satisfied, click
						on the mint button or a similar option to finalize the process. This
						will create a unique token representing your asset on the
						blockchain.
					</p>
				</li>
				<li>
					<p class="detail">
						Tokenize and fractionalize: Select the specific NFT you want to
						tokenize, determine the number of fractional shares, and set any
						associated terms or conditions. Follow our on-page guidelines for
						completing the tokenization and fractionalization process. It has
						been automated for your convenience and requires minimal input from
						you.
					</p>
				</li>
				<li>
					<p class="detail">
						Promote your NFT: After minting and tokenizing your NFT, it's
						crucial to promote it to attract potential buyers. Utilize the
						marketing tools provided by us, share your NFT on social media,
						engage with NFT communities, and consider collaborations or
						partnerships to increase visibility.
					</p>
				</li>
			</ol>
			<div class="slider-box">
				<client-only>
					<carousel-3d
						:display="3"
						:disable3d="true"
						:space="365"
						:clickable="false"
						:controls-visible="true"
					>
						<slide v-for="(item, i) in items" :index="i" :key="i">
							<div class="item">
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
									<p class="information">
										{{ item.description }}
										<a v-if="item.readMore" href="#" class="read-more-link"
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
	name: "Discover",
	components: {},
})
export default class Discover extends Vue {
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
}
</script>
<style scoped lang="scss">
.discover {
	.headline {
		margin: 30px 0px;
		font-size: 30px;
		font-weight: 600;
		line-height: 46px;
	}
	.banner {
		width: 100%;
	}
	.description {
		margin-top: 40px;
		p {
			margin: 0;
			font-weight: 400;
			font-size: 20px;
			line-height: 44px;
		}
	}
	.detail-box {
		margin-top: 100px;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		li {
			.detail {
				font-weight: 400;
				font-size: 20px;
				line-height: 44px;
			}
			&::marker {
				font-size: 20px;
			}
		}
	}

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
				gap: 10px;
				.feature-icon {
					width: 12%;
					margin-bottom: 15px;
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
