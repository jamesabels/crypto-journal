import { State, Effect, Actions } from 'jumpsuit'


const portfolioState = State({
    initial: {
        portfolioTotal: 0,
        coinList: [
            { symbol: 'BTC' },
            { symbol: 'ETH' },
            { symbol: 'ETC' },
            { symbol: 'LTC' },
            { symbol: 'DCR' }
        ]
    }
});


export default portfolioState;
