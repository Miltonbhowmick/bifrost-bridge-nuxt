<template>
    <div class="container">
        <div class="newsletter-box">
            <h2 class="headline">Never Miss a Drop</h2>
            <h3 class="sub-headline">
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
                        <a href="#" target="_blank" rel="nofollow">Facebook</a>
                    </li>
                    <li>
                        <a href="#" target="_blank" rel="nofollow">twitter</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import { Component, Vue } from "nuxt-property-decorator";
@Component({
    name: "Newsletter",
    components: {},
})
export default class Newsletter extends Vue {}
</script>

<style scoped lang="scss">
.newsletter-box {
    margin: 50px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    .headline {
        margin: 0px 300px;
        font-weight: $section-headline-font-weight;
        font-size: $section-headline-font-size;
        line-height: $section-headline-line-height;
        color: $section-headline-text;
        text-align: center;
    }
    .sub-headline {
        margin: 0px 300px;
        font-weight: $section-subheadline-font-weight;
        font-size: $section-subheadline-font-size;
        line-height: $section-subheadline-line-height;
        color: $section-subheadline-text;
        text-align: center;
    }
    form {
        position: relative;
        margin-top: 10px;
        width: 50%;
        input {
            padding: 10px 8px;
            width: 100%;
            border: 1px solid rgba(255, 255, 255, 0.6);
            border-radius: 8px;
            background: none;
            color: rgba(255, 255, 255, 0.7);
        }
        button {
            position: absolute;
            right: 12px;
            top: 6px;
            padding: 5px 10px;
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
            font-size: 24px;
            color: $section-headline-text;
        }
        .social-links {
            display: flex;
            align-items: center;
            gap: 15px;
        }
    }
}
</style>
