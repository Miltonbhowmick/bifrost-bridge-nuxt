<template>
    <div class="container">
        <div class="feedback-box">
            <h2 class="headline">
                Words of Praise: Testimonials from Satisfied NFT Creators,
                Collectors and Traders
            </h2>
            <h3 class="sub-headline">
                We value the trust our customers place in us, and we
                continuously strive to exceed their expectations. Our
                testimonial section serves as a testament to our commitment to
            </h3>
            <div class="client-history">
                <div class="details">
                    <div class="rating">
                        <fa :icon="['fas', 'star']" class="icon" />
                        <fa :icon="['fas', 'star']" class="icon" />
                        <fa :icon="['fas', 'star']" class="icon" />
                        <fa :icon="['fas', 'star']" class="icon" />
                        <fa :icon="['fas', 'star']" class="icon" />
                    </div>
                    <p class="quotes">
                        “Aliqua id fugiat nostrud irure ex duis ea quis id quis
                        ad et. Sunt qui esse pariatur duis deserunt mollit
                        dolore cillum minim tempor enim. Elit aute irure tempor
                        cupidatat incididunt sint deserunt ut voluptate aute id
                        deserunt nisi.”
                    </p>
                    <div class="client">
                        <div class="details">
                            <img
                                src="images/client-profile-image.png"
                                alt="profile-image"
                                width="40"
                                height="40"
                            />
                            <div class="info">
                                <h3 class="name">Cameron Williamson</h3>
                                <h4 class="position">NFT Analyst</h4>
                            </div>
                        </div>
                        <div class="slider-buttons">
                            <button>
                                <fa
                                    :icon="['fas', 'arrow-left']"
                                    class="icon"
                                />
                            </button>
                            <button>
                                <fa
                                    :icon="['fas', 'arrow-right']"
                                    class="icon"
                                />
                            </button>
                        </div>
                    </div>
                </div>
                <div class="images">
                    <img src="images/clients/client1.png" alt="client-image" />
                    <img src="images/clients/client2.png" alt="client-image" />
                    <img src="images/clients/client3.png" alt="client-image" />
                    <img src="images/clients/client4.png" alt="client-image" />
                    <img src="images/clients/client5.png" alt="client-image" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
</script>

<style scoped lang="scss">
.feedback-box {
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
    .client-history {
        margin: 100px 0px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 15px;
        .details {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            gap: 35px;
            .rating {
                .icon {
                    color: $rating-star-color;
                    font-size: $rating-star-size;
                }
            }
            .quotes {
                font-size: $quotes-font-size;
                font-weight: $quotes-font-weight;
                color: $quotes-text;
            }
            .client {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
                .details {
                    display: flex;
                    flex-direction: row;
                    justify-content: flex-start;
                    align-items: center;
                    .info {
                        .name {
                            font-weight: 500;
                            font-size: 20px;
                            color: #fff;
                        }
                        .position {
                            font-weight: 500;
                            font-size: 16px;
                            color: rgba(255, 255, 255, 0.7);
                        }
                    }
                }
                .slider-buttons {
                    button {
                        width: 56px;
                        height: 56px;
                        background: #ffb401;
                        backdrop-filter: blur(4px);
                        border: none;
                        border-radius: 28px;
                        .icon {
                            font-size: 22px;
                            color: rgba(255, 255, 255, 0.7);
                        }
                    }
                }
            }
        }
        .images {
            // background: black;
        }
    }
}
</style>

