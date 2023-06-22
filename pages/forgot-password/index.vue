<template>
	<div class="signin">
		<div class="box banner-box">
			<img
				class="signin-banner"
				src="images/bifrost-signin-banner.png"
				alt="bifrost signin banner image"
			/>
		</div>
		<div class="box">
			<div class="content">
				<div class="info">
					<!-- <h1 class="welcome">Welcome</h1> -->
					<img
						class="company-logo"
						src="images/bifrost_logo.png"
						alt="bifrost-logo"
					/>
					<h2 class="continue">Forget your password?</h2>

					<ValidationObserver
						class="signin-form"
						v-slot="{ invalid }"
						tag="form"
						@submit.prevent="handleForgetPassword"
					>
						<ValidationProvider
							rules="required"
							v-slot="{ errors }"
							tag="div"
							class="mb-3"
						>
							<div class="input-group">
								<label class="label">Email</label
								><input
									v-model="formData.email"
									name="email"
									type="email"
									placeholder="Your Email"
									:class="{
										'red-border': errors[0],
									}"
								/>
							</div>
							<small v-if="errors.length" class="error">
								* {{ errors[0] }}
							</small>
						</ValidationProvider>

						<div
							class="form-input error my-2"
							v-if="error_msg"
							v-html="error_msg"
						></div>

						<button type="submit" :disabled="invalid" class="login-btn">
							{{ loading ? "Please wait..." : "Continue" }}
						</button>
					</ValidationObserver>

					<div class="go-signup">
						<span>Already have account?</span
						><nuxt-link to="/signin">Sign in</nuxt-link>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { Component, Vue, Action } from "nuxt-property-decorator";
import { namespaced } from "~/utils/utils";
import { NS_USER } from "~/utils/store/namespace.names";
import { SEND_VERIFICATION_CODE } from "~/utils/store/action.names";

@Component({
	name: "ForgetPassword",
	layout: "custom",
	components: {},
})
export default class ForgetPassword extends Vue {
	@Action(namespaced(NS_USER, SEND_VERIFICATION_CODE)) sendVerificationCode;

	error_msg = "";
	loading = false;

	formData = {
		email: "",
	};

	handleForgetPassword() {
		this.loading = true;
		this.sendVerificationCode(this.formData)
			.then((data) => {
				this.$router.push({
					name: "forgot-password-reset",
					query: {
						email: this.formData.email,
					},
				});
			})
			.catch((e) => {
				this.loading = false;
				this.error_msg = "";
				var err_msg = "";
				for (const [key, value] of Object.entries(e.response.data)) {
					const err = `<p>${value}</p>`;
					err_msg = err_msg + err;
				}
				this.error_msg = err_msg;
			});
	}
}
</script>

<style scoped lang="scss">
.signin {
	height: 100vh;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	@media (max-width: 769px) {
		flex-direction: column;
		justify-content: center;
	}
	.box {
		flex-basis: 50%;
		&.banner-box {
			@media (max-width: 769px) {
				display: none;
			}
		}
		.signin-banner {
			// Image on the left side of the signin screen
			width: 100%;
			height: 100%;
		}
		.content {
			// Sigin form on the right side of the signin screen
			height: 100%;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;

			.info {
				width: 60%;
				display: flex;
				flex-direction: column;
				align-items: flex-start;
				gap: 14px;
				@media (max-width: 769px) {
					width: 85%;
					align-items: center;
				}
				// .welcome {
				// 	font-weight: 600;
				// 	font-size: 28px;
				// 	color: #ffffff;
				// 	@media (max-width: 480px) {
				// 		font-size: 18px;
				// 	}
				// }
				.continue {
					font-weight: 500;
					font-size: 24px;
					color: #ffffff;
					@media (max-width: 480px) {
						font-size: 14px;
					}
				}
				.signin-form {
					width: 100%;
					display: flex;
					flex-direction: column;
					justify-content: flex-start;
					gap: 15px;
					@media (max-width: 480px) {
						gap: 8px;
					}
					.input-group {
						display: flex;
						flex-direction: column;
						justify-content: flex-start;
						gap: 4px;
						.label {
							font-weight: 400;
							font-size: 14px;
							color: #ffffff;
							@media (max-width: 480px) {
								font-size: 12px;
							}
						}
						input {
							padding: $input-field-padding;
							background: #ffffff;
							border-radius: $input-field-br-radius;
							&::placeholder {
								@media (max-width: 480px) {
									font-size: 12px;
								}
							}
						}
					}
					.forget-remember {
						display: flex;
						flex-direction: row;
						justify-content: space-between;
						align-items: center;
						.group {
							flex-basis: 50%;
							a {
								float: right;
								color: #fc5760;
							}
						}
						.check-group {
							display: flex;
							flex-direction: row;
							justify-content: flex-start;
							align-items: center;
							gap: 6px;
							.label {
								font-weight: 500;
								font-size: 12px;
								color: #ffffff;
								@media (max-width: 480px) {
									font-size: 12px;
								}
							}
						}
					}
					.login-btn {
						padding: 12px 28px;
						background: linear-gradient(270deg, #ffb401 0%, #dad31b 100%);
						border: none;
						border-radius: 6px;
						color: #ffffff;
						font-weight: 500;
						font-size: 20px;
						@media (max-width: 480px) {
							margin-top: 6px;
							padding: 8px 28px;
							font-size: 16px;
						}
					}
				}
				.social-continue-border {
					margin-top: 30px;
					width: 100%;
					display: flex;
					flex-direction: row;
					justify-content: space-between;
					align-items: center;
					.border {
						width: 32%;
					}
					.text {
						color: #ffffff;
					}
				}
				.social-links {
					margin-top: 15px;
					width: 100%;
					ul {
						display: flex;
						justify-content: center;
						gap: 12px;
						list-style: none;
						li {
							padding: 10px;
							background: #ffffff;
							border: 3px solid #dad31b;
							border-radius: 6px;
							a {
								img {
									width: 20px;
									height: 20px;
								}
							}
						}
					}
				}
				.go-signup {
					margin-top: 15px;
					width: 100%;
					text-align: center;
					span {
						font-weight: 500;
						font-size: 14px;
						color: #bdbdbd;
						margin-right: 3px;
					}
					a {
						font-weight: 500;
						font-size: 14px;
						color: #ffb401;
					}
				}
			}
		}
	}
}
</style>
