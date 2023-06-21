<template>
	<div>
		<div class="container">
			<div class="newsletter-box">
				<h2 class="section-headline">Never Miss a Drop</h2>
				<h3 class="section-sub-headline">
					Subscribe our newsletter to get more free NFTs information and
					resources
				</h3>
				<form>
					<input
						type="email"
						id="email"
						name="email"
						placeholder="Enter your email here..."
						required
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
								><img src="images/socials/twitter.svg" alt="facebook-icon"
							/></a>
						</li>
						<li>
							<a
								:href="getSettings.social.linkedin"
								target="_blank"
								rel="nofollow"
								><img src="images/socials/linkedin.svg" alt="linkedin-icon"
							/></a>
						</li>
						<li>
							<a
								:href="getSettings.social.instagram"
								target="_blank"
								rel="nofollow"
								><img src="images/socials/instagram.svg" alt="instagram-icon"
							/></a>
						</li>
						<li>
							<a
								:href="getSettings.social.telegram"
								target="_blank"
								rel="nofollow"
								><img src="images/socials/telegram.svg" alt="telegram-icon"
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
							Bifrost is the most versatile and dynamic application on the
							market which supplies trading analysis tools,market information,
							fractional and tokenised NFT trading as well as the only fully
							integratedCrypto - NFT bridging marketplace.
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
import { Component, Vue, Getter } from "nuxt-property-decorator";
import { GET_SETTINGS } from "../utils/store/getter.names";
import { NS_SETTINGS } from "../utils/store/namespace.names";
import { namespaced } from "../utils/utils";
@Component({
	name: "Footer",
	components: {},
})
export default class Footer extends Vue {
	@Getter(namespaced(NS_SETTINGS, GET_SETTINGS)) getSettings;

	HOST = this.$config.HOST;
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
		margin-top: 10px;
		width: 50%;
		@media (max-width: 769px) {
			width: 100%;
		}
		input {
			padding: 14px 8px;
			width: 100%;
			border: 1px solid rgba(255, 255, 255, 0.6);
			border-radius: 8px;
			background: none;
			color: rgba(255, 255, 255, 0.7);
		}
		button {
			position: absolute;
			right: 10px;
			top: 10px;
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
		}
		.social-links {
			display: flex;
			justify-content: center;
			align-items: center;
			gap: 15px;
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
			align-items: flex-start;
			gap: 20px;
		}
		.col {
			display: flex;
			flex-direction: column;
			justify-content: center;
			gap: 0px;
			&:first-child {
				flex-basis: 20%;
				gap: 35px;
			}
			.company {
				@media (max-width: 769px) {
					text-align: center;
				}
				img {
					width: 35%;
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
			}
			.link-list {
				li {
					margin: 8px 0px;
					.link {
						display: flex;
						align-items: flex-start;
						justify-content: flex-start;
						gap: 5px;
						font-weight: 400;
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
}
</style>
