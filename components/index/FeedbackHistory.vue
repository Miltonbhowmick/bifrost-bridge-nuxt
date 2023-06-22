<template>
	<div class="container">
		<div class="feedback-box">
			<h2 class="section-headline">
				Words of Praise: Testimonials from Satisfied NFT Creators, Collectors
				and Traders
			</h2>
			<h3 class="section-sub-headline">
				We value the trust our customers place in us, and we continuously strive
				to exceed their expectations. Our testimonial section serves as a
				testament to our commitment to
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
			position: "Senior analysis",
			quotes:
				"“Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.”",
			imageSrc: "images/clients/client6.png",
			className: "box0",
		},
		{
			name: "Adam Roy",
			position: "Crypto analysis",
			quotes:
				"“Aliqua id asd feig rhoe erogwe orwhr oegme dolore gfe4ypdfadf ut voluptate aute id deserunt nisi.”",
			imageSrc: "images/clients/client1.png",
			className: "box1",
		},
		{
			name: "White",
			position: "Blockchain analysis",
			quotes:
				"“Aliqua id asd feig rhoeadvadg ageg r hrhr id deserunt nisi. etetew wg weg.”",
			imageSrc: "images/clients/client2.png",
			className: "box2",
		},
		{
			name: "Kine Williamson",
			imageSrc: "images/clients/client3.png",
			className: "box3",
		},
		{
			name: "Andre Flower",
			imageSrc: "images/clients/client4.png",
			className: "box4",
		},
		{
			name: "Steve Smith",
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
				@media (max-width: 769px) {
					justify-content: space-evenly;
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
