import { State, Effect, Actions } from 'jumpsuit'


const portfolioState = State({
    initial: {
        portfolioTotal: 0,
        coinList: [
            { symbol: 'BTC' },
            { symbol: 'ETH' },
            { symbol: 'LTC' }
        ]
    }
});


export default portfolioState;
