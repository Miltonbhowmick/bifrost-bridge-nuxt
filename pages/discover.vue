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
						<div class="slider">

						</div>
        </div>
    </div>
</template>
<script>
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
						&::marker{
							font-size: 20px;
						}
        }
    }
}
</style>
