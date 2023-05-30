<template>
    <div
        class="header"
        :class="{
            'primary-bg': toggleNavBackground,
        }"
    >
        <nav class="navbar container">
            <NuxtLink class="navbar-brand" to="/"
                ><img src="images/bifrost_logo.png" alt="bifrost-logo"
            /></NuxtLink>
            <ul class="navbar-nav flex-row gap-5 menu-links">
                <li class="nav-item">
                    <a class="nav-link cursor-pointer text-capitalize">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link cursor-pointer text-capitalize">About</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link cursor-pointer text-capitalize"
                        >Discover</a
                    >
                </li>
                <li class="nav-item">
                    <a class="nav-link cursor-pointer text-capitalize">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link cursor-pointer text-capitalize"
                        >Collections</a
                    >
                </li>
            </ul>
            <ul class="navbar-nav flex-row gap-4 auth-links">
                <li class="nav-item">
                    <a class="nav-link cursor-pointer text-capitalize"
                        >sign in</a
                    >
                </li>
                <li class="nav-item">
                    <a class="nav-link cursor-pointer text-capitalize"
                        >sign up</a
                    >
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
import { Component, Vue } from "nuxt-property-decorator";
@Component({
    name: "Header",
    components: {},
})
export default class Header extends Vue {
    toggleNavBackground = false;

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
    background: $bg-primary;
}
</style>
