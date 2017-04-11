import numeral from 'numeral'
import moment from 'moment'

export function averageValues (high, low) {
    return high + low / 2;
}

export function formatOverviewChartData(responseData) {
    let oldData = responseData;
    let newdata = [];

    oldData.forEach(function (obj, index) {
        let averageValue = averageValues(obj.high, obj.low);
        newdata.push({
            time: obj.time,
            value: averageValue
        })
    });

    return newdata;
}