import numeral from 'numeral'
import moment from 'moment'

export function formatTime (value, format) {
    return moment(value * 1000).format(format);
}

export function formatUSD(value) {
    return numeral(value).format('$0,0.00')
}