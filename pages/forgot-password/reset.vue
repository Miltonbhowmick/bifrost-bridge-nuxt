<template>
	<div class="signin">
		<div class="box">
			<img
				class="signin-banner"
				src="/images/bifrost-signin-banner.png"
				alt="bifrost signin banner image"
			/>
		</div>
		<div class="box">
			<div class="content">
				<div class="info">
					<!-- <h1 class="welcome">Welcome</h1> -->
					<img
						class="company-logo"
						src="/images/bifrost_logo.png"
						alt="bifrost-logo"
					/>
					<h2 class="continue">Forget your password?</h2>

					<ValidationObserver
						class="signin-form"
						v-slot="{ invalid }"
						tag="form"
						@submit.prevent="handleForgetPassword"
					>
						<p v-if="step == 0" class="text-secondary">
							Enter your 6 digits code that you received on your email.
						</p>
						<p v-else-if="step == 1" class="text-secondary">
							Set the new password for your account so you can sign in and
							access all featuress.
						</p>

						<div v-if="step == 0" class="mt-4 mb-2 otp-input-wrapper">
							<v-otp-input
								ref="otpInput"
								input-classes="otp-input"
								separator=""
								:num-inputs="6"
								:should-auto-focus="true"
								:is-input-num="true"
								@on-complete="handleOnComplete"
							/>
						</div>

						<div class="row">
							<div class="mb-3 mb-0" v-if="error_msg">
								<p class="error" v-html="error_msg"></p>
							</div>

							<div class="mb-2 d-flex text-active timer" v-if="step == 0">
								<span class="minute">00</span>:<span class="second">{{
									countDown > 9 ? countDown : "0" + countDown
								}}</span>
							</div>

							<p v-if="step == 0" class="text-secondary resend-code">
								If you didn’t receive a code!<a
									href="#"
									class="text-active"
									@click.prevent="handleCodeResend"
									:class="disableResend ? 'disable-link' : ''"
								>
									Resend</a
								>
							</p>
						</div>

						<ValidationProvider
							vid="password"
							ref="password"
							rules="required|min:8"
							v-slot="{ errors }"
							tag="div"
							class="mb-3"
							v-if="step == 1"
						>
							<div class="input-group">
								<label class="label">Password</label
								><input
									v-model="formData.password"
									type="password"
									placeholder="Your password"
									name="password"
								/>
							</div>
							<small v-if="errors.length" class="error">
								* {{ errors[0] }}
							</small>
						</ValidationProvider>

						<ValidationProvider
							vid="password2"
							rules="required|confirmed:password"
							v-slot="{ errors }"
							tag="div"
							class="mb-3"
							v-if="step == 1"
						>
							<div class="input-group">
								<label class="label">Retype Password</label
								><input
									v-model="formData.password2"
									type="password"
									placeholder="Retype password"
									name="retype password"
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

						<button
							v-if="step == 0"
							type="button"
							:disabled="invalid"
							class="login-btn"
							@click="handleVerifyCodeForForgetPassword"
						>
							{{ loading ? "Please wait..." : "Continue" }}
						</button>
						<button
							v-if="step == 1"
							type="submit"
							:disabled="invalid"
							class="login-btn"
						>
							{{ loading ? "Please wait..." : "Update Password" }}
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
import {
	SEND_VERIFICATION_CODE,
	FORGET_PASSWORD,
	VERIFY_CODE_FOR_FORGET_PASSWORD,
} from "~/utils/store/action.names";

@Component({
	name: "ForgetPassword",
	layout: "custom",
	components: {},
})
export default class ForgetPassword extends Vue {
	@Action(namespaced(NS_USER, SEND_VERIFICATION_CODE)) sendVerificationCode;
	@Action(namespaced(NS_USER, FORGET_PASSWORD)) forgetPassword;
	@Action(namespaced(NS_USER, VERIFY_CODE_FOR_FORGET_PASSWORD))
	verifyCodeForForgetPassword;

	error_msg = "";
	email = "";
	step = 0;
	loading = false;
	countDown = 60;
	disableResend = true;

	formData = {
		code: "",
		password: "",
		password2: "",
	};

	verify_error_msg = "";

	handleOnComplete(val) {
		this.formData.code = val;
	}

	handleCodeResend() {
		this.sendVerificationCode({
			email: this.email,
			reason: "forget_password",
		})
			.then((data) => {
				this.countDown = 60;
				this.countDownTimer();
				this.disableResend = true;
				var msg = `<div class='t-custom-class'><div>Verification code send successfully!</div></div>`;
				this.$toast.success(msg);
			})
			.catch((e) => {
				this.error_msg = "";
				var err_msg = "";
				for (const [key, value] of Object.entries(e.response.data)) {
					const err = `<p>${value}</p>`;
					err_msg = err_msg + err;
				}
				this.error_msg = err_msg;
			});
	}

	handleVerifyCodeForForgetPassword() {
		this.loading = true;

		if (this.formData.code.length < 1) {
			this.loading = false;
			var msg = `<div class='t-custom-class'><div>Enter otp code!</div></div>`;
			this.$toast.error(msg);
			return false;
		} else {
			this.countDown = 0;
			this.countDownTimer();
			this.disableResend = false;
		}

		let data = {
			email: this.email,
			code: this.formData.code,
		};

		this.verifyCodeForForgetPassword(data)
			.then((data) => {
				this.loading = false;
				let verifyStatus = data.verify_status;
				if (verifyStatus == true) {
					var msg = `<div class='t-custom-class'><div>OTP has been matched successfully!</div></div>`;
					this.$toast.success(msg);
					this.step = 1;
				} else {
					var msg = `<div class='t-custom-class'><div>Invalid OTP!</div></div>`;
					this.$toast.error(msg);
					this.verify_error_msg = data.verify_error_msg;
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
					var msg = `<div class='t-custom-class'><div>Something went wrong!</div></div>`;
					this.$toast.error(msg);
				}
			});
	}

	handleForgetPassword() {
		this.loading = true;
		this.formData["email"] = this.email;
		this.forgetPassword(this.formData)
			.then((data) => {
				this.loading = false;
				var msg = `<div class='t-custom-class'><div>Successfully changed your password!</div></div>`;
				this.$toast.success(msg);
				this.step = 2;
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
					var msg = `<div class='t-custom-class'><div>Something went wrong!</div></div>`;
					this.$toast.error(msg);
				}
			});
	}

	countDownTimer() {
		if (this.countDown > 0) {
			setTimeout(() => {
				this.countDown -= 1;
				this.countDownTimer();
			}, 1000);
		} else {
			this.disableResend = false;
		}
	}

	created() {
		this.countDownTimer();
	}

	mounted() {
		if (this.$route.query) {
			this.email = this.$route.query.email;
		}
		if (this.email === undefined) {
			this.$router.push({ name: "signin" });
		}
	}
}
</script>

<style scoped lang="scss">
.signin {
	height: 100vh;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	.box {
		flex-basis: 50%;
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
				.welcome {
					font-weight: 600;
					font-size: 28px;
					color: #ffffff;
				}
				.continue {
					font-weight: 500;
					font-size: 24px;
					color: #ffffff;
				}
				.signin-form {
					width: 100%;
					display: flex;
					flex-direction: column;
					justify-content: flex-start;
					gap: 15px;
					.input-group {
						display: flex;
						flex-direction: column;
						justify-content: flex-start;
						gap: 4px;
						.label {
							font-weight: 400;
							font-size: 14px;
							color: #ffffff;
						}
						input {
							padding: $input-field-padding;
							background: #ffffff;
							border-radius: $input-field-br-radius;
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
.disable-link {
	pointer-events: none;
}
</style>
