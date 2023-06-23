<template>
	<div class="container">
		<div class="market-box">
			<h2 class="section-headline">
				Discover Today's Cryptocurrency Prices Soaring to New Heights by Market
				Cap!
			</h2>
			<h3 class="section-sub-headline">
				It's important to conduct thorough research and exercise caution when
				making investment decisions in the crypto market
				<a href="#" class="read-more-link text-lowercase">Read More</a>
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
						<tr v-for="(data, index) in tableData" :key="index">
							<td class="serial">
								<div class="content">#{{ index + 1 }}</div>
							</td>
							<td class="name">
								<div class="content">
									<div class="coin-image">
										<img :src="data.coin_icon" :alt="data.name + '-icon'" />
									</div>
									<h6>{{ data.name }}</h6>
									<span class="short text-lowercase">{{ data.name }}</span>
								</div>
							</td>
							<td class="floor-price">
								<div class="content">${{ data.floor_price }}</div>
							</td>
							<td class="one-hour-percentage">
								<div class="content">
									<span class="increase">{{ data.hour_1 }}%</span>
								</div>
							</td>
							<td class="twenty-four-hour-percentage">
								<div class="content">
									<span class="decrease">{{ data.hour_24 }}%</span>
								</div>
							</td>
							<td class="seven-day-percentage">
								<div class="content">
									<span class="increase">{{ data.days_7 }}%</span>
								</div>
							</td>
							<td class="volume">
								<div class="content">${{ data.volume }}</div>
							</td>
							<td class="last-seven-day">
								<div class="content">graph</div>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>
</template>

<script>
import { Component, Vue } from "nuxt-property-decorator";

@Component({
	name: "MarketData",
	components: {},
})
export default class MarketData extends Vue {
	tableData = [
		{
			name: "Bitcoin",
			coin_icon: "images/currency/bitcoin.png",
			floor_price: "948.55",
			hour_1_status: "increment",
			hour_1: "0.09",
			hour_24_status: "increment",
			hour_24: "0.09",
			days_7_status: "increment",
			days_7: "0.09",
			volume: "34,235,345,876.00",
		},
		{
			name: "USD Coin",
			coin_icon: "images/currency/usd_coin.png",
			floor_price: "328.85",
			hour_1_status: "decrement",
			hour_1: "0.09",
			hour_24_status: "decrement",
			hour_24: "0.09",
			days_7_status: "decrement",
			days_7: "0.09",
			volume: "34,235,345,876.00",
		},
		{
			name: "BNB",
			coin_icon: "images/currency/bnb.png",
			floor_price: "948.55",
			hour_1_status: "increment",
			hour_1: "0.09",
			hour_24_status: "increment",
			hour_24: "0.09",
			days_7_status: "increment",
			days_7: "0.09",
			volume: "34,235,345,876.00",
		},
		{
			name: "Dogecoin",
			coin_icon: "images/currency/dogecoin.png",
			floor_price: "328.85",
			hour_1_status: "decrement",
			hour_1: "0.09",
			hour_24_status: "decrement",
			hour_24: "0.09",
			days_7_status: "decrement",
			days_7: "0.09",
			volume: "34,235,345,876.00",
		},
		{
			name: "Polygon",
			coin_icon: "images/currency/polygon.png",
			floor_price: "948.55",
			hour_1_status: "increment",
			hour_1: "0.09",
			hour_24_status: "increment",
			hour_24: "0.09",
			days_7_status: "increment",
			days_7: "0.09",
			volume: "34,235,345,876.00",
		},
		{
			name: "Polkadot",
			coin_icon: "images/currency/polkadot.png",
			floor_price: "328.85",
			hour_1_status: "decrement",
			hour_1: "0.09",
			hour_24_status: "decrement",
			hour_24: "0.09",
			days_7_status: "decrement",
			days_7: "0.09",
			volume: "34,235,345,876.00",
		},
		{
			name: "Avalanche",
			coin_icon: "images/currency/avalanche.png",
			floor_price: "948.55",
			hour_1_status: "increment",
			hour_1: "0.09",
			hour_24_status: "increment",
			hour_24: "0.09",
			days_7_status: "increment",
			days_7: "0.09",
			volume: "34,235,345,876.00",
		},
		{
			name: "Uniswap",
			coin_icon: "images/currency/uniswap.png",
			floor_price: "328.85",
			hour_1_status: "decrement",
			hour_1: "0.09",
			hour_24_status: "decrement",
			hour_24: "0.09",
			days_7_status: "decrement",
			days_7: "0.09",
			volume: "34,235,345,876.00",
		},
		{
			name: "Ethereum_classic",
			coin_icon: "images/currency/ethereum_classic.png",
			floor_price: "948.55",
			hour_1_status: "increment",
			hour_1: "0.09",
			hour_24_status: "increment",
			hour_24: "0.09",
			days_7_status: "increment",
			days_7: "0.09",
			volume: "34,235,345,876.00",
		},
		{
			name: "Uniswap",
			coin_icon: "images/currency/uniswap.png",
			floor_price: "328.85",
			hour_1_status: "decrement",
			hour_1: "0.09",
			hour_24_status: "decrement",
			hour_24: "0.09",
			days_7_status: "decrement",
			days_7: "0.09",
			volume: "34,235,345,876.00",
		},
	];
}
</script>

<style scoped lang="scss">
.market-box {
	margin: 100px 0px;
	.data {
		margin: 50px 0px;
		overflow-x: auto;
		border-radius: 25px;
		@media (max-width: 480px) {
			margin: 30px 0px;
		}
		.table {
			border-collapse: collapse;
			border-radius: 25px;
			overflow: hidden;
			th,
			td {
				border: none;
				padding: 30px 25px;
				@media (max-width: 480px) {
					padding: 10px 20px;
				}
			}
			td {
				background: rgba(59, 24, 119, 0.1);
			}
			th {
				background: rgba(255, 255, 255, 0.05);
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
					.serial,
					.name,
					.floor-price,
					.one-hour-percentage,
					.twenty-four-hour-percentage,
					.seven-day-percentage,
					.volume {
						.content {
							height: 30px;
							display: flex;
							flex-direction: row;
							align-items: center;
							gap: 10px;
							.coin-image {
								width: 10%;
							}
						}
					}
					.serial {
						font-weight: 500;
						font-size: 14px;
						color: #ffffff;
					}
					.name {
						.content {
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
