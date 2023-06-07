<template>
    <div class="signin">
        <div class="box">
            <img
                class="signin-banner"
                src="images/bifrost-signin-banner.png"
                alt="bifrost signin banner image"
            />
        </div>
        <div class="box">
            <div class="content">
                <div class="info">
                    <h1 class="welcome">Welcome</h1>
                    <img
                        class="company-logo"
                        src="images/bifrost_logo.png"
                        alt="bifrost-logo"
                    />
                    <h2 class="continue">Login to continue</h2>

                    <form class="signin-form" method="POST">
                        <div class="input-group">
                            <label class="label">Email</label
                            ><input type="email" placeholder="Your Email" />
                        </div>
                        <div class="input-group">
                            <label class="label">Password</label
                            ><input
                                type="password"
                                placeholder="Your Password"
                            />
                        </div>
                        <div class="forget-remember">
                            <div class="group check-group">
                                <input id="forgetInput" type="checkbox" />
                                <label class="label" for="forgetInput"
                                    >Remember Me</label
                                >
                            </div>
                            <div class="group">
                                <a href="#" class="forget-password-link"
                                    >Forgot Password?</a
                                >
                            </div>
                        </div>
                        <button type="submit" class="login-btn">Login</button>
                    </form>
                    <div class="social-continue-border">
                        <div class="border"></div>
                        <div class="text">or continue with</div>
                        <div class="border"></div>
                    </div>
                    <div class="social-links">
                        <ul>
                            <li>
                                <a href="#"
                                    ><img
                                        src="images/facebook-signin.png"
                                        alt="facebook-signin"
                                /></a>
                            </li>
                            <li>
                                <a href="#"
                                    ><img
                                        src="images/google-signin.png"
                                        alt="google-signin"
                                        width="10"
                                /></a>
                            </li>
                        </ul>
                    </div>
                    <div class="go-signup">
                        <span>Don,t have an account?</span
                        ><a href="#">sign up</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Component, Vue } from "nuxt-property-decorator";
@Component({
    name: "Signin",
    layout: "custom",
    components: {},
})
export default class Signin extends Vue {}
</script>

<style scoped lang="scss">
.signin {
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .box {
        flex-basis: 50%;
        .signin-banner {
            // Image on the left side of the signin screen
            width: 100%;
            height: 100%;
        }
        .content {
            // Sigin form on the right side of the signin screen
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
                .welcome {
                    font-weight: 600;
                    font-size: 28px;
                    color: #ffffff;
                }
                .continue {
                    font-weight: 500;
                    font-size: 24px;
                    color: #ffffff;
                }
                .signin-form {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-start;
                    gap: 15px;
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
                            padding: 6px 12px;
                            background: #ffffff;
                            border-radius: 4px;
                        }
                    }
                    .forget-remember {
                        display: flex;
                        flex-direction: row;
                        justify-content: space-between;
                        align-items: center;
                        .group {
                            flex-basis: 50%;
                            a {
                                float: right;
                                color: #fc5760;
                            }
                        }
                        .check-group {
                            display: flex;
                            flex-direction: row;
                            justify-content: flex-start;
                            align-items: center;
                            gap: 6px;
                            .label {
                                font-weight: 500;
                                font-size: 12px;
                                color: #ffffff;
                            }
                        }
                    }
                    .login-btn {
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
                .social-continue-border {
                    width: 100%;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    align-items: center;
                    .border {
                        width: 32%;
                    }
                    .text {
                        color: #ffffff;
                    }
                }
                .social-links {
                    width: 100%;
                    ul {
                        display: flex;
                        justify-content: center;
                        gap: 12px;
                        list-style: none;
                        li {
                            a {
                            }
                        }
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
