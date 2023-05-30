<template>
    <div class="container footer-container">
        <footer class="footer">
            <div class="box">
                <div class="col">
                    <a
                        ><img src="images/bifrost-logo.png" alt="bifrost-logo"
                    /></a>
                    <p class="description">
                        Vemate is the most versatile and dynamic application on
                        the market which supplies trading analysis tools,market
                        information, fractional and tokenised NFT trading as
                        well as the only fully integratedCrypto - NFT bridging
                        marketplace.
                    </p>
                </div>
                <div class="col">
                    <h2 class="headline">Economy</h2>
                    <a class="link">Tokens</a>
                    <a class="link">Exchange</a>
                    <a class="link">Staking</a>
                    <a class="link">Earn</a>
                    <a class="link">Marketplace</a>
                </div>
                <div class="col">
                    <h2 class="headline">About Us</h2>
                    <a class="link">Blog</a>
                    <a class="link">Help</a>
                    <a class="link">Team</a>
                    <a class="link">Privacy</a>
                    <a class="link">Policy</a>
                </div>
                <div class="col">
                    <h2 class="headline">Vemate Ltd</h2>
                    <a class="link">Company Number: 13989933</a>
                    <a class="link">(406) 555-0120</a>
                    <a class="link">mangcoding123@gmail.com</a>
                    <a class="link"
                        >4th Floor, Silverstream House 45 Fitzroy Street,
                        Fitzrovia London, W1T 6EB
                    </a>
                </div>
            </div>
        </footer>
        <p class="copyright">BIFROST all Rights Reserved © Copyright 2023.</p>
    </div>
</template>

<script>
import { Component, Vue } from "nuxt-property-decorator";
@Component({
    name: "Footer",
    components: {},
})
export default class Footer extends Vue {}
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
        // align-content: center;
        gap: 100px;
        .col {
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 10px;
            &:first-child {
                flex-basis: 30%;
            }
            .description {
                font-weight: 400;
                font-size: 14px;
                color: rgba(206, 204, 214, 0.7);
            }
            .headline {
                font-weight: 500;
                font-size: 16px;
                color: #ffffff;
            }
            .link {
                font-weight: 400;
                font-size: 14px;
                color: #ceccd6;
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
