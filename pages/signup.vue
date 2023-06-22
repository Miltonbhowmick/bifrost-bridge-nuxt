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
					<div class="back-box">
						<a @click="handleBack" class="btn">Back</a>
					</div>
					<h1 class="welcome">Register your account</h1>
					<h2 class="continue">
						Fill the details bellow to submit register account.
					</h2>
					<ValidationObserver v-slot="{ invalid }" ref="form">
						<form
							class="signup-form"
							method="POST"
							@submit.prevent="handleSignup"
						>
							<div class="group">
								<ValidationProvider
									rules="required"
									v-slot="{ errors }"
									tag="div"
									class="mb-3"
								>
									<div class="input-group">
										<label class="label">First Name</label
										><input
											v-model="formData.first_name"
											type="text"
											name="first name"
											placeholder="Your first name"
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
									rules="required"
									v-slot="{ errors }"
									tag="div"
									class="mb-3"
								>
									<div class="input-group">
										<label class="label">Last Name</label
										><input
											v-model="formData.last_name"
											type="text"
											name="last name"
											placeholder="Your last name"
										/>
									</div>
									<small v-if="errors.length" class="error">
										* {{ errors[0] }}
									</small>
								</ValidationProvider>
							</div>
							<ValidationProvider
								rules="required|email"
								v-slot="{ errors }"
								tag="div"
								class="mb-3"
							>
								<div class="input-group">
									<label class="label">Email</label
									><input
										v-model="formData.email"
										type="email"
										name="email"
										placeholder="Your email"
									/>
								</div>
								<small v-if="errors.length" class="error">
									* {{ errors[0] }}
								</small>
							</ValidationProvider>
							<ValidationProvider
								vid="password"
								ref="password"
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
							<div class="go-terms-condition">
								By signing in, you’re agree to our
								<a href="#">Terms & Condition</a>
								and <a href="#">Privacy Policy</a>.
							</div>

							<div
								class="form-input error my-2"
								v-if="error_msg"
								v-html="error_msg"
							></div>

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
import { Component, Vue, Action } from "nuxt-property-decorator";
import { namespaced } from "~/utils/utils";
import { NS_USER } from "~/utils/store/namespace.names";
import { SIGNUP } from "~/utils/store/action.names";

@Component({
	name: "Signup",
	layout: "custom",
	components: {},
})
export default class Signup extends Vue {
	@Action(namespaced(NS_USER, SIGNUP)) signup;

	formData = {
		first_name: "",
		last_name: "",
		email: "",
		password: "",
		password2: "",
		is_agreed: true,
	};
	loading = false;

	handleSignup() {
		this.loading = true;

		if (this.formData.is_agreed == false) {
			var msg = `<div class='t-custom-class'><div>You need to agree to our terms & conditions!</div></div>`;
			this.$toast.error(msg);
			this.loading = false;
			return false;
		}
		const userData = { ...this.formData };
		delete userData["password2"];
		this.signup(userData)
			.then((data) => {
				this.loading = false;
				this.$router.push({
					name: "validate-otp",
					query: {
						email: this.formData.email,
					},
				});
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

	handleBack() {
		var fullPath = this.$nuxt.context.from;
		if (fullPath) {
			this.$router.go(-1);
		} else {
			this.$router.push("/signin");
		}
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
			// Image on the left side of the signup screen
			width: 100%;
			height: 100%;
		}
		.content {
			// Sigin form on the right side of the signup screen
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
				.back-box {
					position: relative;
					&::before {
						content: "";
						position: absolute;
						width: 12px;
						height: 12px;
						border-left: 3px solid #ffb401;
						border-bottom: 3px solid #ffb401;
						top: 45%;
						transform: rotate(45deg) translate(0%, -50%);
					}
					.btn {
						margin-left: 6px;
						font-weight: 400;
						font-size: 18px;
						color: #8692a6;
					}
				}
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
						.label {
							font-weight: 400;
							font-size: 14px;
							color: #ffffff;
						}
						input {
							padding: $input-field-padding;
							background: #ffffff;
							border: none;
							border-radius: $input-field-br-radius;
						}
					}
					.go-terms-condition {
						font-weight: 500;
						font-size: 14px;
						color: #bdbdbd;
						margin-right: 3px;
						a {
							font-weight: 500;
							font-size: 14px;
							color: #ffb401;
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
