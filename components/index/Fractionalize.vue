<template>
	<div class="container fractionalize">
		<div class="fractionalize-box">
			<h2 class="section-headline">
				Unlock the Value of Your NFTs: Fractionalize and Maximize Your
				Investment Potential
			</h2>
			<h3 class="section-sub-headline">
				Our platform facilitates the fractionalization process, making it simple
				and accessible for NFT owners. We handle the technical complexities,
				such as smart contract
				<a href="#" class="read-more-link">Read More</a>
			</h3>
			<h1 class="steps-title">Fractionalized your NFTs</h1>
			<div class="steps">
				<div
					v-for="(step, index) in stepList"
					:key="index"
					class="step-wrapper"
				>
					<div class="step">
						<div class="box">
							<div class="grad-content">
								<div class="content">
									<div class="details">
										<div class="serial">
											{{ index + 1 }}
										</div>
										<div class="title">
											{{ step.title }}
										</div>
										<div class="description">
											{{ step.description }}
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { Component, Vue } from "nuxt-property-decorator";
@Component({
	name: "Fractionalize",
})
export default class Fractionalize extends Vue {
	stepList = [
		{
			title: "Select an NFT",
			description:
				"Choose an NFT that you want to fractionalize. This NFT should have a high value and be in high demand.",
		},
		{
			title: "Sell fractional shares",
			description:
				"Decide how many fractional shares you want to create. Each share represents a percentage ownership of the NFT. The most common fraction sizes are 10%, 20%, or 25%.",
		},
		{
			title: "Establish a Smart Contract",
			description:
				"Create a smart contract that will govern the fractionalization process. This contract will define the terms and conditions of the fractionalization, including the fraction size, pricing.",
		},
		{
			title: "Deploy the Smart Contract",
			description:
				"Deploy the smart contract on a blockchain network. This contract will serve as a digital ledger that records the ownership of the fractional shares.",
		},
		{
			title: "Mint fractional shares",
			description:
				"Use the smart contract to mint fractional shares of the NFT. Each share will be represented by a unique token that can be bought, sold, and traded.",
		},
		{
			title: "Determine the Price",
			description:
				"Set a price for each fractional share based on the overall value of the NFT. This price will be determined by the market demand for the NFT and the number of shares available.",
		},
		{
			title: "Sell fractional shares",
			description:
				"Sell the fractional shares to investors who are interested in owning a portion of the NFT. Investors can buy and sell shares on  secondary markets, just like with regular stocks.",
		},
		{
			title: "Manage ownership",
			description:
				"The smart contract will manage the ownership of the fractional shares, and the owners will have voting rights to make decisions about the NFT, such as whether to sell it or hold onto it.",
		},
	];
}
</script>

<style scoped lang="scss">
.fractionalize-box {
	margin: 200px 0px 0px 0px;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 8px;
	@media (max-width: 769px) {
		margin: 30px 0px;
	}
	.steps-title {
		width: 100%;
		margin: 80px 0px;
		font-weight: 600;
		font-size: 28px;
		color: #ffffff;
		text-align: left;
	}
	.steps {
		width: 103%;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		.step-wrapper {
			position: relative;
			width: 50%;
			height: 200px;
			&:nth-child(odd) {
				// odd boxes are from left side
				align-self: flex-start;
				.step {
					background: linear-gradient(
						90deg,
						rgba(92, 89, 0, 0) 50%,
						rgba(181, 174, 1, 0.7) 90%,
						rgba(233, 178, 48, 0.7) 100%
					);
					&::after {
						// Dotted straight line with arrow for left step box where right is 0
						content: "";
						position: absolute;
						right: 0;
						top: 48%;
						transform: translate(0, -50%);
						width: 20%;
						height: 10px;
						border: 2px solid #ffb401;
						border-width: 0 0 2px 0;
						border-style: dotted;
					}
					.box {
						.grad-content::after {
							// Straight line between two step box (left and right)
							content: "";
							position: absolute;
							right: 0;
							top: 70%;
							width: 5px;
							height: 100%;
							clip-path: inset(35% 0 0 0);
							transform: translate(0, -50%);
							background: linear-gradient(
								106.63deg,
								rgba(255, 247, 42, 0.7) 11.5%,
								rgba(255, 180, 1, 0.7) 88.5%
							);
						}
					}
					.box::after {
						content: "";
						position: absolute;
						top: 50%;
						transform: translate(0, -50%);
						right: 19.3%;
						width: 0;
						height: 0;
						border-top: 5px solid transparent;
						border-bottom: 5px solid transparent;
						// Head of arrow towards left
						border-right: 5px solid #ffb401;
						border-left: 5px solid transparent;
					}
				}
			}
			&:nth-child(even) {
				// even boxes are from right side
				align-self: flex-end;
				.step {
					float: right;
					background: linear-gradient(
						270deg,
						rgba(92, 89, 0, 0) 50%,
						rgba(181, 174, 1, 0.7) 90%,
						rgba(233, 178, 48, 0.7) 100%
					);
					&::after {
						// Dotted straight line with arrow for left step box where right is 0
						content: "";
						position: absolute;
						left: 0;
						top: 48%;
						transform: translate(0, -50%);
						width: 20%;
						height: 10px;
						border: 2px solid yellow;
						border-width: 0 0 2px 0;
						border-style: dotted;
					}
				}
				.box {
					.grad-content::after {
						// Straight line between two step box (left and right)
						content: "";
						position: absolute;
						left: -5px;
						top: 70%;
						width: 5px;
						height: 100%;
						clip-path: inset(35% 0 0 0);
						transform: translate(0, -50%);
						background: linear-gradient(
							106.63deg,
							rgba(255, 247, 42, 0.7) 11.5%,
							rgba(255, 180, 1, 0.7) 88.5%
						);
					}
				}
				.box::after {
					content: "";
					position: absolute;
					top: 50%;
					transform: translate(0, -50%);
					left: 19.3%;
					width: 0;
					height: 0;
					border-top: 5px solid transparent;
					border-bottom: 5px solid transparent;
					// Head of arrow towards right
					border-left: 5px solid #ffb401;
					border-right: 5px solid transparent;
				}
			}
			&:not(:first-child) {
				// Aliging and adding two circle of the two boxes
				margin-top: -70px;
			}
			&:last-child {
				// Not display a straight line between two step box (left and right) for the last box
				.grad-content::after {
					display: none;
				}
			}
			&:nth-child(odd)::after {
				// Circle besides the dotted arrow for left box
				content: "";
				position: absolute;
				top: 50%;
				transform: translate(0, -50%);
				right: -10px;
				z-index: 99999;
				width: 25px;
				height: 25px;
				border-radius: 50%;
				background: linear-gradient(106.63deg, #fff72a 11.5%, #ffb401 88.5%);
			}
			&:nth-child(even)::before {
				// Circle besides the dotted arrow for right box
				content: "";
				position: absolute;
				top: 50%;
				transform: translate(0, -50%);
				left: -14px;
				z-index: 99999;
				width: 25px;
				height: 25px;
				border-radius: 50%;
				background: linear-gradient(106.63deg, #fff72a 11.5%, #ffb401 88.5%);
			}
			.step {
				// Root of all boxes helps to make border gradient
				width: 80%;
				// height is fixed because we will have 3 lines of description inside the box
				height: 225px;
				padding: 6px;
				border-radius: 16px;
				display: flex;
				flex-direction: row;
				justify-content: center;
				align-items: center;
				.box {
					// First child of the above root class helps to make a border with exact above root class
					width: 100%;
					height: 100%;
					padding: 10px;
					background: $bg-primary;
					border-radius: 16px;
					.grad-content {
						// Another div box to make a gradient border
						width: 100%;
						height: 100%;
						padding: 1px;
						background: linear-gradient(
							152.14deg,
							rgba(255, 247, 42, 0.7) 9.96%,
							rgba(255, 180, 1, 0.7) 100%
						);
						border-radius: 8px;
						display: flex;
						flex-direction: row;
						justify-content: center;
						align-items: center;
						.content {
							// This div box helps to make a gradient border combining with exact above class [.grad-content]
							width: 100%;
							height: 100%;
							background: #0a1a1f;
							border-radius: 8px;
							.details {
								height: 100%;
								padding: 14px;
								display: flex;
								flex-direction: column;
								justify-content: space-between;
								align-items: center;
								gap: 10px;
								.serial {
									width: 36px;
									height: 36px;
									border: 1px solid #ffb401;
									border-radius: 50%;
									color: #ffffff;
									text-align: center;
									vertical-align: middle;
									line-height: 36px;
								}
								.title {
									font-weight: 500;
									font-size: 20px;
									color: #ffffff;
									text-align: center;
								}
								.description {
									font-weight: 400;
									font-size: 14px;
									color: rgba(255, 255, 255, 0.8);
									text-align: center;
								}
							}
						}
					}
				}
			}
		}
	}
}
</style>
