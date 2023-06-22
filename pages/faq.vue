<template>
	<div class="container">
		<div class="faq below-header-gap">
			<h1 class="section-headline">Frequently Ask Questions</h1>
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
<<<<<<< HEAD
							Accordion Item #1
=======
							Lorem Ipsum is a simply ?
>>>>>>> 7ff17ad (Fixed width issue for table and alubmes and top collections list. These were creating design forced less width problem)
						</button>
					</h2>
					<div
						id="collapseOne"
						class="accordion-collapse collapse show"
						aria-labelledby="headingOne"
						data-bs-parent="#accordionExample"
					>
						<div class="accordion-body">
<<<<<<< HEAD
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
=======
							Lorem ipsum temps us est amet lectus lorem ipsum set in neque of
							grt hlodvb libero tellus loreum Lorem ipsum temps us est amet
							lectus lorem ipsum set in neque of grt hlodvb libero tellus loreum
							Lorem ipsum temps us est amet lectus lorem ipsum set in neque of
							grt hlodvb libero tellus loreum.
>>>>>>> 7ff17ad (Fixed width issue for table and alubmes and top collections list. These were creating design forced less width problem)
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
<<<<<<< HEAD
	.headline {
		font-weight: 600;
		font-size: 30px;
<<<<<<< HEAD
		line-height: 44px;
=======
>>>>>>> 7ff17ad (Fixed width issue for table and alubmes and top collections list. These were creating design forced less width problem)
		text-align: center;
=======
	@media (max-width: 769px) {
		margin: 65px 0px;
>>>>>>> 8cfb459 (Added mobile design and fixed designs issues on mobile and web)
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
<<<<<<< HEAD
			.accordion-header {
				.accordion-button {
					background-color: #031b27;
=======
			border: none;
			.accordion-header {
				.accordion-button {
					border-radius: 0px;
					background-color: #031b27;
					color: #ffffff;
					font-weight: 500;
					font-size: 20px;
					box-shadow: none;
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
>>>>>>> 7ff17ad (Fixed width issue for table and alubmes and top collections list. These were creating design forced less width problem)
				}
			}
		}
	}
}
</style>
