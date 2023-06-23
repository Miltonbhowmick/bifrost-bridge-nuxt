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
					<h1 class="welcome">Welcome</h1>
					<div class="company-logo">
						<img src="images/bifrost_logo.png" alt="bifrost-logo" />
					</div>
					<h2 class="continue">Sign in to continue</h2>

					<ValidationObserver
						class="signin-form"
						v-slot="{ invalid }"
						tag="form"
						@submit.prevent="handleSignin"
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
									v-model="formData.username"
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
						<ValidationProvider
							rules="required|min:8"
							v-slot="{ errors }"
							tag="div"
							class="mb-3"
						>
							<div class="input-group">
								<label class="label">Password</label
								><input
									v-model="formData.password"
									type="password"
									name="password"
									placeholder="Your Password"
									:class="{
										'red-border': errors[0],
									}"
								/>
							</div>
							<small v-if="errors.length" class="error">
								* {{ errors[0] }}
							</small>
						</ValidationProvider>
						<div class="forget-remember">
							<div class="group check-group">
								<input id="forgetInput" type="checkbox" />
								<label class="label" for="forgetInput">Remember Me</label>
							</div>
							<div class="group">
								<nuxt-link to="/forgot-password" class="forget-password-link"
									>Forgot Password?</nuxt-link
								>
							</div>
						</div>

						<div
							class="form-input error my-2"
							v-if="error_msg"
							v-html="error_msg"
						></div>

						<button type="submit" :disabled="invalid" class="login-btn">
							{{ loading ? "Please wait..." : "Sign in" }}
						</button>
					</ValidationObserver>
					<!-- <div class="social-continue-border">
						<div class="border"></div>
						<div class="text">or continue with</div>
						<div class="border"></div>
					</div> -->
					<!-- <div class="social-links">
						<ul>
							<li>
								<a href="#"
									><img
										src="images/socials/facebook-signin.png"
										alt="facebook-signin"
								/></a>
							</li>
							<li>
								<a href="#"
									><img
										src="images/socials/google-signin.png"
										alt="google-signin"
										width="10"
								/></a>
							</li>
						</ul>
					</div> -->
					<div class="go-signup">
						<span>Don,t have an account?</span
						><nuxt-link to="/signup">Sign up</nuxt-link>
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
import { SIGNIN, SEND_VERIFICATION_CODE } from "~/utils/store/action.names";

@Component({
	name: "Signin",
	layout: "custom",
	components: {},
})
export default class Signin extends Vue {
	@Action(namespaced(NS_USER, SIGNIN)) signin;
	@Action(namespaced(NS_USER, SEND_VERIFICATION_CODE)) sendVerificationCode;

	error_msg = "";
	loading = false;

	formData = {
		username: "",
		password: "",
	};

	commonSendVerificationCode(data, popup = false) {
		this.sendVerificationCode({
			email: data.email,
		}).then((data) => {
			if (popup == true) {
				var msg = `<div class='t-custom-class'><div>Successfully send verification code to your email!</div></div>`;
				this.$toast.success(msg);
			}
		});
	}

	handleSignin() {
		this.loading = true;
		this.signin(this.formData)
			.then((data) => {
				let token = data.token;
				this.userProfile = data;
				if (token === null && data.is_email_verified == false) {
					this.commonSendVerificationCode(data);
					this.$router.push({
						path: "/validate-otp",
						name: "validate-otp",
						query: {
							email: data.email,
							from: "email_change",
						},
					});
				} else {
					this.$router.push({ name: "index" });
				}
			})
			.catch((e) => {
				this.loading = false;
				this.error_msg = "";
				var err_msg = "";
				if (e.response.status === 400) {
					for (const [key, value] of Object.entries(e.response.data)) {
						const err = `<p>${value}</p>`;
						err_msg = err_msg + err;
					}
					this.error_msg = err_msg;
				} else {
					var msg = `<div class='t-custom-class'><div>{{ $t('signin_something_went_wrong') }}</div></div>`;
					this.$toast.error(msg);
				}
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
				.company-logo {
					width: 30%;
				}
				.welcome {
					font-weight: 600;
					font-size: 28px;
					color: #ffffff;
					@media (max-width: 480px) {
						font-size: 18px;
					}
				}
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
								@media (max-width: 480px) {
									font-size: 12px;
								}
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
								font-size: 14px;
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
							margin-top: 8px;
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
