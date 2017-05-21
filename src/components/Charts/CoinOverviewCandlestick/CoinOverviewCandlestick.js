import { Component, Actions } from 'jumpsuit'
import { ChartCanvas, Chart } from 'react-stockcharts'
import { formatTime, formatUSD } from '../../../libs/dataFormatter';
import moment from 'moment'

const CoinOverviewCandelstick = Component({
    getYear() {
        Actions.setTimeSpan('Year');
        Actions.getCoinData({symbol: this.props.symbol, time: Date.now(), limit: 365, interval: 29});
    },
    get90Days() {
        Actions.setTimeSpan('90 Days');
        Actions.getCoinData({symbol: this.props.symbol, time: Date.now(), limit: 90, interval: 29});
    },
    getMonth() {
        Actions.setTimeSpan('Month');
        Actions.getCoinData({symbol: this.props.symbol, time: Date.now(), limit: 30, interval: 29});
    },
    getWeek() {
        Actions.setTimeSpan('Week');
        Actions.getCoinData({symbol: this.props.symbol, time: Date.now(), limit: 7, interval: 1});
    },
    getDay() {
        Actions.setTimeSpan('Day');
        Actions.getCoinData({symbol: this.props.symbol, time: Date.now(), limit: 1, interval: 1});
    },
    render() {
        return (
            <div className="overview-wrap">
                <div className="chart-header">
                    <h1 className="chart-title">{this.props.coinName} - {this.props.timeSpan}</h1>
                </div>
                <div className="overview-section">
                <ChartCanvas width={1050} height={400}
                        margin={{left: 50, right: 50, top:10, bottom: 30}} type={type}
                        seriesName={this.props.symbol}
                        data={this.props.data}
                        xAccessor={d => d.date} xScaleProvider={discontinuousTimeScaleProvider}
                        xExtents={[new Date(2012, 0, 1), new Date(2012, 6, 2)]}>

                    <Chart id={1} yExtents={d => [d.high, d.low]}>
                        <XAxis axisAt="bottom" orient="bottom" ticks={6}/>
                        <YAxis axisAt="left" orient="left" ticks={5} />
                        <CandlestickSeries />
                    </Chart>
                </ChartCanvas>
                </div>
                <div className="button-bar">
                    <button className="button time-button" onClick={() => this.getDay()}>Day</button>
                    <button className="button time-button" onClick={() => this.getWeek()}>Week</button>
                    <button className="button time-button" onClick={() => this.getMonth()}>30 Days</button>
                    <button className="button time-button" onClick={() => this.get90Days()}>90 Days</button>
                    <button className="button time-button" onClick={() => this.getYear()}>Year</button>
                </div>
            </div>
        )
    }
});

export default CoinOverviewCandelstick;
