import { Component, Actions } from 'jumpsuit'
import { AreaChart, Area, Line, CartesianGrid, XAxis, YAxis, Legend, Bar, Tooltip, BarChart } from 'recharts'
import { formatTime, formatUSD } from '../../../libs/dataFormatter';
import moment from 'moment'

const CoinOverviewChart = Component({
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
                    <AreaChart width={1050} height={300} data={this.props.data} margin={{ top: 5, right: 10, bottom: 5, left: 10 }}>
                        <XAxis
                            dataKey="time"
                            interval={this.props.interval}
                            tickFormatter={(tick) => formatTime(tick, 'MM/DD/YY')}
                        />
                        <YAxis
                            tickFormatter={(tick) => formatUSD(tick)}
                        />
                        <CartesianGrid strokeDasharray="3 3"/>
                        <Tooltip formatter={(tick) => formatUSD(tick)} labelFormatter={(tick) => formatTime(tick, 'MM/DD/YYYY')} />
                        <Area type='monotone' dataKey='high' stroke='#8884d8' fill='#8884d8' />
                    </AreaChart>
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

export default CoinOverviewChart;