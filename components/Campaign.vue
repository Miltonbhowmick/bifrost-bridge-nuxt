<template>
    <div class="container">
        <div
            class="campaign"
            :style="{
                backgroundImage: `url(${backgroundUrl})`,
            }"
        >
            <div class="info-box">
                <h4 class="headline text-uppercase">are you ready?</h4>
                <h3 class="sub-headline text-uppercase">
                    Be a part of the next Big thing!
                </h3>
            </div>
            <div class="ellipse-shape">
                <div class="get-started-box">
                    <a class="cursor-pointer">Get Started</a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { Component, Vue } from "nuxt-property-decorator";
import backgroundImage from "../assets/images/campaign-banner.png";
@Component({
    name: "Campaign",
    components: {},
})
export default class Campaign extends Vue {
    backgroundUrl = backgroundImage;
}
</script>

<style scoped lang="scss">
.campaign {
    position: relative;
    .info-box {
        margin: 50px 0px;
        padding: 80px 150px 195px 150px;
        // background: linear-gradient(90.36deg, #ffb401 -4.05%, #fff72a 115.55%);
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 15px;
        .headline {
            font-weight: 600;
            font-size: 30px;
            color: #1f6273;
        }
        .sub-headline {
            font-weight: 600;
            font-size: 36px;
            color: #1f6273;
        }
    }
    .ellipse-shape {
        position: absolute;
        top: 62%;
        left: 50%;
        transform: translate(-50%, 0);
        width: 485px;
        height: 415px;
        background-color: none;
        border: 1px solid #ffffff;
        border-radius: 50%;
        clip-path: inset(0 0 65% 0);
        display: flex;
        flex-direction: row;
        justify-content: center;
        .get-started-box {
            margin-top: 75px;
            a {
                padding: 15px 35px;
                color: #ffffff;
                background: #240505;
                border-radius: 20px;
                font-weight: 500;
                font-size: 20px;
            }
        }
    }
}
</style>
