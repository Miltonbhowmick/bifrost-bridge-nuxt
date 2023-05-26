<template>
    <div class="container">
        <nav class="navbar">
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
            <ul class="navbar-nav flex-row gap-5 auth-links">
                <li class="nav-item">
                    <a class="nav-link cursor-pointer text-capitalize">sign in</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link cursor-pointer text-capitalize">sign up</a>
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
export default class Header extends Vue {}
</script>

<style scoped lang="scss">
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
</style>
