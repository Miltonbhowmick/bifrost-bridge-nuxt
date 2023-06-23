<template>
	<div>
		<div class="container">
			<div class="newsletter-box">
				<h2 class="section-headline">Never Miss a Drop</h2>
				<h3 class="section-sub-headline">
					Subscribe our newsletter to get more free NFTs information and
					resources
				</h3>
				<form method="POST" @submit.prevent="handleSubscribe">
					<input
						type="email"
						id="email"
						name="email"
						placeholder="Enter your email here..."
						required
						v-model="email"
					/>
					<button type="submit">Submit</button>
				</form>
				<div class="community-box">
					<h4 class="social-headline">Join our Community</h4>
					<ul class="social-links">
						<li>
							<a
								:href="getSettings.social.facebook"
								target="_blank"
								rel="nofollow"
								><img
									class="social-icon"
									src="images/socials/facebook.svg"
									alt="facebook-icon"
							/></a>
						</li>
						<li>
							<a
								:href="getSettings.social.twitter"
								target="_blank"
								rel="nofollow"
								><img
									class="social-icon"
									src="images/socials/twitter.svg"
									alt="twitter-icon"
							/></a>
						</li>
						<li>
							<a
								:href="getSettings.social.linkedin"
								target="_blank"
								rel="nofollow"
								><img
									class="social-icon"
									src="images/socials/linkedin.svg"
									alt="linkedin-icon"
							/></a>
						</li>
						<li>
							<a
								:href="getSettings.social.instagram"
								target="_blank"
								rel="nofollow"
								><img
									class="social-icon"
									src="images/socials/instagram.svg"
									alt="instagram-icon"
							/></a>
						</li>
						<li>
							<a
								:href="getSettings.social.discord"
								target="_blank"
								rel="nofollow"
								><img
									class="social-icon"
									src="images/socials/discord.svg"
									alt="discord-icon"
							/></a>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="container footer-container">
			<footer class="footer">
				<div class="box">
					<div class="col">
						<nuxt-link to="/" class="company"
							><img
								v-if="getSettings.settings.company_logo"
								:src="HOST + getSettings.settings.company_logo.original.src"
								:alt="getSettings.settings.company_logo.original.alt"
							/>
							<img v-else src="images/bifrost_logo.png" alt="bifrost-logo" />
						</nuxt-link>
						<p
							v-if="getSettings.settings.footer_description"
							class="description"
						>
							{{ getSettings.settings.footer_description }}
						</p>
						<p v-else class="description">
							Bifrost is an innovative and unique ecosystem that bridges the gap
							between the NFT and crypto markets. By offering cutting-edge
							features, empowering NFT artists, and simplifying the NFT
							experience, the platform aims to unlock the NFT market for a
							broader audience and capture a significant share of the growing
							NFT industry.
						</p>
					</div>
					<div
						v-for="(menu, index) in getSettings.footermenu"
						:key="'menuitem_' + index"
						class="col"
					>
						<h2 v-if="menu.is_active" class="headline">
							{{ menu.title }}
						</h2>
						<ul v-if="menu.is_active" class="link-list">
							<li
								v-for="(submenu, index) in menu.submenus"
								:key="'submenuitem_' + index"
							>
								<a
									v-if="submenu.is_external == true"
									:href="submenu.link_url"
									target="_blank"
									class="link"
									>{{ submenu.link_title }}</a
								>
								<nuxt-link v-else :to="submenu.link_url" class="link">{{
									submenu.link_title
								}}</nuxt-link>
							</li>
						</ul>
					</div>
					<div class="col">
						<h2 class="headline">Bifrost</h2>
						<ul class="link-list">
							<li>
								<a class="link"
									>Company Number: {{ getSettings.settings.company_number }}</a
								>
							</li>
							<li>
								<a class="link">
									<fa :icon="['fas', 'phone']" class="icon" />
									{{ getSettings.settings.contact_number }}</a
								>
							</li>
							<li>
								<a class="link">
									<fa :icon="['fas', 'envelope']" class="icon" />
									{{ getSettings.settings.contact_email }}</a
								>
							</li>
							<li>
								<a class="link"
									><fa :icon="['fas', 'location-dot']" class="icon" />{{
										getSettings.settings.address
									}}
								</a>
							</li>
						</ul>
					</div>
				</div>
			</footer>
			<p v-if="getSettings.settings.copyright_text" class="copyright">
				{{ getSettings.settings.copyright_text }}
			</p>
		</div>
	</div>
</template>

<script>
import { Component, Vue, Getter, Action } from "nuxt-property-decorator";
import { SUBSCRIBE } from "../utils/store/action.names";
import { GET_SETTINGS } from "../utils/store/getter.names";
import { NS_SETTINGS } from "../utils/store/namespace.names";
import { namespaced } from "../utils/utils";

@Component({
	name: "Footer",
	components: {},
})
export default class Footer extends Vue {
	@Getter(namespaced(NS_SETTINGS, GET_SETTINGS)) getSettings;

	@Action(namespaced(NS_SETTINGS, SUBSCRIBE)) subscribe;

	email = "";

	HOST = this.$config.HOST;

	handleSubscribe() {
		this.subscribe({ email: this.email })
			.then((data) => {
				var msg = `<div class='t-custom-class'><div>Successfully subscribe to our newsletter!</div></div>`;
				this.$toast.success(msg);
			})
			.catch((e) => {
				var msg = `<div class='t-custom-class'><div>{{ $t('signin_something_went_wrong') }}</div></div>`;
				this.$toast.error(msg);
			});
	}
}
</script>

<style scoped lang="scss">
.newsletter-box {
	margin: 70px 0px;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 8px;
	form {
		position: relative;
		// margin-top: 10px;
		width: 50%;
		@media (max-width: 769px) {
			width: 80%;
		}
		input {
			padding: 14px 8px;
			width: 100%;
			border: 1px solid rgba(255, 255, 255, 0.6);
			border-radius: 8px;
			background: none;
			color: rgba(255, 255, 255, 0.7);
			@media (max-width: 769px) {
				padding: 14px 8px;
			}
			&::placeholder {
				font-size: 12px;
			}
		}
		button {
			position: absolute;
			right: 10px;
			top: 50%;
			transform: translateY(-50%);
			padding: 5px 20px;
			background: linear-gradient(270deg, #ffb401 0%, #dad31b 100%);
			border: none;
			border-radius: 8px;
			font-weight: 500;
			font-size: 14px;
			color: #ffffff;
		}
	}
	.community-box {
		display: flex;
		flex-direction: column;
		gap: 8px;
		margin-top: 30px;
		.social-headline {
			font-weight: 600;
			font-size: 28px;
			text-align: center;
			color: $section-headline-text;
			@media (max-width: 769px) {
				font-weight: 600;
				font-size: 20px;
			}
			@media (max-width: 480px) {
				font-size: 16px;
			}
		}
		.social-links {
			display: flex;
			justify-content: center;
			align-items: center;
			gap: 15px;
			li {
				a {
					width: 100%;
					height: 100%;
				}
			}
		}
	}
}
.footer {
	padding: 1px 0px 1px 0px;
	background: linear-gradient(
		152.14deg,
		rgba(255, 247, 42, 0.25) 9.96%,
		rgba(255, 180, 1, 0.25) 100%
	);
	.box {
		padding: 30px 0px 30px 0px;
		background: #031b27;
		display: flex;
		flex-direction: row;
		justify-content: center;
		gap: 76px;
		@media (max-width: 769px) {
			flex-direction: column;
			align-items: center;
			gap: 20px;
		}
		.col {
			width: 100%;
			display: flex;
			flex-direction: column;
			justify-content: center;
			gap: 0px;
			&:first-child {
				flex-basis: 20%;
				gap: 20px;
				@media (max-width: 769px) {
					align-items: center;
				}
			}
			.company {
				width: 35%;
				@media (max-width: 769px) {
					text-align: center;
				}
			}
			.description {
				font-weight: 400;
				font-size: 14px;
				color: rgba(206, 204, 214, 0.7);
				@media (max-width: 769px) {
					text-align: center;
				}
			}
			.headline {
				margin: 0;
				font-weight: 500;
				font-size: 16px;
				color: #ffffff;
				@media (max-width: 769px) {
					text-align: center;
				}
			}
			.link-list {
				li {
					margin: 8px 0px;
					@media (max-width: 769px) {
						text-align: center;
					}
					.link {
						font-weight: 300;
						font-size: 14px;
						color: #ceccd6;
						.icon {
							margin-top: 5px;
							width: 15px;
							height: 15px;
						}
					}
				}
			}
		}
	}
}
.copyright {
	padding: 30px 0px;
	font-weight: 400;
	font-size: 16px;
	text-align: center;
	color: #9ca3af;
	@media (max-width: 480px) {
		font-size: 12px;
	}
}
</style>
