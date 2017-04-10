import { Component } from 'jumpsuit'
import { AreaChart, Area, Line, CartesianGrid, XAxis, YAxis, Legend, Bar, Tooltip, BarChart } from 'recharts'

const data = [
    {name: 'a', value: 1},
    {name: 'b', value: 20},
    {name: 'c', value: 10},
];

const CoinOverviewChart = Component({
    render() {
        return (
            <div className="overview-wrap">
                <div className="chart-header">
                    <h1 className="chart-title">{this.props.coinName} - {this.props.timeSpan}</h1>
                </div>
                <div className="overview-section">
                    <AreaChart width={1100} height={300} data={data}>
                        <XAxis dataKey="name"/>
                        <YAxis/>
                        <CartesianGrid strokeDasharray="3 3"/>
                        <Tooltip/>
                        <Area type='monotone' dataKey='value' stroke='#8884d8' fill='#8884d8' />
                    </AreaChart>
                </div>
                <div className="button-bar">
                    <div className="button time-button">Day</div>
                    <div className="button time-button">Week</div>
                    <div className="button time-button">30 Days</div>
                    <div className="button time-button">90 Days</div>
                    <div className="button time-button">Year</div>
                </div>
            </div>
        )
    }
}, (state) => {
    return {
        currentCoin: state.navigationState.currentCoin,
        navList: state.navigationState.navList
    }
});

export default CoinOverviewChart;