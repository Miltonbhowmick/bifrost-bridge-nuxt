<template>
	<div class="container">
		<div class="feedback-box">
			<h2 class="section-headline">
				Words of Praise: Testimonials from Satisfied Creators, Collectors and
				Traders
			</h2>
			<h3 class="section-sub-headline">
				We value the trust our customers place in us, and we continuously strive
				to exceed their expectations. Our testimonial section serves as a
				testament to our commitment.
			</h3>
			<div class="client-history">
				<div class="details">
					<div class="rating">
						<fa :icon="['fas', 'star']" class="icon" />
						<fa :icon="['fas', 'star']" class="icon" />
						<fa :icon="['fas', 'star']" class="icon" />
						<fa :icon="['fas', 'star']" class="icon" />
						<fa :icon="['fas', 'star']" class="icon" />
					</div>
					<p class="quotes">
						{{ imageItems[0].quotes }}
					</p>
					<div class="client">
						<img
							:src="imageItems[0].imageSrc"
							class="profile-image"
							alt="profile-image"
							width="40"
							height="40"
						/>
						<div class="info">
							<h3 class="name">{{ imageItems[0].name }}</h3>
							<h4 class="position">
								{{ imageItems[0].position }}
							</h4>
						</div>
						<div class="slider-buttons">
							<button @click="handleSlider('prev')">
								<fa :icon="['fas', 'arrow-left']" class="icon" />
							</button>
							<button @click="handleSlider('next')">
								<fa :icon="['fas', 'arrow-right']" class="icon" />
							</button>
						</div>
					</div>
				</div>
				<div class="album">
					<div
						v-for="(item, index) in imageItems"
						:key="index"
						:class="item.className"
						@click="handleImageChange(index)"
					>
						<img
							:src="item.imageSrc"
							:alt="item.name"
							class="client-image cursor-pointer"
						/>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { Component, Vue } from "nuxt-property-decorator";
@Component({
	name: "FeedbackHistory",
})
export default class FeedbackHistory extends Vue {
	imageItems = [
		{
			name: "Cameron Williamson",
			position: "NFT Collector",
			quotes:
				"“I've been using this website for NFT minting, and it has been an absolute game-changer for me as an artist. The process of minting my NFTs is seamless and efficient. And the marketing tools provided have helped me reach a larger audience and gain more exposure for my artwork. I highly recommend this website to any NFT artist looking to take their career to the next level.”",
			imageSrc: "images/clients/client6.png",
			className: "box0",
		},
		{
			name: "Adam Roy",
			position: "NFT Enthusiast",
			quotes:
				"“Finding a platform that offers NFT tokenization and fractionalization services was a game-changer for me as an investor. This website provides an easy and secure way to tokenize and fractionalize NFTs, allowing me to diversify my portfolio and invest in high-value assets. The platform is user-friendly, and the team behind it is incredibly helpful and responsive. I've seen significant returns since I started using this service, and I couldn't be happier with the results.”",
			imageSrc: "images/clients/client1.png",
			className: "box1",
		},
		{
			name: "Sarah White",
			position: "NFT Artist",
			quotes:
				"“As an NFT artist, marketing my work and reaching the right audience has always been a challenge. But thanks to this website's marketing tools, I've been able to showcase my art to a targeted and engaged community. The analytics and insights provided have helped me make data-driven decisions and refine my marketing strategies. I've seen a significant increase in sales and exposure, and I'm grateful for the support and guidance this platform offers.”",
			imageSrc: "images/clients/client2.png",
			className: "box2",
		},
		{
			name: "Kine Williamson",
			position: "Crypto Enthusiast",
			quotes:
				"“I've been minting NFTs and trading cryptocurrencies for a while now, and this website has become my go-to platform. The minting process is straightforward and quick, and the trading interface is intuitive and reliable. The analysis tools provided help me make informed trading decisions, and the platform's security measures give me peace of mind. Whether you're new to NFTs or an experienced trader, this website has everything you need to navigate the crypto and NFT market.”",
			imageSrc: "images/clients/client3.png",
			className: "box3",
		},
		{
			name: "Andre Flower",
			position: "NFT Artist",
			quotes:
				"“As an NFT collector, I've always been interested in exploring new opportunities in the market. This website's NFT tokenization and fractionalization services have allowed me to diversify my strategy and invest in high-value assets without breaking the bank. The platform is secure, transparent, and easy to use. I appreciate the team's dedication to bringing innovative solutions to the NFT and crypto space, and I've had great success in enriching my collection through this platform.”",
			imageSrc: "images/clients/client4.png",
			className: "box4",
		},
		{
			name: "Steve Smith",
			position: "NFT Investor",
			quotes:
				"“I can't express how grateful I am for this website's comprehensive range of services. From NFT minting to trading, marketing tools, and tokenization, it has truly revolutionized the way I approach the NFT and crypto market. The user interface is clean and user-friendly, and the customer support team is incredibly responsive and knowledgeable. Whether you're an artist, investor, or collector, this platform is a must-have in your NFT & crypto toolkit.”",
			imageSrc: "images/clients/client5.png",
			className: "box5",
		},
	];

	currentImageIdx = 0;

	handleImageChange(index) {
		var name = this.imageItems[0].name;
		var position = this.imageItems[0].position;
		var quotes = this.imageItems[0].quotes;
		var imageSrc = this.imageItems[0].imageSrc;
		this.imageItems[0].name = this.imageItems[index].name;
		this.imageItems[0].position = this.imageItems[index].position;
		this.imageItems[0].quotes = this.imageItems[index].quotes;
		this.imageItems[0].imageSrc = this.imageItems[index].imageSrc;

		this.imageItems[index].name = name;
		this.imageItems[index].position = position;
		this.imageItems[index].quotes = quotes;
		this.imageItems[index].imageSrc = imageSrc;
	}
	circularSuffle() {
		var ln = this.imageItems.length;
		var name = this.imageItems[ln - 1].name;
		var position = this.imageItems[ln - 1].position;
		var quotes = this.imageItems[ln - 1].quotes;
		var lastImage = this.imageItems[ln - 1].imageSrc;

		for (var i = ln - 1; i > 0; i--) {
			this.imageItems[i].name = this.imageItems[i - 1].name;
			this.imageItems[i].position = this.imageItems[i - 1].position;
			this.imageItems[i].quotes = this.imageItems[i - 1].quotes;
			this.imageItems[i].imageSrc = this.imageItems[i - 1].imageSrc;
		}
		this.imageItems[0].name = name;
		this.imageItems[0].position = position;
		this.imageItems[0].quotes = quotes;
		this.imageItems[0].imageSrc = lastImage;
	}
	reverseCircularSuffle() {
		var ln = this.imageItems.length;
		var name = this.imageItems[0].name;
		var position = this.imageItems[0].position;
		var quotes = this.imageItems[0].quotes;
		var firstImage = this.imageItems[0].imageSrc;
		for (var i = 1; i < ln; i++) {
			this.imageItems[i - 1].name = this.imageItems[i].name;
			this.imageItems[i - 1].position = this.imageItems[i].position;
			this.imageItems[i - 1].quotes = this.imageItems[i].quotes;
			this.imageItems[i - 1].imageSrc = this.imageItems[i].imageSrc;
		}
		this.imageItems[ln - 1].name = name;
		this.imageItems[ln - 1].position = position;
		this.imageItems[ln - 1].quotes = quotes;
		this.imageItems[ln - 1].imageSrc = firstImage;
	}
	handleSlider(towards) {
		if (towards === "prev") {
			console.log("prev");
			this.reverseCircularSuffle();
		} else if (towards === "next") {
			this.circularSuffle();
		}
	}
}
</script>

<style scoped lang="scss">
.feedback-box {
	margin: 50px 0px;

	.client-history {
		margin: 100px 0px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		gap: 15px;
		@media (max-width: 769px) {
			margin: 30px 0px;
		}
		.details {
			width: 100%;
			flex-basis: 45%;
			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			gap: 35px;
			@media (max-width: 769px) {
				flex-basis: auto;
			}
			@media (max-width: 480px) {
				gap: 25px;
			}
			.rating {
				@media screen and(max-width: 769px) {
					text-align: center;
				}
				.icon {
					width: 20px;
					height: 20px;
					color: $rating-star-color;
					font-size: $rating-star-size;
				}
			}
			.quotes {
				min-height: 180px;
				font-size: $quotes-font-size;
				font-weight: $quotes-font-weight;
				color: $quotes-text;
				text-align: justify;
				@media screen and(max-width: 769px) {
					text-align: center;
				}
				@media (max-width: 480px) {
					font-size: $mobile-rating-star-size;
					font-weight: $mobile-quotes-font-size;
					min-height: unset;
				}
			}
			.client {
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				align-items: center;
				gap: 10px;
				@media (max-width: 769px) {
					justify-content: center;
				}
				.profile-image {
					border-radius: 50%;
				}
				.info {
					.name {
						font-weight: 500;
						font-size: 20px;
						color: #fff;
						@media (max-width: 480px) {
							font-size: 16px;
							font-weight: 500;
						}
					}
					.position {
						font-weight: 500;
						font-size: 16px;
						color: rgba(255, 255, 255, 0.7);
						@media (max-width: 480px) {
							font-size: 12px;
							font-weight: 500;
						}
					}
				}
				.slider-buttons {
					display: flex;
					flex-direction: row;
					gap: 10px;
					@media (max-width: 480px) {
						gap: 0;
					}
					button {
						margin: 0px 5px;
						width: 56px;
						height: 56px;
						background: #ffb401;
						backdrop-filter: blur(4px);
						border: none;
						border-radius: 28px;
						@media (max-width: 480px) {
							width: 28px;
							height: 28px;
						}
						.icon {
							width: 40%;
							font-size: 22px;
							color: rgba(255, 255, 255, 0.7);
						}
					}
				}
			}
		}
		.album {
			flex-basis: 34%;
			display: grid;
			grid-template-rows: repeat(15, 20px);
			grid-template-columns: repeat(15, 20px);
			grid-gap: 10px;

			@media screen and (max-width: 769px) {
				display: none;
			}

			div > .client-image {
				width: 100%;
				height: 100%;
				object-fit: cover;
				border-radius: 4px;
			}
			.box0 {
				display: none;
			}
			.box1 {
				grid-row-start: 5;
				grid-row-end: 9;
				grid-column-start: 3;
				grid-column-end: 8;
			}
			.box2 {
				grid-row-start: 2;
				grid-row-end: 9;
				grid-column-start: 8;
				grid-column-end: 13;
			}
			.box3 {
				grid-row-start: 9;
				grid-row-end: 13;
				grid-column-start: 1;
				grid-column-end: 6;
			}
			.box4 {
				grid-row-start: 9;
				grid-row-end: 16;
				grid-column-start: 6;
				grid-column-end: 11;
			}
			.box5 {
				grid-row-start: 9;
				grid-row-end: 13;
				grid-column-start: 11;
				grid-column-end: 16;
			}
		}
	}
}
</style>
