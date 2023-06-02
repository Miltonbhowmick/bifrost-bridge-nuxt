<template>
    <div class="header" :class="{ 'primary-bg': toggleNavBackground }">
        <div class="container">
            <nav class="navbar">
                <nuxt-link class="navbar-brand" to="/">
                    <img
                        v-if="getSettings.settings.company_logo"
                        :src="
                            HOST +
                            getSettings.settings.company_logo.original.src
                        "
                        :alt="getSettings.settings.company_logo.original.alt"
                    />
                    <img
                        v-else
                        src="images/bifrost_logo.png"
                        alt="bifrost-logo"
                    />
                </nuxt-link>
                <ul class="navbar-nav flex-row gap-5 menu-links">
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
                        <a class="nav-link cursor-pointer text-capitalize"
                            >Sign In</a
                        >
                    </li>
                    <li class="nav-item">
                        <a class="nav-link cursor-pointer text-capitalize"
                            >Sign Up</a
                        >
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<script>
import { Component, Vue, Getter } from "nuxt-property-decorator";
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

    HOST = this.$config.HOST;

    handleNabvar() {
        const hero = document.querySelector(".hero-section");
        const navbar = document.querySelector(".navbar");
        if (hero && navbar) {
            var heroOffset = hero.offsetHeight;
            var scrollTop = document.documentElement.scrollTop;
            if (scrollTop > heroOffset) {
                this.toggleNavBackground = true;
            } else {
                this.toggleNavBackground = false;
            }
        }
    }

    mounted() {
        window.addEventListener("scroll", this.handleNabvar);
    }
}
</script>

<style scoped lang="scss">
.header {
    position: fixed;
    z-index: 99999999;
    width: 100%;
    background: none;
    .navbar {
        .menu-links {
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
            .nav-link {
                color: $navbar-menu-text;
                padding: 6px 20px;
                background: linear-gradient(270deg, #ffb401 0%, #dad31b 100%);
                border-radius: 5px;
            }
        }
    }
}
.primary-bg {
    background: $header-bg-primary;
}
</style>
