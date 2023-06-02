<template>
    <div class="container footer-container">
        <footer class="footer">
            <div class="box">
                <div class="col">
                    <nuxt-link to="/" class="company"
                        ><img
                            v-if="getSettings.settings.company_logo"
                            :src="
                                HOST +
                                getSettings.settings.company_logo.original.src
                            "
                            :alt="
                                getSettings.settings.company_logo.original.alt
                            "
                        />
                        <img
                            v-else
                            src="images/bifrost_logo.png"
                            alt="bifrost-logo"
                        />
                    </nuxt-link>
                    <p
                        v-if="getSettings.settings.footer_description"
                        class="description"
                    >
                        {{ getSettings.settings.footer_description }}
                    </p>
                    <p v-else class="description">
                        Bifrost is the most versatile and dynamic application on
                        the market which supplies trading analysis tools,market
                        information, fractional and tokenised NFT trading as
                        well as the only fully integratedCrypto - NFT bridging
                        marketplace.
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
                            <nuxt-link
                                v-else
                                :to="submenu.link_url"
                                class="link"
                                >{{ submenu.link_title }}</nuxt-link
                            >
                        </li>
                    </ul>
                </div>
                <div class="col">
                    <h2 class="headline">Bifrost</h2>
                    <ul class="link-list">
                        <li>
                            <a class="link"
                                >Company Number:
                                {{ getSettings.settings.company_number }}</a
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
                                ><fa
                                    :icon="['fas', 'location-dot']"
                                    class="icon"
                                />{{ getSettings.settings.address }}
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
                img {
                    width: 35%;
                }
            }
            .description {
                font-weight: 400;
                font-size: 14px;
                color: rgba(206, 204, 214, 0.7);
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
