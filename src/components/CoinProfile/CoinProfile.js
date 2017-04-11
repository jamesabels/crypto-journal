import { Component, Actions } from 'jumpsuit'
import numeral from 'numeral'

import CoinOverviewChart from '../Charts/CoinOverviewChart/CoinOverviewChart'

const CoinProfile = Component({
    componentDidMount() {
        Actions.getCoinInfo(this.props.params.coinSymbol);
        Actions.getCoinPrice(this.props.params.coinSymbol);
        Actions.getCoinData({symbol: this.props.params.coinSymbol, time: Date.now(), limit: 365, interval: 29});
    },
    componentDidUpdate() {
      // console.log(this.props.currentCoin)
    },
    render() {
        if (this.props.priceLoading && this.props.infoLoading && this.props.dataLoading ) {
            return (
                <h1>Loading!</h1>
            )
        }
        else {
            return (
                <div className='profile-wrap'>
                    <div className="profile-header">
                        <i className={`crypto-icon cc ${this.props.currentCoin.symbol}`} />
                        <p className="crypto-name">{this.props.currentCoin.symbol}</p>
                        <p className="crypto-price price-usd">{'USD'}: {numeral(this.props.priceUSD).format('$0,0.00')}</p>
                        <p className="crypto-price price-eur">{'EUR'}: {numeral(this.props.priceEUR).format('$0,0.00')}</p>
                    </div>
                    <CoinOverviewChart
                        symbol={this.props.currentCoin.symbol}
                        coinName={this.props.currentCoin.symbol}
                        timeSpan={this.props.currentCoin.timeSpan}
                        data={this.props.currentData}
                        interval={this.props.dataInterval}
                    />
                </div>
            )
        }
    }
}, (state) => {
    return {
        currentCoin: state.coinProfileState,
        currentData: state.coinProfileState.currentData,
        priceUSD: state.coinProfileState.currentPrice,
        priceLoading: state.coinProfileState.loadingPrice,
        infoLoading: state.coinProfileState.loadingInfo,
        dataLoading: state.coinProfileState.loadingData,
        dataInterval: state.coinProfileState.dataInterval
    }
});

export default CoinProfile;