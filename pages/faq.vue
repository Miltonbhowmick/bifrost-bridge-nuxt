<template>
	<div class="container">
		<div class="faq below-header-gap">
			<h1 class="headline">Frequently Ask Questions</h1>
			<div class="description">
				<h2>
					Pellentesque cras adipiscing tempus libero vel nullam mauris tellus.
					Aliquam ultrices tellus consequat amet, lectus aliquam est in neque.
				</h2>
			</div>
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
							Accordion Item #1
						</button>
					</h2>
					<div
						id="collapseOne"
						class="accordion-collapse collapse show"
						aria-labelledby="headingOne"
						data-bs-parent="#accordionExample"
					>
						<div class="accordion-body">
							<strong>This is the first item's accordion body.</strong>
							It is shown by default, until the collapse plugin adds the
							appropriate classes that we use to style each element. These
							classes control the overall appearance, as well as the showing and
							hiding via CSS transitions. You can modify any of this with custom
							CSS or overriding our default variables. It's also worth noting
							that just about any HTML can go within the
							<code>.accordion-body</code>, though the transition does limit
							overflow.
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
							Accordion Item #2
						</button>
					</h2>
					<div
						id="collapseTwo"
						class="accordion-collapse collapse"
						aria-labelledby="headingTwo"
						data-bs-parent="#accordionExample"
					>
						<div class="accordion-body">
							<strong>This is the second item's accordion body.</strong>
							It is hidden by default, until the collapse plugin adds the
							appropriate classes that we use to style each element. These
							classes control the overall appearance, as well as the showing and
							hiding via CSS transitions. You can modify any of this with custom
							CSS or overriding our default variables. It's also worth noting
							that just about any HTML can go within the
							<code>.accordion-body</code>, though the transition does limit
							overflow.
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
							Accordion Item #3
						</button>
					</h2>
					<div
						id="collapseThree"
						class="accordion-collapse collapse"
						aria-labelledby="headingThree"
						data-bs-parent="#accordionExample"
					>
						<div class="accordion-body">
							<strong>This is the third item's accordion body.</strong>
							It is hidden by default, until the collapse plugin adds the
							appropriate classes that we use to style each element. These
							classes control the overall appearance, as well as the showing and
							hiding via CSS transitions. You can modify any of this with custom
							CSS or overriding our default variables. It's also worth noting
							that just about any HTML can go within the
							<code>.accordion-body</code>, though the transition does limit
							overflow.
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
	.headline {
		font-weight: 600;
		font-size: 30px;
		line-height: 44px;
		text-align: center;
	}
	.description {
		h2 {
			margin: 0;
			font-weight: 400;
			font-size: 20px;
			line-height: 28px;
			text-align: center;
		}
	}

	// Modifying boostrap design
	.accordion {
		width: 100%;
		.accordion-item {
			.accordion-header {
				.accordion-button {
					background-color: #031b27;
				}
			}
		}
	}
}
</style>
