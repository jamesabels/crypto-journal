import { Component, Actions, Link } from 'jumpsuit'
import numeral from 'numeral'

const Simulation = Component({
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
                <div className='simulation-wrap'>
                    <div className="simulation-header">
                        <h1>Simulation</h1>
                    </div>
                </div>
            )
        }
    }
}, (state) => {
    return {
    }
});

export default Simulation;