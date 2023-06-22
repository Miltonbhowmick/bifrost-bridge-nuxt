<template>
	<div class="signup">
		<div class="box">
			<img
				class="signup-banner"
				src="images/bifrost-signin-banner.png"
				alt="bifrost signup banner image"
			/>
		</div>
		<div class="box">
			<div class="content">
				<div class="info">
					<h1 class="welcome">Verify your account</h1>
					<h2 class="continue">
						Enter your 6 digits code that you received on your email.
					</h2>
					<ValidationObserver v-slot="{ invalid }" ref="form">
						<form
							class="signup-form"
							method="POST"
							@submit.prevent="handleVerificationConfirm"
						>
							<div class="input-group">
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

							<div class="timer-container">
								<div class="timer">
									<span class="minute">00</span>:<span class="second">{{
										countDown > 9 ? countDown : "0" + countDown
									}}</span>
								</div>

								<p class="text-secondary resend-code">
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

							<button type="submit" :disabled="invalid" class="signup-btn">
								{{ loading ? "Please wait..." : "Continue" }}
							</button>
						</form>
					</ValidationObserver>
					<div class="go-signup">
						<span>Already have account?</span
						><nuxt-link to="/signin">Signin</nuxt-link>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { Component, Vue, Getter, Action } from "nuxt-property-decorator";
import { namespaced } from "~/utils/utils";
import { NS_USER } from "~/utils/store/namespace.names";
import {
	SEND_VERIFICATION_CODE,
	VERIFICATION_CONFIRM,
} from "~/utils/store/action.names";
import { GET_SIGNUP_DATA_FROM_LOCAL_STORAGE } from "~/utils/store/action.names";
import { GET_SIGNUP_DATA } from "~/utils/store/getter.names";

@Component({
	name: "ValidateOtp",
	layout: "custom",
	components: {},
})
export default class ValidateOtp extends Vue {
	@Getter(namespaced(NS_USER, GET_SIGNUP_DATA)) getSignUpData;

	@Action(namespaced(NS_USER, SEND_VERIFICATION_CODE)) sendVerificationCode;
	@Action(namespaced(NS_USER, VERIFICATION_CONFIRM)) verificationConfirm;
	@Action(namespaced(NS_USER, GET_SIGNUP_DATA_FROM_LOCAL_STORAGE))
	getSignUpDataFromLocalStorage;

	error_msg = "";
	loading = false;
	email = "";
	from = "";
	step = 0;
	countDown = 60;
	disableResend = true;

	formData = {
		code: "",
	};

	handleOnComplete(val) {
		this.formData.code = val;
	}

	handleCodeResend() {
		this.sendVerificationCode({
			email: this.email,
			user_checking: false,
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

	handleVerificationConfirm() {
		this.loading = true;
		this.formData["email"] = this.email;
		if (this.getSignUpData != null) {
			this.formData["user"] = this.getSignUpData;
		}
		if (this.from == "email_change") {
			delete this.formData["user"];
		}
		this.verificationConfirm(this.formData)
			.then((data) => {
				this.loading = false;
				var msg = `<div class='t-custom-class'><div>Successfully verified your account!</div></div>`;
				this.$toast.success(msg);
				this.step = 1;
				this.$router.push("/");
			})
			.catch((e) => {
				this.loading = false;
				this.error_msg = "";
				var err_msg = "";
				var msg = e.response.data["code"];
				this.$toast.error(msg[0]);
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

	mounted() {
		this.getSignUpDataFromLocalStorage();
		if (this.$route.query) {
			this.email = this.$route.query.email;
			this.from = this.$route.query.from;
		}
		if (this.email === undefined) {
			this.$router.push({ name: "signin" });
		}
	}

	created() {
		this.countDownTimer();
	}
}
</script>

<style scoped lang="scss">
.signup {
	height: 100vh;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	.box {
		flex-basis: 50%;
		.signup-banner {
			width: 100%;
			height: 100%;
		}
		.content {
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
				gap: 20px;

				.welcome {
					font-weight: 500;
					font-size: 24px;
					color: #ffffff;
				}
				.continue {
					font-weight: 500;
					font-size: 16px;
					color: #8692a6;
				}
				.signup-form {
					width: 100%;
					display: flex;
					flex-direction: column;
					justify-content: flex-start;
					gap: 15px;
					.group {
						display: flex;
						gap: 15px;
					}
					.input-group {
						display: flex;
						flex-direction: column;
						justify-content: flex-start;
						gap: 4px;

						input {
							padding: $input-field-padding;
							background: #ffffff;
							border: none;
							border-radius: $input-field-br-radius;
						}
					}

					.signup-btn {
						padding: 12px 28px;
						background: linear-gradient(270deg, #ffb401 0%, #dad31b 100%);
						border: none;
						border-radius: 6px;
						color: #ffffff;
						font-weight: 500;
						font-size: 20px;
					}
				}
				.go-signup {
					width: 100%;
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

.timer-container {
	display: flex;
	flex-direction: column;
	gap: 0px;
	.timer {
		font-size: 16px;
		margin-bottom: 0px;
		.second {
			width: 20px;
		}
	}
	.disable-link {
		pointer-events: none;
	}
	.resend-code {
		margin-top: 0px;
	}
}
</style>
