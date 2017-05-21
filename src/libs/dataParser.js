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

export function formatOveriewCandelstickData(responseData) {
  let oldData = responseData;
  let newdata = [];

  oldData.forEach(function (obj, index) {
      let averageValue = averageValues(obj.high, obj.low);
      newdata.push({
          date: obj.time,
          obj.open,
          obj.high,
          obj.low,
          obj.close
      })
  });

  return newdata;
}
