import { State, Effect, Actions } from 'jumpsuit'
import { formatOverviewChartData } from '../libs/dataParser';
import axios from 'axios'

// URLS
const priceURL = 'https://min-api.cryptocompare.com/data/price';
const snapURL = 'https://www.cryptocompare.com/api/data/coinsnapshot';
const dataURL = 'https://min-api.cryptocompare.com/data/histoday';

const coinProfileState = State({
    initial: {
        loadingPrice: false,
        loadingInfo: false,
        loadingData: false,
        profileError: null,
        symbol: 'BTC',
        name: null,
        timeSpan: 'Year',
        currentPrice: {},
        currentData: null,
        dataInterval: null
    },
    priceIsLoading(state, loadingPrice) {
      return { loadingPrice };
    },
    infoIsLoading(state, loadingInfo) {
        return { loadingInfo };
    },
    dataIsLoading(state, loadingData) {
        return { loadingData };
    },
    setCoinPrice(state, currentPrice) {
        return { currentPrice };
    },
    setProfileError(state, profileError) {
        return { profileError };
    },
    setCoinSymbol(state, symbol) {
        return { symbol };
    },
    setCoinName(state, name ) {
        return { name };
    },
    setCurrentData(state, currentData)  {
        return { currentData };
    },
    setDataInterval(state, dataInterval) {
        return { dataInterval };
    },
    setTimeSpan(state, timeSpan) {
        return { timeSpan };
    }
});

Effect('getCoinPrice', (crypto) => {

    Actions.setCoinSymbol(crypto);

    Actions.priceIsLoading(true);

    let url = `${priceURL}?fsym=${crypto}&tsyms=${'BTC,USD,EUR'}`;

    return axios.get(url)
        .then((res) => {
            // Once we have the contacts, load them into our Contacts state
            Actions.setCoinPrice(res.data);
            Actions.priceIsLoading(false);
        })
        .catch((err) => {
            // If we get an error, let the contacts state know
            Actions.setProfileError(err);
            Actions.priceIsLoading(false);
        })
});

Effect('getCoinInfo', (crypto) => {
    Actions.setCoinSymbol(crypto);

    Actions.infoIsLoading(true);

    let url = `${snapURL}/?fsym=${crypto}&tsym=${'BTC'}`;

    return axios.get(url)
        .then((res) => {
        console.log(res);
            Actions.setCoinPrice(res.data.Data.AggregatedData.PRICE);
            Actions.infoIsLoading(false);
        })
        .catch((err) => {
            // If we get an error, let the contacts state know
            Actions.setProfileError(err);
            Actions.infoIsLoading(false);
        })
});

Effect('getCoinData', (params) => {
    Actions.setCoinSymbol(params.symbol);

    Actions.dataIsLoading(true);

    let url = `${dataURL}?fsym=${params.symbol}&tsym=${'USD'}&limit=${params.limit}&aggregate=1&toTs=${params.time}&extraParams=crypto-journal`;

    console.log(url);
    return axios.get(url)
        .then((res) => {
            console.log(res);
            let newData = formatOverviewChartData(res.data.Data);
            console.log(newData);
            Actions.setCurrentData(res.data.Data);
            Actions.setDataInterval(params.interval);
            Actions.dataIsLoading(false);
        })
        .catch((err) => {
            // If we get an error, let the contacts state know
            Actions.setProfileError(err);
            Actions.dataIsLoading(false);
        })
});

export default coinProfileState;
