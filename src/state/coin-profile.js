import { State } from 'jumpsuit'

// COIN CONSTANTS
export const BITCOIN = 'BTC';

const coinProfileState = State({
    initial: {
        currentCoin: {
            icon: BITCOIN,
            name: 'Bitcoin',
            timeSpan: 'Today',
            currentPrice: '$1,000'
        }
    },
    navigate(path) {
        console.log(path);
    }
});

export default coinProfileState;
