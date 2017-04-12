import { Component, Actions, Link } from 'jumpsuit'
import numeral from 'numeral'

const Portfolio = Component({
    componentDidMount() {
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
                <div className='portfolio-wrap'>
                    <div className="portfolio-header">
                        <h1 className="combined-total total-usd">{numeral(this.props.priceUSD).format('$0,0.00')}</h1>
                    </div>
                    <div className="button-bar">
                        <button className="button add-coin-button">Add Coin</button>
                    </div>
                    <div className="coin-list-wrap">
                        <ul className="coin-list">
                            {this.props.coinList.map(function(coin, index) {
                                return (
                                    <li key={`coin-${index}`} className="coin-list-item">
                                        <Link to={`/profile/${coin.symbol}`}>
                                            <i className={`coin-list-icon cc ${coin.symbol}`} />
                                            <p className="coin-list-name">{coin.symbol}</p>
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            )
        }
    }
}, (state) => {
    return {
        coinList: state.portfolioState.coinList
    }
});

export default Portfolio;