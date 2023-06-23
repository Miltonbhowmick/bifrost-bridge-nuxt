<template>
	<div class="header" :class="{ 'none-bg': toggleNavBackground }">
		<div class="container">
			<nav class="navbar">
				<nuxt-link class="navbar-brand" to="/">
					<img
						v-if="getSettings.settings.company_logo"
						:src="HOST + getSettings.settings.company_logo.original.src"
						:alt="getSettings.settings.company_logo.original.alt"
					/>
					<img v-else src="images/bifrost_logo.png" alt="bifrost-logo" />
				</nuxt-link>
				<ul class="navbar-nav gap-5 menu-links">
					<li
						class="nav-item"
						v-for="(item, idx) in getSettings.mainmenu"
						:key="'menuitem_' + idx"
					>
						<a
							v-if="item.is_external == true"
							:href="item.link_url"
							target="_blank"
							class="nav-link cursor-pointer text-capitalize"
							>{{ item.link_title }}</a
						>
						<nuxt-link
							v-else
							:to="item.link_url"
							class="nav-link cursor-pointer text-capitalize"
						>
							{{ item.link_title }}
						</nuxt-link>
					</li>
				</ul>
				<ul class="navbar-nav flex-row gap-4 auth-links">
					<li class="nav-item">
						<nuxt-link
							to="/signup"
							class="nav-link cursor-pointer text-capitalize"
							>Sign Up</nuxt-link
						>
					</li>
					<li class="nav-item">
						<nuxt-link
							to="/signin"
							class="nav-link cursor-pointer text-capitalize"
							>Sign In</nuxt-link
						>
					</li>
				</ul>
			</nav>
			<nav class="mobile-navbar">
				<nuxt-link class="navbar-brand" to="/">
					<img
						v-if="getSettings.settings.company_logo"
						:src="HOST + getSettings.settings.company_logo.original.src"
						:alt="getSettings.settings.company_logo.original.alt"
					/>
					<img v-else src="images/bifrost_logo.png" alt="bifrost-logo" />
				</nuxt-link>
				<div @click="openMobileMenu" class="hamburger">
					<fa
						v-if="handleMobileMenu === false"
						:icon="['fas', 'bars']"
						class="icon"
					/>
					<fa v-else :icon="['fas', 'xmark']" class="icon" />
				</div>
				<div class="menus" v-if="handleMobileMenu === true">
					<ul class="navbar-nav menu-links">
						<li
							class="nav-item"
							v-for="(item, idx) in getSettings.mainmenu"
							:key="'menuitem_' + idx"
						>
							<a
								v-if="item.is_external == true"
								:href="item.link_url"
								@click="openMobileMenu"
								target="_blank"
								class="nav-link cursor-pointer text-capitalize"
								>{{ item.link_title }}</a
							>
							<nuxt-link
								v-else
								:to="item.link_url"
								@click="openMobileMenu"
								class="nav-link cursor-pointer text-capitalize"
							>
								{{ item.link_title }}
							</nuxt-link>
						</li>
					</ul>
					<ul class="navbar-nav auth-links">
						<li class="nav-item">
							<nuxt-link
								to="/signup"
								class="nav-link cursor-pointer text-capitalize"
								>Sign Up</nuxt-link
							>
						</li>
						<li class="nav-item">
							<nuxt-link
								to="/signin"
								class="nav-link cursor-pointer text-capitalize"
								>Sign In</nuxt-link
							>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	</div>
</template>

<script>
import { Component, Vue, Getter, Watch } from "nuxt-property-decorator";
import { GET_SETTINGS } from "../utils/store/getter.names";
import { NS_SETTINGS } from "../utils/store/namespace.names";
import { namespaced } from "../utils/utils";

@Component({
	name: "Header",
	components: {},
})
export default class Header extends Vue {
	@Getter(namespaced(NS_SETTINGS, GET_SETTINGS)) getSettings;

	toggleNavBackground = false;
	isHomePage = false;
	handleMobileMenu = false;

	HOST = this.$config.HOST;

	handleNabvar() {
		const hero = document.querySelector(".hero-section");
		const navbar = document.querySelector(".navbar");
		// Below condition works only when we are in home page
		// `isHomePage` tracks in which page we are now. This tracking is done in `onRouteChange` function
		if (hero && navbar && this.isHomePage === true) {
			var heroOffset = hero.offsetHeight;
			var scrollTop = document.documentElement.scrollTop;
			if (scrollTop > heroOffset) {
				this.toggleNavBackground = false;
			} else {
				this.toggleNavBackground = true;
			}
		}
	}

	// Handle header background color change by watching the route path.
	// If we are in "/" (root path/directory like home page), we have null background color of header section.
	// If we are in Non-home page, we have a background color of header section.
	@Watch("$route")
	onRouteChange(oldVal, newVal) {
		this.handleMobileMenu = false;
		if (oldVal.path === "/") {
			this.isHomePage = true;
			this.toggleNavBackground = true;
		} else {
			this.isHomePage = false;
			this.toggleNavBackground = false;
		}
	}

	openMobileMenu() {
		this.handleMobileMenu = !this.handleMobileMenu;
	}

	mounted() {
		if (this.$route.path === "/") {
			this.isHomePage = true;
			this.toggleNavBackground = true;
		}
		window.addEventListener("scroll", this.handleNabvar);
	}
}
</script>

<style scoped lang="scss">
.header {
	position: fixed;
	top: 0;
	z-index: 99999999;
	width: 100%;
	background: $header-bg-primary;
	.navbar {
		@media (max-width: 769px) {
			display: none;
		}
		.menu-links {
			display: flex;
			flex-direction: row;
			gap: 5px;
			.nav-link {
				color: $navbar-menu-text;
				font-weight: 500;
				font-size: 18px;
				&:hover {
					color: $navbar-menu-hover-text;
				}
			}
		}
		.auth-links {
			display: flex;
			flex-direction: row;
			gap: 5px;
			.nav-item {
				.nav-link {
					color: $navbar-menu-text;
					padding: 6px 20px;
					background: linear-gradient(270deg, #ffb401 0%, #dad31b 100%);
					border-radius: 5px;
				}
			}
		}
	}
	.mobile-navbar {
		display: none;
		@media (max-width: 768px) {
			padding: 15px;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			.hamburger {
				font-size: 24px;
			}
			.menus {
				position: absolute;
				top: 62px;
				left: 0;
				right: 0;
				width: 100%;
				background: rgba(2, 41, 51, 0.8);
				backdrop-filter: blur(2px);
				display: flex;
				flex-direction: column;
				align-items: center;
				gap: 30px;
				padding: 30px 20px;
				ul {
					li {
						text-align: center;
					}
				}
				.menu-links {
					width: 30%;
					display: flex;
					flex-direction: column;
					gap: 5px;
					.nav-link {
						color: $navbar-menu-text;
						font-weight: 400;
						font-size: 25px;
						&:hover {
							color: $navbar-menu-hover-text;
						}
					}
				}
				.auth-links {
					width: 80%;
					display: flex;
					flex-direction: row;
					justify-content: center;
					gap: 30px;
					.nav-item {
						.nav-link {
							color: $navbar-menu-text;
							padding: 8px 20px;
							background: linear-gradient(270deg, #ffb401 0%, #dad31b 100%);
							border-radius: 5px;
							font-weight: 500;
							font-size: 22px;
						}
					}
				}
			}
		}
	}
}
.none-bg {
	background: none;
}
</style>
