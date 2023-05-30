<template>
    <div class="container">
        <div class="collection-box">
            <h2 class="section-headline">
                Top NFT Collections: Exploring the Most Coveted Digital Art and
                Assets
            </h2>
            <h3 class="section-sub-headline">
                It's important to conduct thorough research and exercise caution
                when making investment decisions in the crypto market.
                <a href="#" class="read-more-link">Read More</a>
            </h3>
            <div class="title-box">
                <h1>Top Collections Over Last 7 days</h1>
                <a href="#" class="read-more-link">View All</a>
            </div>
            <ul class="collection-list">
                <li class="item">
                    <h5 class="serial">1</h5>
                    <img
                        src="images/nft.png"
                        alt="collection-image"
                        class="nft-image"
                    />
                    <div class="info">
                        <h6 class="name">Jane Cooper</h6>
                        <h6 class="price">$275.43</h6>
                    </div>
                </li>
                <li class="item">
                    <h5 class="serial">2</h5>
                    <img
                        src="images/nft.png"
                        alt="collection-image"
                        class="nft-image"
                    />
                    <div class="info">
                        <h6 class="name">Jane Cooper</h6>
                        <h6 class="price">$275.43</h6>
                    </div>
                </li>
                <li class="item">
                    <h5 class="serial">3</h5>
                    <img
                        src="images/nft.png"
                        alt="collection-image"
                        class="nft-image"
                    />
                    <div class="info">
                        <h6 class="name">Jane Cooper</h6>
                        <h6 class="price">$275.43</h6>
                    </div>
                </li>
                <li class="item">
                    <h5 class="serial">4</h5>
                    <img
                        src="images/nft.png"
                        alt="collection-image"
                        class="nft-image"
                    />
                    <div class="info">
                        <h6 class="name">Jane Cooper</h6>
                        <h6 class="price">$275.43</h6>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
</script>

<style scoped lang="scss">
.collection-box {
    margin: 50px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    .title-box {
        margin: 70px 0px 50px 0px;
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        h1 {
            font-weight: 600;
            font-size: 28px;
            color: #ffffff;
        }
        a {
            font-weight: 400;
            font-size: 18px;
        }
    }
    .collection-list {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        flex-wrap: wrap;
        gap: 15px 6px;
        .item {
            width: 33%;
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            align-items: center;
            gap: 12px;
            .serial {
                margin: 0;
                font-weight: 600;
                font-size: 24px;
                color: #ffffff;
            }
            .nft-image {
                border-radius: 8px;
            }
            .info {
                display: flex;
                flex-direction: column;
                justify-content: center;
                gap: 5px;
                .name {
                    margin: 0;
                    font-weight: 500;
                    font-size: 20px;
                    color: #ffffff;
                }
                .price {
                    margin: 0;
                    font-weight: 500;
                    font-size: 16px;
                    color: rgba(255, 255, 255, 0.8);
                }
            }
        }
    }
}
</style>
