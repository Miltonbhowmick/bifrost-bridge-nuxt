<template>
    <div class="container">
        <div
            class="campaign-box"
            :style="{ backgroundImage: `url('~/assets/images/campaign-banner.png')` }"
        >
            <h4 class="headline text-uppercase">are you ready?</h4>
            <h3 class="sub-headline text-uppercase">
                Be a part of the next Big thing!
            </h3>
            <a class="cursor-pointer">Get Started</a>
        </div>
    </div>
</template>
<script>
import {Component, Vue} from "nuxt-property-decorator";
@Component({
	name: "Campaign",
	components:{

	}
})
export default class Campaign extends Vue{
	// backgroundUrl= require('~/assets/images/campaign-banner.png'),
}

</script>

<style scoped lang="scss">
.campaign-box {
    position: relative;
    margin: 50px 0px;
    padding: 50px 150px 30px 150px;
    background: linear-gradient(90.36deg, #ffb401 -4.05%, #fff72a 115.55%);
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
    a {
        margin-top: 80px;
        padding: 8px 28px;
        color: #ffffff;
        background: #240505;
        border-radius: 20px;
    }
}
</style>
