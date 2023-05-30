<template>
    <div class="container">
        <div class="market-box">
            <h2 class="section-headline">
                Discover Today's Cryptocurrency Prices Soaring to New Heights by
                Market Cap!
            </h2>
            <h3 class="section-sub-headline">
                It's important to conduct thorough research and exercise caution
                when making investment decisions in the crypto market.
                <a href="#" class="read-more-link">Read More</a>
            </h3>
            <div class="data">
                <table class="table">
                    <thead>
                        <tr>
                            <th class="serial">#</th>
                            <th class="name">name</th>
                            <th class="floor-price">floor price</th>
                            <th class="one-hour-percentage">1h%</th>
                            <th class="twenty-four-hour-percentage">24h%</th>
                            <th class="seven-day-percentage">7d%</th>
                            <th class="volume">volume(24h)</th>
                            <th class="last-seven-day">last 7 days</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="serial">#1</td>
                            <td class="name">
                                <div class="content">
                                    <img
                                        src="images/currency/bitcoin.png"
                                        alt=""
                                    />
                                    <h6>Bitcoin</h6>
                                    <span class="short">btc</span>
                                </div>
                            </td>
                            <td class="floor-price">$948.55</td>
                            <td class="one-hour-percentage">
                                <span class="increase">0.09%</span>
                            </td>
                            <td class="twenty-four-hour-percentage">
                                <span class="decrease">0.09%</span>
                            </td>
                            <td class="seven-day-percentage">
                                <span class="increase">0.09%</span>
                            </td>
                            <td class="volume">$34,235,345,876.00</td>
                            <td class="last-seven-day">graph</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
</script>

<style scoped lang="scss">
.market-box {
    margin: 70px 0px;
    .data {
        margin: 50px 0px;
        .table {
            border-collapse: collapse;
            border-radius: 25px;
            overflow: hidden;
            th,
            td {
                border: none;
                padding: 30px 25px;
            }
            th {
                background: rgba(255, 255, 255, 0.05);
            }
            tr {
                &:nth-child(odd) {
                    background: rgba(59, 24, 119, 0.1);
                }
                &:nth-child(even) {
                    background: rgba(255, 255, 255, 0.05);
                }
            }

            thead {
                tr {
                    th {
                        font-weight: 600;
                        font-size: 14px;
                        color: #ffffff;
                        text-transform: capitalize;
                    }
                }
            }
            tbody {
                tr {
                    .serial {
                        font-weight: 500;
                        font-size: 14px;
                        color: #ffffff;
                    }
                    .name {
                        .content {
                            display: flex;
                            flex-direction: row;
                            align-items: center;
                            gap: 10px;
                            img {
                            }
                            h6 {
                                margin: 0;
                                font-weight: 500;
                                font-size: 14px;
                                color: #ffffff;
                            }
                            span {
                                font-weight: 400;
                                font-size: 10px;
                                color: #e8e8e8;
                                text-transform: uppercase;
                            }
                        }
                    }
                    .floor-price {
                        font-weight: 400;
                        font-size: 14px;
                        color: #ffffff;
                    }
                    .one-hour-percentage,
                    .twenty-four-hour-percentage,
                    .seven-day-percentage {
                        font-weight: 400;
                        font-size: 14px;
                    }
                    .increase {
                        position: relative;
                        color: #16c784;
                        &::before {
                            content: "";
                            position: absolute;
                            left: 0;
                            top: 75%;
                            transform: translate(0, -50%);
                            margin-left: -20px;
                            width: 15px;
                            height: 15px;
                            border-top: 12px solid #16c784;
                            border-right: 8px solid transparent;
                            border-bottom: 8px solid transparent;
                            border-left: 8px solid transparent;
                        }
                    }
                    .decrease {
                        position: relative;
                        color: #ea3943;
                        &::before {
                            content: "";
                            position: absolute;
                            left: 0;
                            top: 25%;
                            transform: translate(0, -50%);
                            margin-left: -20px;
                            width: 15px;
                            height: 15px;
                            border-top: 8px solid transparent;
                            border-right: 8px solid transparent;
                            border-bottom: 12px solid #ea3943;
                            border-left: 8px solid transparent;
                        }
                    }
                    .volume {
                        font-weight: 400;
                        font-size: 14px;
                        color: #ffffff;
                    }
                }
            }
        }
    }
}
</style>
