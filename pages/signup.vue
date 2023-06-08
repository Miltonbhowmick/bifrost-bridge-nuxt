<template>
    <div class="signup">
        <div class="box">
            <img
                class="signup-banner"
                src="images/bifrost-signup-banner.png"
                alt="bifrost signup banner image"
            />
        </div>
        <div class="box">
            <div class="content">
                <div class="info">
                    <div class="back-box">
                        <a href="#" class="btn">Back</a>
                    </div>
                    <h1 class="welcome">Register your account</h1>
                    <h2 class="continue">
                        Fill the details bellow to submit register account.
                    </h2>

                    <form class="signup-form" method="POST">
                        <div class="group">
                            <div class="input-group">
                                <label class="label">First Name</label
                                ><input
                                    type="text"
                                    placeholder="Your first name"
                                />
                            </div>
                            <div class="input-group">
                                <label class="label">Last Name</label
                                ><input
                                    type="text"
                                    placeholder="Your last name"
                                />
                            </div>
                        </div>
                        <div class="input-group">
                            <label class="label">Email</label
                            ><input type="email" placeholder="Your email" />
                        </div>
                        <div class="input-group">
                            <label class="label">Password</label
                            ><input
                                type="password"
                                placeholder="Your password"
                            />
                        </div>
                        <div class="go-terms-condition">
                            By signing in, you’re agree to our
                            <a href="#">Terms & Condition</a>
                            and <a href="#">Privacy Policy</a>.
                        </div>

                        <button type="submit" class="signup-btn">
                            Continue
                        </button>
                    </form>

                    <div class="go-signup">
                        <span>Already have account?</span
                        ><a href="#">Login</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Component, Vue } from "nuxt-property-decorator";
@Component({
    name: "Signup",
    layout: "custom",
    components: {},
})
export default class Signup extends Vue {}
</script>

<style scoped lang="scss">
.signup {
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .box {
        flex-basis: 50%;
        .signup-banner {
            // Image on the left side of the signup screen
            width: 100%;
            height: 100%;
        }
        .content {
            // Sigin form on the right side of the signup screen
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            .info {
                width: 70%;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                gap: 14px;
                .back-box {
                    position: relative;
                    &::before {
                        content: "";
                        position: absolute;
                        width: 12px;
                        height: 12px;
                        border-left: 3px solid #ffb401;
                        border-bottom: 3px solid #ffb401;
                        top: 45%;
                        transform: rotate(45deg) translate(0%, -50%);
                    }
                    .btn {
                        margin-left: 6px;
                        font-weight: 400;
                        font-size: 18px;
                        color: #8692a6;
                    }
                }
                .welcome {
                    font-weight: 500;
                    font-size: 24px;
                    color: #ffffff;
                }
                .continue {
                    font-weight: 500;
                    font-size: 16px;
                    color: #8692a6;
                }
                .signup-form {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-start;
                    gap: 15px;
                    .group {
                        display: flex;
                        gap: 15px;
                    }
                    .input-group {
                        display: flex;
                        flex-direction: column;
                        justify-content: flex-start;
                        gap: 4px;
                        .label {
                            font-weight: 400;
                            font-size: 14px;
                            color: #ffffff;
                        }
                        input {
                            padding: 10px 12px;
                            background: #ffffff;
                            border: none;
                            border-radius: 4px;
                        }
                    }
                    .go-terms-condition {
                        font-weight: 500;
                        font-size: 12px;
                        color: #8692a6;
                    }
                    .signup-btn {
                        padding: 12px 28px;
                        background: linear-gradient(
                            270deg,
                            #ffb401 0%,
                            #dad31b 100%
                        );
                        border: none;
                        border-radius: 6px;
                        color: #ffffff;
                        font-weight: 500;
                        font-size: 20px;
                    }
                }
                .go-signup {
                    width: 100%;
                    text-align: center;
                    span {
                        font-weight: 500;
                        font-size: 14px;
                        color: #bdbdbd;
                        margin-right: 3px;
                    }
                    a {
                        font-weight: 500;
                        font-size: 14px;
                        color: #ffb401;
                    }
                }
            }
        }
    }
}
</style>
