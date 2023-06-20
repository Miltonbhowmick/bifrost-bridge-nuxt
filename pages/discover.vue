<template>
    <div class="container">
        <div class="discover below-header-gap">
            <h1 class="headline">
                Bifrost is a term that holds significance in Norse mythology and
                in the realm of technology. Let's explore both aspects
            </h1>
            <div class="banner">
                <img src="images/discover-banner.png" alt="discover-banner" />
            </div>
            <div class="description">
                <p>
                    NFT minting refers to the process of creating and issuing
                    non-fungible tokens (NFTs) on a blockchain network. NFTs are
                    unique digital assets that represent ownership or proof of
                    authenticity for a specific item or piece of content, such
                    as artwork, collectibles, music, videos, or virtual real
                    estate.
                </p>
                <p>
                    The minting process typically involves the following steps:
                </p>
            </div>
            <ol type="1" class="detail-box">
                <li>
                    <h2 class="detail">
                        Selecting a Blockchain: NFTs are predominantly minted on
                        blockchain networks that support smart contracts, such
                        as Ethereum, Binance Smart Chain, or Flow. Each
                        blockchain has its own set of features, costs, and
                        community.
                    </h2>
                </li>
                <li>
                    <h3 class="detail">
                        Creating the Content: Before minting an NFT, you need to
                        create or have the digital content you want to tokenize.
                        It could be an artwork file, a music track, a video, or
                        any other digital asset that you want to represent as an
                        NFT.
                    </h3>
                </li>
                <li>
                    <h4 class="detail">
                        Choosing a Platform or Marketplace: There are several
                        platforms and marketplaces available for minting and
                        trading NFTs. Some popular platforms include OpenSea,
                        Rarible, SuperRare, and NBA Top Shot. You need to select
                        a platform that is compatible with the blockchain you've
                        chosen.
                    </h4>
                </li>
                <li>
                    <h5 class="detail">
                        Setting Metadata and Properties: NFTs typically have
                        associated metadata that provides information about the
                        asset, such as its title, description, image or video
                        link, and other relevant details. You'll need to input
                        this metadata along with any desired properties or
                        attributes of
                    </h5>
                </li>
            </ol>
            <div class="slider-box">
                <client-only>
                    <carousel-3d
                        :display="3"
                        :disable3d="true"
                        :space="365"
                        :clickable="false"
                        :controls-visible="true"
                    >
                        <slide v-for="(item, i) in items" :index="i" :key="i">
                            <div class="item">
                                <div
                                    class="details"
                                    :style="{
                                        backgroundImage: `url('${item.backgroundImage}')`,
                                    }"
                                >
                                    <img
                                        :src="item.icon"
                                        alt="feature-bg"
                                        class="feature-icon"
                                    />
                                    <h6 class="name">{{ item.name }}</h6>
                                    <p class="information">
                                        {{ item.description }}
                                        <a
                                            v-if="item.readMore"
                                            href="#"
                                            class="read-more-link"
                                            >read more</a
                                        >
                                    </p>
                                </div>
                            </div>
                        </slide>
                    </carousel-3d>
                </client-only>
            </div>
        </div>
    </div>
</template>
<script>
import { Component, Vue } from "nuxt-property-decorator";
import img1 from "~/assets/images/features/1.png";
import img2 from "~/assets/images/features/2.png";
import img3 from "~/assets/images/features/3.png";
import img4 from "~/assets/images/features/4.png";
import img5 from "~/assets/images/features/5.png";
import img6 from "~/assets/images/features/6.png";

@Component({
    name: "Discover",
    components: {},
})
export default class Discover extends Vue {
    img1 = img1;
    img2 = img2;
    img3 = img3;
    img4 = img4;
    img5 = img5;
    img6 = img6;

    items = [
        {
            backgroundImage: img1,
            icon: "images/icons/menu.png",
            name: "NFT Minting",
            description:
                "This feature allows users to create their own unique NFTs",
            readMore: true,
        },
        {
            backgroundImage: img2,
            icon: "images/icons/cake.png",
            name: "Fractionalization",
            description:
                "This feature allows users to divide their NFTs into smaller",
            readMore: true,
        },
        {
            backgroundImage: img3,
            icon: "images/icons/spin.png",
            name: "Exchange",
            description: "Our platform offers a decentralized exchange where",
            readMore: true,
        },
        {
            backgroundImage: img4,
            icon: "images/icons/processor.png",
            name: "Marketing",
            description:
                "We offer a comprehensive marketing solution tools and",
            readMore: true,
        },
        {
            backgroundImage: img5,
            icon: "images/icons/library.png",
            name: "NFT Create",
            description:
                "This feature allows users to create their own unique NFTs easily and",
            readMore: true,
        },
        {
            backgroundImage: img6,
            icon: "images/icons/guard.png",
            name: "NFT Analysis",
            description:
                "This feature allows users to divide their NFTs into smaller fractions",
            readMore: true,
        },
    ];
}
</script>
<style scoped lang="scss">
.discover {
    .headline {
        margin: 60px 0px;
        font-weight: 600;
        font-size: 30px;
        line-height: 44px;
    }
    .banner {
        img {
            width: 100%;
        }
    }
    .description {
        margin-top: 40px;
        p {
            margin: 0;
            font-weight: 400;
            font-size: 20px;
            line-height: 44px;
        }
    }
    .detail-box {
        margin-top: 100px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 30px;
        li {
            .detail {
                font-weight: 400;
                font-size: 20px;
                line-height: 44px;
            }
            &::marker {
                font-size: 20px;
            }
        }
    }

    .slider-box {
        margin: 100px 0px;
        .item {
            flex-basis: 31.5%;
            .details {
                padding: 40px 30px;
                height: 220px;
                background-size: cover;
                background-position: center center;
                background-repeat: no-repeat;
                border-radius: 24px;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: center;
                gap: 10px;
                .feature-icon {
                    width: 12%;
                    margin-bottom: 15px;
                }
                .name {
                    margin: 0;
                    font-weight: 600;
                    font-size: 18px;
                    color: #ffffff;
                }
                .information {
                    padding: 0;
                    font-weight: 400;
                    font-size: 14px;
                    color: rgba(255, 255, 255, 0.8);
                }
            }
        }
    }
}

.carousel-3d-container {
    height: 222px !important;
    .carousel-3d-slide {
        background: none;
        height: 222px !important;
    }
}

::v-deep .carousel-3d-controls {
    a {
        color: #ffb401 !important;
    }
}
</style>
