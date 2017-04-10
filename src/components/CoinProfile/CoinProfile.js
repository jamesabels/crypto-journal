import { Component } from 'jumpsuit'

import CoinOverviewChart from '../Charts/CoinOverviewChart/CoinOverviewChart'

const CoinProfile = Component({
    render() {
        return (
            <div className='profile-wrap'>
                <div className="profile-header">
                    <i className={`crypto-icon cc ${this.props.currentCoin.icon}`} />
                    <p className="crypto-name">{this.props.currentCoin.name}</p>
                    <p className="crypto-price">{this.props.currentCoin.icon}: {this.props.currentCoin.currentPrice}</p>
                </div>
                <CoinOverviewChart coinName={this.props.currentCoin.name} timeSpan={this.props.currentCoin.timeSpan} />
            </div>
        )
    }
}, (state) => {
    return {
        currentCoin: state.coinProfileState.currentCoin,
        navList: state.navigationState.navList
    }
});

export default CoinProfile;