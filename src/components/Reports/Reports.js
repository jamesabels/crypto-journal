import { Component, Actions, Link } from 'jumpsuit'
import numeral from 'numeral'

const Reports = Component({
    componentDidMount() {
    },
    componentDidUpdate() {
        // console.log(this.props.currentCoin)
    },
    render() {
        if (this.props.priceLoading && this.props.infoLoading && this.props.dataLoading ) {
            return (
                <h1>Loading!</h1>
            )
        }
        else {
            return (
                <div className='reports-wrap'>
                    <div className="reports-header">
                        <h1>Reports</h1>
                    </div>
                </div>
            )
        }
    }
}, (state) => {
    return {
    }
});

export default Reports;