<template>
	<div class="container">
		<div class="faq below-header-gap">
			<h1 class="section-headline">Frequently Asked Questions</h1>
			<h2 class="section-sub-headline">
				Here, you will find answers to the most common questions that you may
				have.
			</h2>
			<div class="accordion" id="accordionExample">
				<div class="accordion-item">
					<h2 class="accordion-header" id="headingOne">
						<button
							class="accordion-button"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#collapseOne"
							aria-expanded="true"
							aria-controls="collapseOne"
						>
							How does the NFT minting process work on your website?
						</button>
					</h2>
					<div
						id="collapseOne"
						class="accordion-collapse collapse show"
						aria-labelledby="headingOne"
						data-bs-parent="#accordionExample"
					>
						<div class="accordion-body">
							Our NFT minting process is simple and user-friendly. Once you
							create an account, you can upload your digital artwork or content,
							add relevant metadata, set a price, and mint your NFT. Our
							platform guides you through the entire process, ensuring a smooth
							experience.
						</div>
					</div>
				</div>
				<div class="accordion-item">
					<h2 class="accordion-header" id="headingTwo">
						<button
							class="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#collapseTwo"
							aria-expanded="false"
							aria-controls="collapseTwo"
						>
							Can I trade cryptocurrencies on your platform?
						</button>
					</h2>
					<div
						id="collapseTwo"
						class="accordion-collapse collapse"
						aria-labelledby="headingTwo"
						data-bs-parent="#accordionExample"
					>
						<div class="accordion-body">
							Yes, our platform supports crypto trading alongside NFT trading.
							You can seamlessly trade popular cryptocurrencies, including
							Bitcoin, Ethereum, and more. Our intuitive trading interface
							provides real-time market data, charts, and order books to assist
							you in making informed trading decisions.
						</div>
					</div>
				</div>
				<div class="accordion-item">
					<h2 class="accordion-header" id="headingThree">
						<button
							class="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#collapseThree"
							aria-expanded="false"
							aria-controls="collapseThree"
						>
							How can your marketing tools benefit NFT artists?
						</button>
					</h2>
					<div
						id="collapseThree"
						class="accordion-collapse collapse"
						aria-labelledby="headingThree"
						data-bs-parent="#accordionExample"
					>
						<div class="accordion-body">
							Our marketing tools are designed to empower NFT artists and help
							them reach a wider audience. We provide various promotional
							features such as social media integrations, featured pages,
							analytics, and insights. These tools enable artists to showcase
							their work effectively and gain exposure within the NFT community.
						</div>
					</div>
				</div>
				<div class="accordion-item">
					<h2 class="accordion-header" id="headingFour">
						<button
							class="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#collapseFour"
							aria-expanded="false"
							aria-controls="collapseFour"
						>
							What is NFT tokenization and fractionalization, and how can it
							benefit investors?
						</button>
					</h2>
					<div
						id="collapseFour"
						class="accordion-collapse collapse"
						aria-labelledby="headingFour"
						data-bs-parent="#accordionExample"
					>
						<div class="accordion-body">
							NFT tokenization and fractionalization allow investors to own a
							fraction of high-value NFTs. Through our platform, you can
							tokenize NFTs, break them into smaller pieces, and offer
							fractional ownership to a group of investors. This approach
							provides accessibility to valuable assets and allows investors to
							diversify their portfolios, all the while working like regular
							crypto trading everyone is familiar with.
						</div>
					</div>
				</div>
				<div class="accordion-item">
					<h2 class="accordion-header" id="headingFive">
						<button
							class="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#collapseFive"
							aria-expanded="false"
							aria-controls="collapseFive"
						>
							How secure is your platform for NFT and cryptocurrency
							transactions?
						</button>
					</h2>
					<div
						id="collapseFive"
						class="accordion-collapse collapse"
						aria-labelledby="headingFive"
						data-bs-parent="#accordionExample"
					>
						<div class="accordion-body">
							Security is our utmost priority. We employ robust encryption
							protocols and follow industry best practices to ensure the safety
							of your NFTs and cryptocurrencies. Our platform incorporates
							multi-factor authentication and regular security audits to provide
							a secure environment for all transactions and user data.
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script></script>
<style scoped lang="scss">
.faq {
	margin-left: 150px;
	margin-right: 150px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 30px;
	@media (max-width: 480px) {
		margin: 100px 0px 0px 0px;
		gap: 10px;
	}

	// Modifying boostrap design
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
}
</style>
