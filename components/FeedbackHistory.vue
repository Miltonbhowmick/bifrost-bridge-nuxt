<template>
    <div class="container">
        <div class="feedback-box">
            <h2 class="section-headline">
                Words of Praise: Testimonials from Satisfied NFT Creators,
                Collectors and Traders
            </h2>
            <h3 class="section-sub-headline">
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
                                :src="currentClientQuotes.imageSrc"
																class="profile-image"
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
                <div class="album">
                    <div
                        v-for="(item, index) in imageItems"
                        :key="index"
                        :class="item.className"
                        @click="handleImageChange(index)"
                    >
                        <img
                            :src="item.imageSrc"
                            :alt="item.name"
                            class="client-image cursor-pointer"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Component, Vue } from "nuxt-property-decorator";
@Component({
    name: "FeedbackHistory",
})
export default class FeedbackHistory extends Vue {
    imageItems = [
        {
            name: "clien1",
            imageSrc: "images/clients/client1.png",
            className: "box1",
        },
        {
            name: "clien2",
            imageSrc: "images/clients/client2.png",
            className: "box2",
        },
        {
            name: "clien3",
            imageSrc: "images/clients/client3.png",
            className: "box3",
        },
        {
            name: "clien4",
            imageSrc: "images/clients/client4.png",
            className: "box4",
        },
        {
            name: "clien5",
            imageSrc: "images/clients/client5.png",
            className: "box5",
        },
    ];

    currentClientQuotes = this.imageItems[0];

    handleImageChange(index) {
        var tmp = this.currentClientQuotes.imageSrc;
        this.currentClientQuotes.imageSrc = this.imageItems[index].imageSrc;
        this.imageItems[index].imageSrc = tmp;
    }
}
</script>

<style scoped lang="scss">
.feedback-box {
    margin: 50px 0px;

    .client-history {
        margin: 100px 0px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        gap: 15px;
        .details {
            flex-basis: 45%;
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
										.profile-image{
											border-radius: 50%;
										}
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
                        margin: 0px 5px;
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
        .album {
            flex-basis: 45%;
            display: grid;
            grid-template-rows: repeat(15, 20px);
            grid-template-columns: repeat(15, 20px);
            grid-gap: 10px;
            div > .client-image {
                width: 100%;
                height: 100%;
                object-fit: cover;
                border-radius: 4px;
            }
            .box1 {
                grid-row-start: 5;
                grid-row-end: 9;
                grid-column-start: 3;
                grid-column-end: 8;
            }
            .box2 {
                grid-row-start: 1;
                grid-row-end: 9;
                grid-column-start: 8;
                grid-column-end: 14;
            }
            .box3 {
                grid-row-start: 9;
                grid-row-end: 13;
                grid-column-start: 1;
                grid-column-end: 6;
            }
            .box4 {
                grid-row-start: 9;
                grid-row-end: 16;
                grid-column-start: 6;
                grid-column-end: 11;
            }
            .box5 {
                grid-row-start: 9;
                grid-row-end: 13;
                grid-column-start: 11;
                grid-column-end: 16;
            }
        }
    }
}
</style>

